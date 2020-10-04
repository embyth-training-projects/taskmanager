import SiteMenuView from './view/site-menu';
import FilterView from './view/filter';
import BoardView from './view/board';
import SortView from './view/sort';
import TaskListView from './view/task-list';
import TaskEditView from './view/task-edit';
import TaskView from './view/task';
import NoTaskView from './view/no-task';
import LoadMoreButtonView from './view/load-more-button';
import {generateTask} from './mock/task';
import {generateFilter} from './mock/filter';
import {render, RenderPosition} from './utils';

// Константа количества карточек заданий
const TASK_AMOUNT = 22;
const TASK_AMOUNT_PER_STEP = 8;

const tasks = new Array(TASK_AMOUNT).fill().map(generateTask);
const filters = generateFilter(tasks);

const siteMainNode = document.querySelector(`.main`);
const siteHeaderNode = siteMainNode.querySelector(`.main__control`);

const renderTask = (taskListElement, task) => {
  const taskComponent = new TaskView(task);
  const taskEditComponent = new TaskEditView(task);

  const replaceCardToForm = () => {
    taskListElement.replaceChild(taskEditComponent.getElement(), taskComponent.getElement());
  };

  const replaceFormToCard = () => {
    taskListElement.replaceChild(taskComponent.getElement(), taskEditComponent.getElement());
  };

  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      replaceFormToCard();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  taskComponent.getElement().querySelector(`.card__btn--edit`).addEventListener(`click`, () => {
    replaceCardToForm();
    document.addEventListener(`keydown`, onEscKeyDown);
  });

  taskEditComponent.getElement().querySelector(`form`).addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    replaceFormToCard();
    document.removeEventListener(`keydown`, onEscKeyDown);
  });

  render(taskListElement, taskComponent.getElement(), RenderPosition.BEFOREEND);
};

const renderBoard = (boardContainer, boardTasks) => {
  const boardComponent = new BoardView();
  const taskListComponent = new TaskListView();

  render(boardContainer, boardComponent.getElement(), RenderPosition.BEFOREEND);

  if (boardTasks.every((task) => task.isArchive)) {
    render(boardComponent.getElement(), new NoTaskView().getElement(), RenderPosition.BEFOREEND);
    return;
  }

  render(boardComponent.getElement(), new SortView().getElement(), RenderPosition.AFTERBEGIN);
  render(boardComponent.getElement(), taskListComponent.getElement(), RenderPosition.BEFOREEND);

  boardTasks
    .slice(0, Math.min(boardTasks.length, TASK_AMOUNT_PER_STEP))
    .forEach((task) => renderTask(taskListComponent.getElement(), task));

  if (boardTasks.length > TASK_AMOUNT_PER_STEP) {
    let renderedTasksCount = TASK_AMOUNT_PER_STEP;

    const loadMoreButtonComponent = new LoadMoreButtonView();
    render(boardComponent.getElement(), loadMoreButtonComponent.getElement(), RenderPosition.BEFOREEND);

    loadMoreButtonComponent.getElement().addEventListener(`click`, (evt) => {
      evt.preventDefault();

      boardTasks
        .slice(renderedTasksCount, renderedTasksCount + TASK_AMOUNT_PER_STEP)
        .forEach((task) => renderTask(taskListComponent.getElement(), task));

      renderedTasksCount += TASK_AMOUNT_PER_STEP;

      if (renderedTasksCount >= boardTasks.length) {
        loadMoreButtonComponent.getElement().remove();
        loadMoreButtonComponent.removeElement();
      }
    });
  }
};

render(siteHeaderNode, new SiteMenuView().getElement(), RenderPosition.BEFOREEND);
render(siteMainNode, new FilterView(filters).getElement(), RenderPosition.BEFOREEND);
renderBoard(siteMainNode, tasks);
