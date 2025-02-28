export default class Collapse {
  constructor(container) {
    this.container = container;
  }

  init() {
    this.onClick = this.onClick.bind(this);
    this.render();
    this.bindToDom();
  }

  render() {
    const widgetHTML = `
      <section class="page">
        <div class="container">        
          <div class="collapse__btn">Нажмите, чтобы узнать больше</div>
          <div class="collapse__block">
            <div class="collapse__text"><p>Сворачивающиеся блоки дают возможность динамически «прятать» своё содержимое (с помощью JavaScript в браузере посетителя), оставляя только заголовок.</p>
            <p>Сворачивающиеся блоки обычно используются для навигационных шаблонов и скрытия больших кусков необязательного текста, то есть такой информации, которая заинтересует не всех читателей.</p>
            
            <p><i>Википедия</i></p>
</div>
          </div>
        </div>
      </section>
    `;

    const widgetStyles = `
      <style>
        .page {
          padding: 100px;
          background: #f5f5f5;
        }

        .container {
          background: #ffffff;
          padding: 25px;
        }

        .collapse__btn {
          display: inline-block;
          margin-bottom: 20px;
          padding: 5px 10px;
          border-radius: 5px;
          color: #ffffff;
          background: #2f60eb;
          border: 2px solid #4eb4ce;
          cursor: pointer;
        }

        .collapse__block {
          height: 0;
          overflow: hidden;
          transition: height 1400ms;
        }

        .collapse__text {          
          padding: 10px;
          border: 1px solid #c5c5c5;
          border-radius: 5px;
        }

        .expanded {
          transition: height 2s;
        }
      </style>
    `;

    this.container.innerHTML = widgetStyles + widgetHTML;
  }

  bindToDom() {
    this.btnClick();
  }

  btnClick() {
    const btn = this.container.querySelector('.collapse__btn');
    btn.addEventListener('click', this.onClick);
  }

  onClick() {
    const block = this.container.querySelector('.collapse__block');
    const text = block.querySelector('.collapse__text');
    const className = 'expanded';

    if (block.classList.contains(className)) {
      block.classList.remove(className);
      block.style.height = 0;
    } else {
      block.classList.add(className);
      block.style.height = `${text.offsetHeight}px`;
    }
  }
}