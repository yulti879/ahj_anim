import Collapse from './Collapse';

describe('Collapse', () => {
  let container;
  let collapse;

  beforeEach(() => {
    // Создаем контейнер
    container = document.createElement('div');
    container.id = 'widget-container';
    document.body.appendChild(container);

    // Инициализируем виджет
    collapse = new Collapse(container);
    collapse.init();
  });

  afterEach(() => {    
    document.body.removeChild(container); // Очищаем контейнер после каждого теста
  });

  it('should render widget HTML and CSS', () => {
    // Проверяем, что HTML и CSS добавлены в контейнер
    expect(container.innerHTML).toContain('collapse__btn');
    expect(container.innerHTML).toContain('collapse__block');
    expect(container.innerHTML).toContain('collapse__text');
    expect(container.innerHTML).toContain('<style>');
  });

  it('should expand and collapse the block on button click', () => {
    const btn = container.querySelector('.collapse__btn');
    const block = container.querySelector('.collapse__block');

    expect(getComputedStyle(block).height).toBe('0px'); // Проверяем, что в начальном состоянии блок скрыт

    btn.click();
    
    expect(block.style.height).toBe(`${block.scrollHeight}px`); // Проверяем, что блок раскрылся

    btn.click();

    expect(getComputedStyle(block).height).toBe('0px'); // Проверяем, что блок скрылся
  });
});