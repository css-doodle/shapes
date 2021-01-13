const THEME = 'theme';
const DARK = 'dark';
const LIGHT = 'light';

let callStack = [];

let listened = false;

let mq = window.matchMedia('(prefers-color-scheme: light)');

function handleChange(e) {
  const value = e.matches ? DARK : LIGHT;
  broadcast({ type: 'system', theme: value });
}

function listenSystemThemeChange() {
  if (!listened) {
    try {
      mq.addEventListener('change', handleChange);
    } catch (e) {
      try {
        mq.addListener('change', handleChange);
      } catch (e) {}
    }
  }
  listened = true;
}

function getTheme() {
  let local = localStorage.getItem(THEME);
  if (local) return local;
  return (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches)
    ? LIGHT : DARK;
}

function hasLocalTheme() {
  return !!localStorage.getItem(THEME);
}

function saveTheme(value) {
  localStorage.setItem(THEME, value);
  broadcast({ type: 'local', theme: value });
}

function broadcast(data) {
  callStack.forEach(fn => fn(data));
  writeAttribute();
}

function onChange(fn) {
  listenSystemThemeChange();
  callStack.push(fn);
}

function writeAttribute() {
  let theme = getTheme();
  if (hasLocalTheme()) {
    document.body.setAttribute(THEME, theme);
  }
  let color = theme === DARK ? '#000000' : '#ffffff';
  let meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.content = color;
  }
}

export default {
  writeAttribute,
  getTheme,
  saveTheme,
  onChange
}
