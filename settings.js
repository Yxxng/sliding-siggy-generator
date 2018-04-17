module.exports = {
  name: 'NRPG_Kari',
  prefix: 'kari',
  pug: {
    link: './NRPG_Kari.signature.css',
    titles: [
      'Character Info',
      'Character Stats',
      'Stat Page',
      'Character App'
    ]
  },
  style: {
    images: [
      'https://i.imgur.com/oNK829v.png',
      'https://i.imgur.com/XWeXIOb.png',
      'https://i.imgur.com/W1kkBkY.png',
      'https://i.imgur.com/upd3A0s.png'
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