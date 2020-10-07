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
/*! exports provided: COLORS, SortType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORS", function() { return COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortType", function() { return SortType; });
// Цвета заложеные в проект
const COLORS = [`black`, `yellow`, `blue`, `green`, `pink`];

const SortType = {
  DEFAULT: `default`,
  DATE_DOWN: `date-down`,
  DATE_UP: `date-up`,
};


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
/* harmony import */ var _presenter_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./presenter/board */ "./src/presenter/board.js");
/* harmony import */ var _mock_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock/task */ "./src/mock/task.js");
/* harmony import */ var _mock_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mock/filter */ "./src/mock/filter.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/render */ "./src/utils/render.js");







// Константа количества карточек заданий
const TASK_AMOUNT = 22;

const tasks = new Array(TASK_AMOUNT).fill().map(_mock_task__WEBPACK_IMPORTED_MODULE_3__["generateTask"]);
const filters = Object(_mock_filter__WEBPACK_IMPORTED_MODULE_4__["generateFilter"])(tasks);

const siteMainNode = document.querySelector(`.main`);
const siteHeaderNode = siteMainNode.querySelector(`.main__control`);

const boardPresenter = new _presenter_board__WEBPACK_IMPORTED_MODULE_2__["default"](siteMainNode);

Object(_utils_render__WEBPACK_IMPORTED_MODULE_5__["render"])(siteHeaderNode, new _view_site_menu__WEBPACK_IMPORTED_MODULE_0__["default"](), _utils_render__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].BEFOREEND);
Object(_utils_render__WEBPACK_IMPORTED_MODULE_5__["render"])(siteMainNode, new _view_filter__WEBPACK_IMPORTED_MODULE_1__["default"](filters), _utils_render__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].BEFOREEND);
boardPresenter.init(tasks);


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
/* harmony import */ var _utils_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/task */ "./src/utils/task.js");


