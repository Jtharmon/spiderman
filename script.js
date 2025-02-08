const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const peterParkerContent = document.getElementById('peterParkerContent');

themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    body.classList.remove('theme1');
    body.classList.add('theme2');
    peterParkerContent.classList.remove('hidden');
  } else {
    body.classList.remove('theme2');
    body.classList.add('theme1');
    peterParkerContent.classList.add('hidden');
  }
});
