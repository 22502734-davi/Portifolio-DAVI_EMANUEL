const toggleSwitch = document.getElementById('checkbox');
const rootElement = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'dark';

if (savedTheme === 'dark') {
  rootElement.setAttribute('data-theme', 'dark');
  toggleSwitch.checked = true;
} else {
  rootElement.setAttribute('data-theme', 'light');
  toggleSwitch.checked = false;
}

toggleSwitch.addEventListener('change', (e) => {
  if (e.target.checked) {
    rootElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    rootElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
});