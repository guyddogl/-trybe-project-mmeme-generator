const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeImg = document.getElementById('meme-image');

function showMemeText() {
  memeText.innerText = inputText.value;
}

inputText.addEventListener('keyup', showMemeText);

function showMemeImage(event) {
  let src = URL.createObjectURL(event.target.files[0]);
  memeImg.src = src;
}
