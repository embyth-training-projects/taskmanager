import {createElement} from '../utils/render';

const SHAKE_ANIMATION_TIMEOUT = 600;

export default class Abstract {
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
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }

  shake(callback) {
    this.getElement().querySelector(`.card__inner`).classList.add(`shake`);
    setTimeout(() => {
      this.getElement().querySelector(`.card__inner`).classList.remove(`shake`);
      callback();
    }, SHAKE_ANIMATION_TIMEOUT);
  }
}
