const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const theme1Content = document.querySelector('.theme1-content');
const theme2Content = document.querySelector('.theme2-content');

themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    body.classList.remove('theme1');
    body.classList.add('theme2');
    theme1Content.classList.add('hidden');
    theme2Content.classList.remove('hidden');
  } else {
    body.classList.remove('theme2');
    body.classList.add('theme1');
    theme2Content.classList.add('hidden');
    theme1Content.classList.remove('hidden');
  }
});