// Мапа где ключи - названия фильтров, а значения - функции-счетчики
const taskToFilterMap = {
  all: (tasks) => tasks.filter((task) => !task.isArchive).length,
  overdue: (tasks) => tasks
    .filter((task) => !task.isArchive)
    .filter((task) => Object(_utils_task__WEBPACK_IMPORTED_MODULE_0__["isTaskExpired"])(task.dueDate)).length,
  today: (tasks) => tasks
    .filter((task) => !task.isArchive)
    .filter((task) => Object(_utils_task__WEBPACK_IMPORTED_MODULE_0__["isTaskExpiringToday"])(task.dueDate)).length,
  favorites: (tasks) => tasks
    .filter((task) => !task.isArchive)
    .filter((task) => task.isFavorite).length,
  repeating: (tasks) => tasks
    .filter((task) => !task.isArchive)
    .filter((task) => Object(_utils_task__WEBPACK_IMPORTED_MODULE_0__["isTaskRepeating"])(task.repeating)).length,
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
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common */ "./src/utils/common.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const */ "./src/const.js");



// Функция генерации описания задачи случайным образом
const generateDescription = () => {
  const descriptions = [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`,
  ];

  const randomIndex = Object(_utils_common__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, descriptions.length - 1);

  return descriptions[randomIndex];
};

// Функция для генерации даты. По заданию это либо null, либо дата плюс-минус неделя от текущей
const generateDate = () => {
  const isDate = Boolean(Object(_utils_common__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1));

  if (!isDate) {
    return null;
  }

  const maxDaysGap = 7;
  const daysGap = Object(_utils_common__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(-maxDaysGap, maxDaysGap);
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
    we: Boolean(Object(_utils_common__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1)),
    th: false,
    fr: Boolean(Object(_utils_common__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1)),
    sa: false,
    su: false
  };
};

// Функция-генератор случайного цвета
const getRandomColor = () => {
  const randomIndex = Object(_utils_common__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, _const__WEBPACK_IMPORTED_MODULE_1__["COLORS"].length - 1);

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
    isArchive: Boolean(Object(_utils_common__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1)),
    isFavorite: Boolean(Object(_utils_common__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1)),
  };
};


/***/ }),

/***/ "./src/presenter/board.js":
/*!********************************!*\
  !*** ./src/presenter/board.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Board; });
/* harmony import */ var _view_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/board */ "./src/view/board.js");
/* harmony import */ var _view_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/sort */ "./src/view/sort.js");
/* harmony import */ var _view_task_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/task-list */ "./src/view/task-list.js");
/* harmony import */ var _view_no_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/no-task */ "./src/view/no-task.js");
/* harmony import */ var _view_task_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/task-edit */ "./src/view/task-edit.js");
/* harmony import */ var _view_task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/task */ "./src/view/task.js");
/* harmony import */ var _view_load_more_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view/load-more-button */ "./src/view/load-more-button.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../const */ "./src/const.js");
/* harmony import */ var _utils_task__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/task */ "./src/utils/task.js");











const TASK_AMOUNT_PER_STEP = 8;

class Board {
  constructor(boardContainer) {
    this._boardContainer = boardContainer;
    this._renderedTasksCount = TASK_AMOUNT_PER_STEP;

    this._boardComponent = new _view_board__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this._taskListComponent = new _view_task_list__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this._sortComponent = new _view_sort__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this._noTaskComponent = new _view_no_task__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this._loadMoreButtonComponent = new _view_load_more_button__WEBPACK_IMPORTED_MODULE_6__["default"]();

    this._handleLoadMoreButtonClick = this._handleLoadMoreButtonClick.bind(this);
    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);
  }

  init(boardTasks) {
    this._boardTasks = boardTasks.slice();
    this._sourcedBoardTasks = boardTasks.slice();

    Object(_utils_render__WEBPACK_IMPORTED_MODULE_7__["render"])(this._boardContainer, this._boardComponent, _utils_render__WEBPACK_IMPORTED_MODULE_7__["RenderPosition"].BEFOREEND);
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_7__["render"])(this._boardComponent, this._taskListComponent, _utils_render__WEBPACK_IMPORTED_MODULE_7__["RenderPosition"].BEFOREEND);

    this._renderBoard();
  }

  _sortTasks(sortType) {
    switch (sortType) {
      case _const__WEBPACK_IMPORTED_MODULE_8__["SortType"].DATE_UP:
        this._boardTasks.sort(_utils_task__WEBPACK_IMPORTED_MODULE_9__["sortTasksUp"]);
        break;
      case _const__WEBPACK_IMPORTED_MODULE_8__["SortType"].DATE_DOWN:
        this._boardTasks.sort(_utils_task__WEBPACK_IMPORTED_MODULE_9__["sortTasksDown"]);
        break;
      default:
        this._boardTasks = this._sourcedBoardTasks.slice();
    }

    this._currentSortType = sortType;
  }

  _handleSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }

    this._sortTasks(sortType);
    this._clearTaskList();
    this._renderTaskList();
  }

  _renderSort() {
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_7__["render"])(this._boardComponent, this._sortComponent, _utils_render__WEBPACK_IMPORTED_MODULE_7__["RenderPosition"].AFTERBEGIN);
    this._sortComponent.setSortTypeChangeHandler(this._handleSortTypeChange);
  }

  _renderTask(task) {
    const taskComponent = new _view_task__WEBPACK_IMPORTED_MODULE_5__["default"](task);
    const taskEditComponent = new _view_task_edit__WEBPACK_IMPORTED_MODULE_4__["default"](task);

    const replaceCardToForm = () => {
      Object(_utils_render__WEBPACK_IMPORTED_MODULE_7__["replace"])(taskEditComponent, taskComponent);
    };

    const replaceFormToCard = () => {
      Object(_utils_render__WEBPACK_IMPORTED_MODULE_7__["replace"])(taskComponent, taskEditComponent);
    };

    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        evt.preventDefault();
        replaceFormToCard();
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };

    taskComponent.setEditClickHandler(() => {
      replaceCardToForm();
      document.addEventListener(`keydown`, onEscKeyDown);
    });

    taskEditComponent.setFormSubmitHandler(() => {
      replaceFormToCard();
      document.removeEventListener(`keydown`, onEscKeyDown);
    });

    Object(_utils_render__WEBPACK_IMPORTED_MODULE_7__["render"])(this._taskListComponent, taskComponent, _utils_render__WEBPACK_IMPORTED_MODULE_7__["RenderPosition"].BEFOREEND);
  }

  _renderTasks(from, to) {
    this._boardTasks
      .slice(from, to)
      .forEach((boardTask) => this._renderTask(boardTask));
  }

  _renderNoTasks() {
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_7__["render"])(this._boardComponent, this._noTaskComponent, _utils_render__WEBPACK_IMPORTED_MODULE_7__["RenderPosition"].AFTERBEGIN);
  }

  _handleLoadMoreButtonClick() {
    this._renderTasks(this._renderedTasksCount, this._renderedTasksCount + TASK_AMOUNT_PER_STEP);
    this._renderedTasksCount += TASK_AMOUNT_PER_STEP;

    if (this._renderedTasksCount >= this._boardTasks.length) {
      Object(_utils_render__WEBPACK_IMPORTED_MODULE_7__["remove"])(this._loadMoreButtonComponent);
    }
  }

  _renderLoadMoreButton() {
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_7__["render"])(this._boardComponent, this._loadMoreButtonComponent, _utils_render__WEBPACK_IMPORTED_MODULE_7__["RenderPosition"].BEFOREEND);

    this._loadMoreButtonComponent.setClickHandler(this._handleLoadMoreButtonClick);
  }

  _clearTaskList() {
    this._taskListComponent.getElement().innerHTML = ``;
    this._renderedTasksCount = TASK_AMOUNT_PER_STEP;
  }

  _renderTaskList() {
    this._renderTasks(0, Math.min(this._boardTasks.length, TASK_AMOUNT_PER_STEP));

    if (this._boardTasks.length > TASK_AMOUNT_PER_STEP) {
      this._renderLoadMoreButton();
    }
  }

  _renderBoard() {
    if (this._boardTasks.every((task) => task.isArchive)) {
      this._renderNoTasks();
      return;
    }

    this._renderSort();
    this._renderTaskList();
  }
}


/***/ }),

/***/ "./src/utils/common.js":
/*!*****************************!*\
  !*** ./src/utils/common.js ***!
  \*****************************/
/*! exports provided: getRandomInteger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
// Функция из интернета по генерации случайного числа из диапазона
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};


/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/*! exports provided: RenderPosition, render, renderTemplate, createElement, replace, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTemplate", function() { return renderTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var _view_abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/abstract */ "./src/view/abstract.js");


const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
};

// Render-функцию для отрисовки элемента
const render = (container, child, place) => {
  if (container instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    container = container.getElement();
  }

  if (child instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    child = child.getElement();
  }

  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(child);
      break;
    case RenderPosition.BEFOREEND:
      container.append(child);
      break;
  }
};

// Функция отрисовки элемента в контейнер
const renderTemplate = (container, template, place = `beforeend`) => {
  if (container instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    container = container.getElement();
  }

  container.insertAdjacentHTML(place, template);
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const replace = (newChild, oldChild) => {
  if (oldChild instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    oldChild = oldChild.getElement();
  }

  if (newChild instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    newChild = newChild.getElement();
  }

  const parent = oldChild.parentElement;

  if (parent === null || oldChild === null || newChild === null) {
    throw new Error(`Can't replace unexisting elements`);
  }

  parent.replaceChild(newChild, oldChild);
};

const remove = (component) => {
  if (!(component instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    throw new Error(`Can remove only components`);
  }

  component.getElement().remove();
  component.removeElement();
};


/***/ }),

