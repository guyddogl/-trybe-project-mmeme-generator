const inputText = document.getElementById('text-input');
const imageUpload = document.getElementById('meme-insert');
const memeImg = document.getElementById('meme-image');
const memeText = document.getElementById('meme-text');
const memeContainer = document.getElementById('meme-image-container');

// Requisito 1
function showMemeText() {
  memeText.innerText = inputText.value;
}

inputText.addEventListener('keyup', showMemeText);

// Requisito 2
function showUploadImage(event) {
  const src = URL.createObjectURL(event.target.files[0]); // https://developer.mozilla.org/pt-BR/docs/Web/API/URL/createObjectURl // https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#example.3a_using_object_urls_to_display_images
  memeImg.src = src;
}

imageUpload.addEventListener('input', showUploadImage);

// Requisito 6
function setBorder(event) {
  const typeBorder = event.target.id;
  memeContainer.className = '';
  if (typeBorder === 'fire') {
    memeContainer.classList.add('fire');
  } else if (typeBorder === 'water') {
    memeContainer.classList.add('water');
  } else {
    memeContainer.classList.add('earth');
  }
}

const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');

fire.addEventListener('click', setBorder);
water.addEventListener('click', setBorder);
earth.addEventListener('click', setBorder);

// Requisito 7
function showSuggestImage(event) {
  let src = event.target.id;
  src = src.split('-');
  src = src.join('');
  memeImg.src = `imgs/${src}.png`;
  console.log(memeImg);
}
const suggestImg = document.getElementsByClassName('meme-img');

function imgMeme(image) {
  const imgElement = image;
  for (let index = 0; index < imgElement.length; index += 1) {
    imgElement[index].addEventListener('click', showSuggestImage);
    imgElement[index].style.cursor = 'pointer';
  }
}
imgMeme(suggestImg);
