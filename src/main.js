import {createSiteMenuTemplate} from './view/site-menu';
import {createFilterTemplate} from './view/filter';
import {createBoardTemplate} from './view/board';
import {createEditTaskTemplate} from './view/task-edit';
import {createTaskCardTemplate} from './view/task';
import {createLoadMoreButtonTemplate} from './view/load-more-button';
import {generateTask} from './mock/task';
import {generateFilter} from './mock/filter';

// Константа количества карточек заданий
const TASK_AMOUNT = 22;
const TASK_AMOUNT_PER_STEP = 8;

const tasks = new Array(TASK_AMOUNT).fill().map(generateTask);
const filters = generateFilter(tasks);

// Функция отрисовки элемента в контейнер
const renderComponent = (container, element, place = `beforeend`) => {
  container.insertAdjacentHTML(place, element);
};

// Отрисовываем шаблоны на страницу
const siteMainNode = document.querySelector(`.main`);
const siteHeaderNode = siteMainNode.querySelector(`.main__control`);

renderComponent(siteHeaderNode, createSiteMenuTemplate());
renderComponent(siteMainNode, createFilterTemplate(filters));
renderComponent(siteMainNode, createBoardTemplate());

const boardNode = siteMainNode.querySelector(`.board`);
const taskListNode = boardNode.querySelector(`.board__tasks`);

renderComponent(taskListNode, createEditTaskTemplate(tasks[0]));

tasks
  .slice(1, Math.min(tasks.length, TASK_AMOUNT_PER_STEP))
  .forEach((task) => renderComponent(taskListNode, createTaskCardTemplate(task)));

if (tasks.length > TASK_AMOUNT_PER_STEP) {
  let renderedTasksCount = TASK_AMOUNT_PER_STEP;

  renderComponent(boardNode, createLoadMoreButtonTemplate());

  const loadMoreButton = boardNode.querySelector(`.load-more`);

  loadMoreButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();

    tasks
      .slice(renderedTasksCount, renderedTasksCount + TASK_AMOUNT_PER_STEP)
      .forEach((task) => renderComponent(taskListNode, createTaskCardTemplate(task)));

    renderedTasksCount += TASK_AMOUNT_PER_STEP;

    if (renderedTasksCount >= tasks.length) {
      loadMoreButton.remove();
    }
  });
}