/***/ "./src/utils/task.js":
/*!***************************!*\
  !*** ./src/utils/task.js ***!
  \***************************/
/*! exports provided: isTaskExpired, isTaskExpiringToday, isTaskRepeating, humanizeTaskDueDate, sortTasksUp, sortTasksDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTaskExpired", function() { return isTaskExpired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTaskExpiringToday", function() { return isTaskExpiringToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTaskRepeating", function() { return isTaskRepeating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "humanizeTaskDueDate", function() { return humanizeTaskDueDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortTasksUp", function() { return sortTasksUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortTasksDown", function() { return sortTasksDown; });
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

// Функция помещает задачи без даты в конце списка,
// возвращая нужный вес для колбэка sort
const getWeightForNullDate = (dateA, dateB) => {
  if (dateA === null && dateB === null) {
    return 0;
  }

  if (dateA === null) {
    return 1;
  }

  if (dateB === null) {
    return -1;
  }

  return null;
};

const sortTasksUp = (taskA, taskB) => {
  const weight = getWeightForNullDate(taskA.dueDate, taskB.dueDate);

  if (weight !== null) {
    return weight;
  }

  return taskA.dueDate.getTime() - taskB.dueDate.getTime();
};

const sortTasksDown = (taskA, taskB) => {
  const weight = getWeightForNullDate(taskA.dueDate, taskB.dueDate);

  if (weight !== null) {
    return weight;
  }

  return taskB.dueDate.getTime() - taskA.dueDate.getTime();
};


/***/ }),

