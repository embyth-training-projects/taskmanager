import SiteMenuView from './view/site-menu';
import {createFilterTemplate} from './view/filter';
import BoardView from './view/board';
import SortView from './view/sort';
import TaskListView from './view/task-list';
import {createEditTaskTemplate} from './view/task-edit';
import {createTaskCardTemplate} from './view/task';
import LoadMoreButtonView from './view/load-more-button';
import {generateTask} from './mock/task';
import {generateFilter} from './mock/filter';
import {renderTemplate, renderElement, RenderPosition} from './utils';

// Константа количества карточек заданий
const TASK_AMOUNT = 22;
const TASK_AMOUNT_PER_STEP = 8;

const tasks = new Array(TASK_AMOUNT).fill().map(generateTask);
const filters = generateFilter(tasks);

// Отрисовываем шаблоны на страницу
const siteMainNode = document.querySelector(`.main`);
const siteHeaderNode = siteMainNode.querySelector(`.main__control`);

renderElement(siteHeaderNode, new SiteMenuView().getElement(), RenderPosition.BEFOREEND);
renderTemplate(siteMainNode, createFilterTemplate(filters));

const boardComponent = new BoardView();
renderElement(siteMainNode, boardComponent.getElement(), RenderPosition.BEFOREEND);
renderElement(boardComponent.getElement(), new SortView().getElement(), RenderPosition.AFTERBEGIN);

const taskListComponent = new TaskListView();
renderElement(boardComponent.getElement(), taskListComponent.getElement(), RenderPosition.BEFOREEND);
renderTemplate(taskListComponent.getElement(), createEditTaskTemplate(tasks[0]), RenderPosition.BEFOREEND);

tasks
  .slice(1, Math.min(tasks.length, TASK_AMOUNT_PER_STEP))
  .forEach((task) => renderTemplate(taskListComponent.getElement(), createTaskCardTemplate(task)));

if (tasks.length > TASK_AMOUNT_PER_STEP) {
  let renderedTasksCount = TASK_AMOUNT_PER_STEP;

  const loadMoreButtonComponent = new LoadMoreButtonView();
  renderElement(boardComponent.getElement(), loadMoreButtonComponent.getElement(), RenderPosition.BEFOREEND);

  loadMoreButtonComponent.getElement().addEventListener(`click`, (evt) => {
    evt.preventDefault();

    tasks
      .slice(renderedTasksCount, renderedTasksCount + TASK_AMOUNT_PER_STEP)
      .forEach((task) => renderTemplate(taskListComponent.getElement(), createTaskCardTemplate(task)));

    renderedTasksCount += TASK_AMOUNT_PER_STEP;

    if (renderedTasksCount >= tasks.length) {
      loadMoreButtonComponent.getElement().remove();
      loadMoreButtonComponent.removeElement();
    }
  });
}
