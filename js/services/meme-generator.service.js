'usr strict'

var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['actually', 'trump'] }]

let gMeme = {
  selectedImgId: 5,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'I sometimes eat Falafel',
      size: 20,
      color: 'red'
    }
  ]
}

function selectImg(imgId) {
  gMeme.selectedImgId = imgId
}

function getMeme() {
  return gMeme
}

function getImgById(imgId) {
  const img = gImgs.find(img => img.id = imgId)
  return img
}

