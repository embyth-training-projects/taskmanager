import {createSiteMenuTemplate} from './view/site-menu';
import {createFilterTemplate} from './view/filter';
import {createBoardTemplate} from './view/board';
import {createEditTaskTemplate} from './view/task-edit';
import {createTaskCardTemplate} from './view/task';
import {createLoadMoreButtonTemplate} from './view/load-more-button';
import {generateTask} from './mock/task';

// Константа количества карточек заданий
const TASK_AMOUNT = 4;

const tasks = new Array(TASK_AMOUNT).fill().map(generateTask);

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

renderComponent(taskListNode, createEditTaskTemplate(tasks[0]));

for (let i = 1; i < TASK_AMOUNT; i++) {
  renderComponent(taskListNode, createTaskCardTemplate(tasks[i]));
}

renderComponent(boardNode, createLoadMoreButtonTemplate());
