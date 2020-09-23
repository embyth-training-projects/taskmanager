import {createSiteMenuTemplate} from './view/site-menu';
import {createFilterTemplate} from './view/filter';
import {createBoardTemplate} from './view/board';
import {createEditTaskTemplate} from './view/task-edit';
import {createTaskCardTemplate} from './view/task';
import {createLoadMoreButtonTemplate} from './view/load-more-button';

// Константа количества карточек заданий
const TASK_AMOUNT = 3;

// Функция отрисовки элемента в контейнер
const renderComponent = (container, element, place = `beforeend`) => {
  container.insertAdjacentHTML(place, element);
};

// Отрисовываем шаблоны на страницу
const siteMainNode = document.querySelector(`.main`);
const siteHeaderNode = siteMainNode.querySelector(`.main__control`);

renderComponent(siteHeaderNode, createSiteMenuTemplate());
renderComponent(siteMainNode, createFilterTemplate());
renderComponent(siteMainNode, createBoardTemplate());

const boardNode = siteMainNode.querySelector(`.board`);
const taskListNode = boardNode.querySelector(`.board__tasks`);

renderComponent(taskListNode, createEditTaskTemplate());

for (let i = 0; i < TASK_AMOUNT; i++) {
  renderComponent(taskListNode, createTaskCardTemplate());
}

renderComponent(boardNode, createLoadMoreButtonTemplate());
