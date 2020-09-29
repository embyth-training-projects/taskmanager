/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/*! exports provided: COLORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORS", function() { return COLORS; });
// Цвета заложеные в проект
const COLORS = [`black`, `yellow`, `blue`, `green`, `pink`];


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_site_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/site-menu */ "./src/view/site-menu.js");
/* harmony import */ var _view_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/filter */ "./src/view/filter.js");
/* harmony import */ var _view_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/board */ "./src/view/board.js");
/* harmony import */ var _view_task_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/task-edit */ "./src/view/task-edit.js");
/* harmony import */ var _view_task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/task */ "./src/view/task.js");
/* harmony import */ var _view_load_more_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/load-more-button */ "./src/view/load-more-button.js");
/* harmony import */ var _mock_task__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mock/task */ "./src/mock/task.js");
/* harmony import */ var _mock_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mock/filter */ "./src/mock/filter.js");









// Константа количества карточек заданий
const TASK_AMOUNT = 22;
const TASK_AMOUNT_PER_STEP = 8;

const tasks = new Array(TASK_AMOUNT).fill().map(_mock_task__WEBPACK_IMPORTED_MODULE_6__["generateTask"]);
const filters = Object(_mock_filter__WEBPACK_IMPORTED_MODULE_7__["generateFilter"])(tasks);

// Функция отрисовки элемента в контейнер
const renderComponent = (container, element, place = `beforeend`) => {
  container.insertAdjacentHTML(place, element);
};

// Отрисовываем шаблоны на страницу
const siteMainNode = document.querySelector(`.main`);
const siteHeaderNode = siteMainNode.querySelector(`.main__control`);

renderComponent(siteHeaderNode, Object(_view_site_menu__WEBPACK_IMPORTED_MODULE_0__["createSiteMenuTemplate"])());
renderComponent(siteMainNode, Object(_view_filter__WEBPACK_IMPORTED_MODULE_1__["createFilterTemplate"])(filters));
renderComponent(siteMainNode, Object(_view_board__WEBPACK_IMPORTED_MODULE_2__["createBoardTemplate"])());

const boardNode = siteMainNode.querySelector(`.board`);
const taskListNode = boardNode.querySelector(`.board__tasks`);

renderComponent(taskListNode, Object(_view_task_edit__WEBPACK_IMPORTED_MODULE_3__["createEditTaskTemplate"])(tasks[0]));

tasks
  .slice(1, Math.min(tasks.length, TASK_AMOUNT_PER_STEP))
  .forEach((task) => renderComponent(taskListNode, Object(_view_task__WEBPACK_IMPORTED_MODULE_4__["createTaskCardTemplate"])(task)));

if (tasks.length > TASK_AMOUNT_PER_STEP) {
  let renderedTasksCount = TASK_AMOUNT_PER_STEP;

  renderComponent(boardNode, Object(_view_load_more_button__WEBPACK_IMPORTED_MODULE_5__["createLoadMoreButtonTemplate"])());

  const loadMoreButton = boardNode.querySelector(`.load-more`);

  loadMoreButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();

    tasks
      .slice(renderedTasksCount, renderedTasksCount + TASK_AMOUNT_PER_STEP)
      .forEach((task) => renderComponent(taskListNode, Object(_view_task__WEBPACK_IMPORTED_MODULE_4__["createTaskCardTemplate"])(task)));

    renderedTasksCount += TASK_AMOUNT_PER_STEP;

    if (renderedTasksCount >= tasks.length) {
      loadMoreButton.remove();
    }
  });
}


/***/ }),

/***/ "./src/mock/filter.js":
/*!****************************!*\
  !*** ./src/mock/filter.js ***!
  \****************************/
/*! exports provided: generateFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilter", function() { return generateFilter; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


// Мапа где ключи - названия фильтров, а значения - функции-счетчики
const taskToFilterMap = {
  all: (tasks) => tasks.filter((task) => !task.isArchive).length,
  overdue: (tasks) => tasks
    .filter((task) => !task.isArchive)
    .filter((task) => Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isTaskExpired"])(task.dueDate)).length,
  today: (tasks) => tasks
    .filter((task) => !task.isArchive)
    .filter((task) => Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isTaskExpiringToday"])(task.dueDate)).length,
  favorites: (tasks) => tasks
    .filter((task) => !task.isArchive)
    .filter((task) => task.isFavorite).length,
  repeating: (tasks) => tasks
    .filter((task) => !task.isArchive)
    .filter((task) => Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isTaskRepeating"])(task.repeating)).length,
  archive: (tasks) => tasks.filter((task) => task.isArchive).length,
};

// Функция-генератор фильтров
const generateFilter = (tasks) => {
  return Object.entries(taskToFilterMap).map(([filterName, countTasks]) => {
    return {
      name: filterName,
      count: countTasks(tasks),
    };
  });
};


/***/ }),

