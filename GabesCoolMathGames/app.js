const proxyFrame = document.getElementById('proxyFrame');
const faviconSelector = document.querySelector('.favicon-selector');
const nameInput = document.querySelector('.name-input');

function loadPage(url) {
  proxyFrame.src = url;
}

function toggleFaviconSelector() {
  faviconSelector.classList.toggle('favicon-selector');
}

function changeFavicon(selector) {
  const selectedFavicon = selector.value;
  const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = selectedFavicon;
  document.getElementsByTagName('head')[0].appendChild(link);
}

function toggleNameInput() {
  nameInput.classList.toggle('name-input');
}

function changeTabName(input) {
  document.title = input.value.trim() || "Gabes Math Tutorials";
}
