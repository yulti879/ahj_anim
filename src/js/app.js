import Collapse from './Collapse';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.widget-container');
  const collapse = new Collapse(container);
  collapse.init();
});