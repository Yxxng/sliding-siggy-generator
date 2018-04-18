module.exports = {
  name: 'NRPG_Kari',
  prefix: 'kari',
  pug: {
    link: 'https://zee1234.github.io/sliding-siggy-generator/output/NRPG_Kari.signature.css',
    titles: [
      'Character Info',
      'Character Stats',
      'Stat Page',
      'Character App'
    ]
  },
  style: {
    images: [
      'https://i.imgur.com/upd3A0s.png',
      'https://i.imgur.com/W1kkBky.png',
      'https://i.imgur.com/XWeXIob.png',
      'https://i.imgur.com/oNK829v.png'
    ],
    special: `
  .$prefix_w1 {
  }
  .$prefix_w2 {
  }
  .$prefix_w3 {
    top: 50px;
    left: 100px;
  }
  .$prefix_w4 {
    top: 50px;
    left: 150px;
  }
`
  }
}