/***/ "./src/view/abstract.js":
/*!******************************!*\
  !*** ./src/view/abstract.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Abstract; });
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");


class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new Error(`Can't instantiate Abstract, only concrete one.`);
    }

    this._element = null;
    this._callback = {};
  }

  getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate`);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_render__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/board.js":
/*!***************************!*\
  !*** ./src/view/board.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Board; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


const createBoardTemplate = () => {
  return (
    `<section class="board container"></section>`
  );
};

class Board extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createBoardTemplate();
  }
}


/***/ }),

/***/ "./src/view/filter.js":
/*!****************************!*\
  !*** ./src/view/filter.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filter; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


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

class Filter extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(filters) {
    super();

    this._filters = filters;
  }

  getTemplate() {
    return createFilterTemplate(this._filters);
  }
}


/***/ }),

/***/ "./src/view/load-more-button.js":
/*!**************************************!*\
  !*** ./src/view/load-more-button.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadMoreButton; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


const createLoadMoreButtonTemplate = () => {
  return (
    `<button class="load-more" type="button">load more</button>`
  );
};

class LoadMoreButton extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();

    this._clickHandler = this._clickHandler.bind(this);
  }

  getTemplate() {
    return createLoadMoreButtonTemplate();
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.click();
  }

  setClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().addEventListener(`click`, this._clickHandler);
  }
}


/***/ }),

/***/ "./src/view/no-task.js":
/*!*****************************!*\
  !*** ./src/view/no-task.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoTask; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


const createNoTaskTemplate = () => {
  return (
    `<p class="board__no-tasks">
      Click «ADD NEW TASK» in menu to create your first task
    </p>`
  );
};

class NoTask extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createNoTaskTemplate();
  }
}


/***/ }),

/***/ "./src/view/site-menu.js":
/*!*******************************!*\
  !*** ./src/view/site-menu.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteMenu; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


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

class SiteMenu extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createSiteMenuTemplate();
  }
}


/***/ }),

/***/ "./src/view/sort.js":
/*!**************************!*\
  !*** ./src/view/sort.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sort; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const */ "./src/const.js");



const createSortTemplate = () => {
  return (
    `<div class="board__filter-list">
      <a href="#" class="board__filter" data-sort-type="${_const__WEBPACK_IMPORTED_MODULE_1__["SortType"].DEFAULT}">SORT BY DEFAULT</a>
      <a href="#" class="board__filter" data-sort-type="${_const__WEBPACK_IMPORTED_MODULE_1__["SortType"].DATE_UP}">SORT BY DATE up</a>
      <a href="#" class="board__filter" data-sort-type="${_const__WEBPACK_IMPORTED_MODULE_1__["SortType"].DATE_DOWN}">SORT BY DATE down</a>
    </div>`
  );
};

class Sort extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();

    this._sortTypeChangeHandler = this._sortTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createSortTemplate();
  }

  _sortTypeChangeHandler(evt) {
    if (evt.target.tagName !== `A`) {
      return;
    }

    evt.preventDefault();
    this._callback.sortTypeChange(evt.target.dataset.sortType);
  }

  setSortTypeChangeHandler(callback) {
    this._callback.sortTypeChange = callback;
    this.getElement().addEventListener(`click`, this._sortTypeChangeHandler);
  }
}


/***/ }),