/***/ "./src/mock/task.js":
/*!**************************!*\
  !*** ./src/mock/task.js ***!
  \**************************/
/*! exports provided: generateTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTask", function() { return generateTask; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const */ "./src/const.js");



// Функция генерации описания задачи случайным образом
const generateDescription = () => {
  const descriptions = [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`,
  ];

  const randomIndex = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, descriptions.length - 1);

  return descriptions[randomIndex];
};

// Функция для генерации даты. По заданию это либо null, либо дата плюс-минус неделя от текущей
const generateDate = () => {
  const isDate = Boolean(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1));

  if (!isDate) {
    return null;
  }

  const maxDaysGap = 7;
  const daysGap = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(-maxDaysGap, maxDaysGap);
  const currentDate = new Date();

  currentDate.setHours(23, 59, 59, 999);
  currentDate.setDate(currentDate.getDate() + daysGap);

  return new Date(currentDate);
};

// Функция для генерации дней повторения (будем выбирать случайно из двух)
const generateRepeatingDays = () => {
  return {
    mo: false,
    tu: false,
    we: Boolean(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1)),
    th: false,
    fr: Boolean(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1)),
    sa: false,
    su: false
  };
};

// Функция-генератор случайного цвета
const getRandomColor = () => {
  const randomIndex = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, _const__WEBPACK_IMPORTED_MODULE_1__["COLORS"].length - 1);

  return _const__WEBPACK_IMPORTED_MODULE_1__["COLORS"][randomIndex];
};

// Функция-генератор карточки задания
const generateTask = () => {
  const dueDate = generateDate();
  const repeating = dueDate === null
    ? generateRepeatingDays()
    : {
      mo: false,
      tu: false,
      we: false,
      th: false,
      fr: false,
      sa: false,
      su: false
    };

  return {
    description: generateDescription(),
    dueDate,
    repeating,
    color: getRandomColor(),
    isArchive: Boolean(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1)),
    isFavorite: Boolean(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1)),
  };
};


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getRandomInteger, isTaskExpired, isTaskExpiringToday, isTaskRepeating, humanizeTaskDueDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTaskExpired", function() { return isTaskExpired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTaskExpiringToday", function() { return isTaskExpiringToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTaskRepeating", function() { return isTaskRepeating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "humanizeTaskDueDate", function() { return humanizeTaskDueDate; });
// Функция из интернета по генерации случайного числа из диапазона
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

// Функция получения текущей даты
const getCurrentDate = () => {
  const currentDate = new Date();
  currentDate.setHours(23, 59, 59, 999);
  return new Date(currentDate);
};

// Функция проверки просрочена ли задача
const isTaskExpired = (dueDate) => {
  if (dueDate === null) {
    return false;
  }

  const currentDate = getCurrentDate();
  return currentDate.getTime() > dueDate.getTime();
};

// Функция проверки есть ли задачи на сегодня
const isTaskExpiringToday = (dueDate) => {
  if (dueDate === null) {
    return false;
  }

  const currentDate = getCurrentDate();
  return currentDate.getTime() === dueDate.getTime();
};

// Функция проверки на повторяющиеся дни в задаче
const isTaskRepeating = (repeating) => {
  return Object.values(repeating).some(Boolean);
};

// Функция перевода даты в понятную строку
const humanizeTaskDueDate = (dueDate) => {
  return dueDate.toLocaleString(`en-US`, {day: `numeric`, month: `long`});
};


/***/ }),

/***/ "./src/view/board.js":
/*!***************************!*\
  !*** ./src/view/board.js ***!
  \***************************/
/*! exports provided: createBoardTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBoardTemplate", function() { return createBoardTemplate; });
// Функция создания шаблона контейнера с фильтрами
const createBoardTemplate = () => {
  return (
    `<section class="board container">
      <div class="board__filter-list">
        <a href="#" class="board__filter">SORT BY DEFAULT</a>
        <a href="#" class="board__filter">SORT BY DATE up</a>
        <a href="#" class="board__filter">SORT BY DATE down</a>
      </div>

      <div class="board__tasks"></div>
    </section>`
  );
};


/***/ }),

/***/ "./src/view/filter.js":
/*!****************************!*\
  !*** ./src/view/filter.js ***!
  \****************************/
/*! exports provided: createFilterTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilterTemplate", function() { return createFilterTemplate; });
// Функция создания шаблона фильтра
const createFilterItemTemplate = (filter, isChecked) => {
  const {name, count} = filter;

  return (`
    <input
      type="radio"
      id="filter__${name}"
      class="filter__input visually-hidden"
      name="filter"
      ${isChecked ? `checked` : ``}
      ${count === 0 ? `disabled` : ``}
    />
    <label for="filter__${name}" class="filter__label">
      ${name} <span class="filter__${name}-count">${count}</span>
    </label>
  `);
};

// Функция создания шаблона фильтров
const createFilterTemplate = (filterItems) => {
  const filterItemsTemplate = filterItems
    .map((filter, index) => createFilterItemTemplate(filter, index === 0))
    .join(``);

  return (
    `<section class="main__filter filter container">
      ${filterItemsTemplate}
    </section>`
  );
};


/***/ }),

/***/ "./src/view/load-more-button.js":
/*!**************************************!*\
  !*** ./src/view/load-more-button.js ***!
  \**************************************/
/*! exports provided: createLoadMoreButtonTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLoadMoreButtonTemplate", function() { return createLoadMoreButtonTemplate; });
// Функция создания шаблона кнопки "Load More"
const createLoadMoreButtonTemplate = () => {
  return (
    `<button class="load-more" type="button">load more</button>`
  );
};


/***/ }),

/***/ "./src/view/site-menu.js":
/*!*******************************!*\
  !*** ./src/view/site-menu.js ***!
  \*******************************/
/*! exports provided: createSiteMenuTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSiteMenuTemplate", function() { return createSiteMenuTemplate; });
// Функция создания шаблона меню сайта
const createSiteMenuTemplate = () => {
  return (
    `<section class="control__btn-wrap">
      <input
        type="radio"
        name="control"
        id="control__new-task"
        class="control__input visually-hidden"
      />
      <label for="control__new-task" class="control__label control__label--new-task"
        >+ ADD NEW TASK</label
      >
      <input
        type="radio"
        name="control"
        id="control__task"
        class="control__input visually-hidden"
        checked
      />
      <label for="control__task" class="control__label">TASKS</label>
      <input
        type="radio"
        name="control"
        id="control__statistic"
        class="control__input visually-hidden"
      />
      <label for="control__statistic" class="control__label"
        >STATISTICS</label
      >
    </section>`
  );
};


/***/ }),

/***/ "./src/view/task-edit.js":
/*!*******************************!*\
  !*** ./src/view/task-edit.js ***!
  \*******************************/
/*! exports provided: createEditTaskTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEditTaskTemplate", function() { return createEditTaskTemplate; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const */ "./src/const.js");



// Функция создания шаблона с выбором даты
const createEditTaskDateTemplate = (dueDate) => {
  return (`
    <button class="card__date-deadline-toggle" type="button">
      date: <span class="card__date-status">${dueDate === null ? `no` : `yes`}</span>
    </button>

    ${dueDate !== null
      ? `<fieldset class="card__date-deadline">
          <label class="card__input-deadline-wrap">
            <input
              class="card__date"
              type="text"
              placeholder=""
              name="date"
              value="${Object(_utils__WEBPACK_IMPORTED_MODULE_0__["humanizeTaskDueDate"])(dueDate)}"
            />
          </label>
        </fieldset>`
      : ``}
  `);
};

// Функция создания шаблона с выбором дня повторения
const createEditTaskRepeatingTemplate = (repeating) => {
  return (`
    <button class="card__repeat-toggle" type="button">
      repeat:<span class="card__repeat-status">${Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isTaskRepeating"])(repeating) ? `yes` : `no`}</span>
    </button>

    ${Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isTaskRepeating"])(repeating)
      ? `<fieldset class="card__repeat-days">
          <div class="card__repeat-days-inner">
          ${Object.entries(repeating).map(([day, repeat]) => `
            <input
              class="visually-hidden card__repeat-day-input"
              type="checkbox"
              id="repeat-${day}"
              name="repeat"
              value="${day}"
              ${repeat ? `checked` : ``}
            />
            <label class="card__repeat-day" for="repeat-${day}">${day}</label>
          `).join(``)}
          </div>
        </fieldset>`
      : ``}
  `);
};

// Функция создания шаблона с выбором цвета
const createEditTaskColorsTemplate = (currentColor) => {
  return _const__WEBPACK_IMPORTED_MODULE_1__["COLORS"].map((color) => `
    <input
      type="radio"
      id="color-${color}"
      class="card__color-input card__color-input--${color} visually-hidden"
      name="color"
      value="${color}"
      ${currentColor === color ? `checked` : ``}
    />
    <label
      for="color-${color}"
      class="card__color card__color--${color}"
      >${color}</label
    >
  `).join(``);
};

// Функция создания шаблона редактирования карточки задания
const createEditTaskTemplate = (task = {}) => {
  const {
    color = `black`,
    description = ``,
    dueDate = null,
    repeating = {
      mo: false,
      tu: false,
      we: false,
      th: false,
      fr: false,
      sa: false,
      su: false,
    }
  } = task;

  const deadlineClassName = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isTaskExpired"])(dueDate)
    ? `card--deadline`
    : ``;

  const repeatingClassName = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isTaskRepeating"])(repeating)
    ? `card--repeat`
    : ``;

  const dateTemplate = createEditTaskDateTemplate(dueDate);
  const repeatingTemplate = createEditTaskRepeatingTemplate(repeating);
  const colorsTemplate = createEditTaskColorsTemplate(color);

  return (
    `<article class="card card--edit card--${color} ${deadlineClassName} ${repeatingClassName}">
      <form class="card__form" method="get">
        <div class="card__inner">
          <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
              <use xlink:href="#wave"></use>
            </svg>
          </div>

          <div class="card__textarea-wrap">
            <label>
              <textarea
                class="card__text"
                placeholder="Start typing your text here..."
                name="text"
              >${description}</textarea>
            </label>
          </div>

          <div class="card__settings">
            <div class="card__details">
              <div class="card__dates">
                ${dateTemplate}
                ${repeatingTemplate}
              </div>
            </div>

            <div class="card__colors-inner">
              <h3 class="card__colors-title">Color</h3>
              <div class="card__colors-wrap">
                ${colorsTemplate}
              </div>
            </div>
          </div>

          <div class="card__status-btns">
            <button class="card__save" type="submit">save</button>
            <button class="card__delete" type="button">delete</button>
          </div>
        </div>
      </form>
    </article>`
  );
};


/***/ }),

/***/ "./src/view/task.js":
/*!**************************!*\
  !*** ./src/view/task.js ***!
  \**************************/
/*! exports provided: createTaskCardTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTaskCardTemplate", function() { return createTaskCardTemplate; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


// Функция создания шаблона карточки задания
const createTaskCardTemplate = (task) => {
  const {color, description, dueDate, repeating, isArchive, isFavorite} = task;

  const date = dueDate !== null
    ? Object(_utils__WEBPACK_IMPORTED_MODULE_0__["humanizeTaskDueDate"])(dueDate)
    : ``;

  const deadlineClassName = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isTaskExpired"])(dueDate)
    ? `card--deadline`
    : ``;

  const repeatClassName = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isTaskRepeating"])(repeating)
    ? `card--repeat`
    : ``;

  const archiveClassName = isArchive
    ? `card__btn--archive card__btn--disabled`
    : `card__btn--archive`;

  const favoriteClassName = isFavorite
    ? `card__btn--favorites card__btn--disabled`
    : `card__btn--favorites`;

  return (
    `<article class="card card--${color} ${deadlineClassName} ${repeatClassName}">
      <div class="card__form">
        <div class="card__inner">
          <div class="card__control">
            <button type="button" class="card__btn card__btn--edit">
              edit
            </button>
            <button type="button" class="card__btn ${archiveClassName}">
              archive
            </button>
            <button
              type="button"
              class="card__btn ${favoriteClassName}"
            >
              favorites
            </button>
          </div>

          <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
              <use xlink:href="#wave"></use>
            </svg>
          </div>

          <div class="card__textarea-wrap">
            <p class="card__text">${description}</p>
          </div>

          <div class="card__settings">
            <div class="card__details">
              <div class="card__dates">
                <div class="card__date-deadline">
                  <p class="card__input-deadline-wrap">
                    <span class="card__date">${date}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>`
  );
};


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map