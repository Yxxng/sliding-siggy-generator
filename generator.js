const autoprefixer = require('autoprefixer')
const {promisify} = require('util')
const postcss = require('postcss')
const pug = require('pug')
const fs = require('fs')

let pReadFile = promisify(fs.readFile)
let pWriteFile = promisify(fs.writeFile)

let settings = require('./settings')
settings.pug.prefix = settings.prefix

async function cssCompiler() {
  let cssish = await pReadFile('./signature.cssish', 'utf8')
  let precss = cssish
                .replace(/\$SpecialtySettings/, settings.style.special)
                .replace(/\$prefix/g, settings.prefix)
                .replace(/\$image1/, settings.style.images[0])
                .replace(/\$image2/, settings.style.images[1])
                .replace(/\$image3/, settings.style.images[2])
                .replace(/\$image4/, settings.style.images[3])

  let cssContainer = await postcss([autoprefixer]).process(precss, { from: './' })

  cssContainer.warnings().forEach( warn => console.warn(warn.toString()) )

  return cssContainer.css
}

async function htmlCompiler() {
  let prehtml = await pReadFile('./signature.pug', 'utf8')
  let compedhtml = pug.compile(prehtml, {pretty: false})(settings.pug)
  let formattedHTML = compedhtml.replace(/{{{WORDS GO HERE}}}/g, '\n{{{WORDS GO HERE}}}\n')

  return formattedHTML
}


async function doTheThing() {
  let [css, html] = await Promise.all([cssCompiler(), htmlCompiler()])
  pWriteFile(`./output/${settings.name}.signature.css`, css)
  pWriteFile(`./output/${settings.name}.signature.html`, html)
}

doTheThing()