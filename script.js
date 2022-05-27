const inputText = document.getElementById('text-input');
const imageUpload = document.getElementById('meme-insert');
const memeImg = document.getElementById('meme-image');
const memeText = document.getElementById('meme-text');

function showMemeText() {
  memeText.innerText = inputText.value;
}

inputText.addEventListener('keyup', showMemeText);

function showMemeImage(event) {
  let src = URL.createObjectURL(event.target.files[0]); // https://developer.mozilla.org/pt-BR/docs/Web/API/URL/createObjectURl // https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#example.3a_using_object_urls_to_display_images
  memeImg.src = src;
}

imageUpload.addEventListener('input', showMemeImage);