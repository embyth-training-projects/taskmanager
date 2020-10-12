import AbstractView from './abstract';
import {isTaskExpired, isTaskRepeating, humanizeTaskDueDate} from '../utils/task';
import {COLORS} from '../const';

const BLANK_TASK = {
  color: COLORS[0],
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
const createEditTaskDateTemplate = (dueDate, isDueDate) => {
  return (
    `<button class="card__date-deadline-toggle" type="button">
      date: <span class="card__date-status">${isDueDate ? `yes` : `no`}</span>
    </button>

    ${isDueDate
      ? `<fieldset class="card__date-deadline">
          <label class="card__input-deadline-wrap">
            <input
              class="card__date"
              type="text"
              placeholder=""
              name="date"
              value="${humanizeTaskDueDate(dueDate)}"
            />
          </label>
        </fieldset>`
      : ``}
  `);
};

// Функция создания шаблона с выбором дня повторения
const createEditTaskRepeatingTemplate = (repeating, isRepeating) => {
  return (`
    <button class="card__repeat-toggle" type="button">
      repeat:<span class="card__repeat-status">${isRepeating ? `yes` : `no`}</span>
    </button>

    ${isRepeating
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
  return COLORS.map((color) => `
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
const createEditTaskTemplate = (data) => {
  const {color, description, dueDate, repeating, isDueDate, isRepeating} = data;

  const deadlineClassName = isTaskExpired(dueDate)
    ? `card--deadline`
    : ``;

  const repeatingClassName = isRepeating
    ? `card--repeat`
    : ``;

  const dateTemplate = createEditTaskDateTemplate(dueDate, isDueDate);
  const repeatingTemplate = createEditTaskRepeatingTemplate(repeating, isRepeating);
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

export default class TaskEdit extends AbstractView {
  constructor(task = BLANK_TASK) {
    super();

    this._data = TaskEdit.parseTaskToData(task);
    this._formSubmitHandler = this._formSubmitHandler.bind(this);
    this._dueDateTogglerHandler = this._dueDateTogglerHandler.bind(this);
    this._repeatingTogglerHandler = this._repeatingTogglerHandler.bind(this);

    this.getElement()
      .querySelector(`.card__date-deadline-toggle`)
      .addEventListener(`click`, this._dueDateTogglerHandler);
    this.getElement()
      .querySelector(`.card__repeat-toggle`)
      .addEventListener(`click`, this._repeatingTogglerHandler);
  }

  getTemplate() {
    return createEditTaskTemplate(this._data);
  }

  updateData(update) {
    if (!update) {
      return;
    }

    this._data = Object.assign(
        {},
        this._data,
        update
    );

    this.updateElement();
  }

  updateElement() {
    let prevElement = this.getElement();
    const parent = prevElement.parentElement;
    this.removeElement();

    const newElement = this.getElement();

    parent.replaceChild(newElement, prevElement);
    prevElement = null;
  }

  _dueDateTogglerHandler(evt) {
    evt.preventDefault();
    this.updateData({
      isDueDate: !this._data.isDueDate
    });
  }

  _repeatingTogglerHandler(evt) {
    evt.preventDefault();
    this.updateData({
      isRepeating: !this._data.isRepeating
    });
  }

  _formSubmitHandler(evt) {
    evt.preventDefault();
    this._callback.formSubmit(TaskEdit.parseDataToTask(this._data));
  }

  setFormSubmitHandler(callback) {
    this._callback.formSubmit = callback;
    this.getElement().querySelector(`form`).addEventListener(`submit`, this._formSubmitHandler);
  }

  static parseTaskToData(task) {
    return Object.assign(
        {},
        task,
        {
          isDueDate: task.dueDate !== null,
          isRepeating: isTaskRepeating(task.repeating),
        }
    );
  }

  static parseDataToTask(data) {
    data = Object.assign({}, data);

    if (!data.isDueDate) {
      data.dueDate = null;
    }

    if (!data.isRepeating) {
      data.repeating = {
        mo: false,
        tu: false,
        we: false,
        th: false,
        fr: false,
        sa: false,
        su: false
      };
    }

    delete data.isDueDate;
    delete data.isRepeating;

    return data;
  }
}
