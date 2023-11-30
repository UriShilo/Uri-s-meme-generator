'usr strict'

let gElCanvas
let gCtx

function onInit() {
  gElCanvas = document.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')

}

function onSelectImg(imgId) {
  selectImg(imgId)
  renderMeme()
}

function renderMeme() {
  const elTitle = document.querySelector('.meme-title')
  elTitle.innerText = prompt('Enter new meme title:')

  const meme = getMeme()

  //setImg
  //setText
  
  const img = getImgById(meme.selectedImgId)
  console.log(img.url)

  const elImg = new Image()
  console.log('elImg:', elImg)
  elImg.src = img.url

  gElCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width
  console.log(gElCanvas.height)

  gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}