/***/ "./src/view/task-edit.js":
/*!*******************************!*\
  !*** ./src/view/task-edit.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TaskEdit; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");
/* harmony import */ var _utils_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/task */ "./src/utils/task.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const */ "./src/const.js");




const BLANK_TASK = {
  color: _const__WEBPACK_IMPORTED_MODULE_2__["COLORS"][0],
  description: ``,
  dueDate: null,
  repeating: {
    mo: false,
    tu: false,
    we: false,
    th: false,
    fr: false,
    sa: false,
    su: false,
  },
  isArchive: false,
  isFavorite: false,
};

// Функция создания шаблона с выбором даты
const createEditTaskDateTemplate = (dueDate) => {
  return (
    `<button class="card__date-deadline-toggle" type="button">
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
              value="${Object(_utils_task__WEBPACK_IMPORTED_MODULE_1__["humanizeTaskDueDate"])(dueDate)}"
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
      repeat:<span class="card__repeat-status">${Object(_utils_task__WEBPACK_IMPORTED_MODULE_1__["isTaskRepeating"])(repeating) ? `yes` : `no`}</span>
    </button>

    ${Object(_utils_task__WEBPACK_IMPORTED_MODULE_1__["isTaskRepeating"])(repeating)
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
      : ``}`
  );
};

// Функция создания шаблона с выбором цвета
const createEditTaskColorsTemplate = (currentColor) => {
  return _const__WEBPACK_IMPORTED_MODULE_2__["COLORS"].map((color) => `
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
const createEditTaskTemplate = (task) => {
  const {color, description, dueDate, repeating} = task;

  const deadlineClassName = Object(_utils_task__WEBPACK_IMPORTED_MODULE_1__["isTaskExpired"])(dueDate)
    ? `card--deadline`
    : ``;

  const repeatingClassName = Object(_utils_task__WEBPACK_IMPORTED_MODULE_1__["isTaskRepeating"])(repeating)
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

class TaskEdit extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(task) {
    super();

    this._task = task || BLANK_TASK;
    this._formSubmitHandler = this._formSubmitHandler.bind(this);
  }

  getTemplate() {
    return createEditTaskTemplate(this._task);
  }

  _formSubmitHandler(evt) {
    evt.preventDefault();
    this._callback.formSubmit();
  }

  setFormSubmitHandler(callback) {
    this._callback.formSubmit = callback;
    this.getElement().querySelector(`form`).addEventListener(`submit`, this._formSubmitHandler);
  }
}


/***/ }),

/***/ "./src/view/task-list.js":
/*!*******************************!*\
  !*** ./src/view/task-list.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TaskList; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


const createTaskListTemplate = () => {
  return `<div class="board__tasks"></div>`;
};

class TaskList extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createTaskListTemplate();
  }
}


/***/ }),

/***/ "./src/view/task.js":
/*!**************************!*\
  !*** ./src/view/task.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Task; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");
/* harmony import */ var _utils_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/task */ "./src/utils/task.js");



// Функция создания шаблона карточки задания
const createTaskCardTemplate = (task) => {
  const {color, description, dueDate, repeating, isArchive, isFavorite} = task;

  const date = dueDate !== null
    ? Object(_utils_task__WEBPACK_IMPORTED_MODULE_1__["humanizeTaskDueDate"])(dueDate)
    : ``;

  const deadlineClassName = Object(_utils_task__WEBPACK_IMPORTED_MODULE_1__["isTaskExpired"])(dueDate)
    ? `card--deadline`
    : ``;

  const repeatClassName = Object(_utils_task__WEBPACK_IMPORTED_MODULE_1__["isTaskRepeating"])(repeating)
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

class Task extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(task) {
    super();

    this._task = task;
    this._editClickHandler = this._editClickHandler.bind(this);
  }

  getTemplate() {
    return createTaskCardTemplate(this._task);
  }

  _editClickHandler(evt) {
    evt.preventDefault();
    this._callback.editClick();
  }

  setEditClickHandler(callback) {
    this._callback.editClick = callback;
    this.getElement().querySelector(`.card__btn--edit`).addEventListener(`click`, this._editClickHandler);
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map