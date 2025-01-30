const log = () => {
  const consoleStyles = {
    bold: "font-size: 16px; font-weight: 900; font-family: Arial; text-transform: uppercase; color: #13122c;",
    text: "font-size: 14px; font-weight: 400; font-family: Arial; color: #13122c;",
    "text-border":
      "font-size: 14px; font-weight: 400; font-family: Arial; color: #13122c; border-bottom: 2px solid #74D8FD;",
    "": "",
  };

  const logger = (msg, style) => {
    console.log("%c" + msg, consoleStyles[style]);
  };

  logger("вёрстка валидная +10", "bold");
  logger(
    `Надпись "Document checking completed. No errors or warnings to show." +10`,
    "text-border"
  );
  logger("", "");

  logger("вёрстка семантическая +24", "bold");
  logger(
    "В коде страницы присутствуют семантические теги HTML5" +
      " header, main, footer, 7 section," +
      " используются заголовки h1-h6. Заголовок h1 может быть только один." +
      ' 7 h2, 6 h3, nav, ul > li > a, button,  input type="radio",  input type="number",  input type="range" ' +
      " для всех элементов img указан атрибут alt",
    "text-border"
  );
  logger(
    'header, main, footer, section, nav, h1, h2, h3, ul > li > a,  button,  input type="radio", ' +
      ' input type="number",  input type="range" ',
    "text-border"
  );
  logger("", "");

  logger("Вёрстка соответствует макету +45", "bold");
  logger(
    "блок header, " +
      "секция Welcome, " +
      "секция Visiting, " +
      "секция Explore, " +
      "секция Video, " +
      "секция Gallery, " +
      "секция Tickets," +
      "секция Contacts, " +
      "блок footer",
    "text-border"
  );
  logger("", "");

  logger("Форма покупки билетов +22", "bold");
  logger(
    "форма плавно выдвигается слева при открытии и плавно возвращается назад " +
      "форма открывается при клике по кнопке Buy Now в секции Tickets и закрывается кликом по иконке с крестиком" +
      "в верхнем правом углу или кликом по overlay " +
      'form, input type="date", input type="time", input type="text",' +
      'input type="email", input type="tel", input type="number", select' +
      " вёрстка формы соответствует макету",
    "text-border"
  );
  logger("", "");

  logger("css-стили +18", "bold");
  logger(
    "добавлен favicon" +
      " для построения сетки используются флексы" +
      " при уменьшении масштаба страницы браузера вёрстка размещается по центру" +
      " фоновый цвет каждого блока и секции тянется на всю ширину страницы" +
      "иконки добавлены в формате .svg." +
      " расстояние между буквами, там, где это требуется по макету, регулируется css-свойством letter-spacing" +
      " переключаются радиокнопки в блоке Tickets, одновременно может быть выбрана только одна кнопка" +
      " в блоке Contacts правильно указанны ссылки на почту mailto и на телефон tel" +
      " в футере добавлены ссылки на" +
      "соцсети. Круглая граница вокруг иконок соцсетей выполнена при помощи css",
    "text-border"
  );
  logger("", "");

  logger("Интерактивность, реализуемая через css +25", "bold");
  logger(
    "плавная прокрутка по якорям " +
      "параллакс" +
      "при кликам по кнопке Discover the Louvre и карточкам " +
      " секции Visiting открываются полноэкранные панорамы Google Street View встроенные в страницы вашего сайта при" +
      " помощи iframe" +
      "изменение стиля интерактивных элементов при наведении и клике" +
      " плавное изменение внешнего " +
      "вида элемента при наведении и клике не влияющее на соседние элементы" +
      " интерактивность при наведении карточек " +
      " в секции Visiting предусматривает плавное растягивание подчёркивания заголовка карточки на всю ширину карточки" +
      " интерактивность при наведении иконок социальных сетей в футере предусматривает изменение цвета иконки и круглой" +
      " границы вокруг иконки на золотистый",
    "text-border"
  );
  logger("", "");

  logger("Интерактивность, реализуемая через js +16", "bold");
  logger(
    "можно передвигать ползунки громкости и прогресс-бара видео, при этом цвет шкалы до и после ползунка " +
      "отличается и соответствует макету" +
      " кликами по кнопкам + и - в секции Tiskets можно менять количество " +
      "билетов Basic и Senior от 0 до 20" +
      ' кнопке "Book" в форме покупки билетов добавлен ripple-эффект' +
      " при перезагрузке (обновлении) страницы картины в блоке Galery отображаются в рандомном порядке",
    "text-border"
  );
  logger("", "");

  logger("Итоговая оценка: 150", "bold");
};

export { log };
