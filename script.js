const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

function showMemeText() {
  memeText.innerText = inputText.value;
}

inputText.addEventListener('keyup', showMemeText);
