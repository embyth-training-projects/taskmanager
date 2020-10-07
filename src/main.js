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
import {render, replace, remove, RenderPosition} from './utils/render';

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
    replace(taskEditComponent, taskComponent);
  };

  const replaceFormToCard = () => {
    replace(taskComponent, taskEditComponent);
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

  render(taskListElement, taskComponent, RenderPosition.BEFOREEND);
};

const renderBoard = (boardContainer, boardTasks) => {
  const boardComponent = new BoardView();
  const taskListComponent = new TaskListView();

  render(boardContainer, boardComponent, RenderPosition.BEFOREEND);

  if (boardTasks.every((task) => task.isArchive)) {
    render(boardComponent, new NoTaskView(), RenderPosition.BEFOREEND);
    return;
  }

  render(boardComponent, new SortView(), RenderPosition.AFTERBEGIN);
  render(boardComponent, taskListComponent, RenderPosition.BEFOREEND);

  boardTasks
    .slice(0, Math.min(boardTasks.length, TASK_AMOUNT_PER_STEP))
    .forEach((task) => renderTask(taskListComponent.getElement(), task));

  if (boardTasks.length > TASK_AMOUNT_PER_STEP) {
    let renderedTasksCount = TASK_AMOUNT_PER_STEP;

    const loadMoreButtonComponent = new LoadMoreButtonView();
    render(boardComponent, loadMoreButtonComponent, RenderPosition.BEFOREEND);

    loadMoreButtonComponent.setClickHandler(() => {
      boardTasks
        .slice(renderedTasksCount, renderedTasksCount + TASK_AMOUNT_PER_STEP)
        .forEach((task) => renderTask(taskListComponent.getElement(), task));

      renderedTasksCount += TASK_AMOUNT_PER_STEP;

      if (renderedTasksCount >= boardTasks.length) {
        remove(loadMoreButtonComponent);
      }
    });
  }
};

render(siteHeaderNode, new SiteMenuView(), RenderPosition.BEFOREEND);
render(siteMainNode, new FilterView(filters), RenderPosition.BEFOREEND);
renderBoard(siteMainNode, tasks);
