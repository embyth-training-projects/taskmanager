import BoardView from './view/board';
import SortView from './view/sort';
import TaskListView from './view/task-list';
import NoTaskView from './view/no-task';
import TaskEditView from './view/task-edit';
import TaskView from './view/task';
import LoadMoreButtonView from './view/load-more-button';
import {render, RenderPosition} from './utils/render';

const TASK_AMOUNT_PER_STEP = 8;

export default class Board {
  constructor(boardContainer) {
    this._boardContainer = boardContainer;

    this._boardComponent = new BoardView();
    this._taskListComponent = new TaskListView();
    this._sortComponent = new TaskListView();
    this._noTaskComponent = new NoTaskView();
  }

  init(boardTasks) {
    this._boardTasks = boardTasks.slice();

    render(this._boardContainer, this._boardComponent, RenderPosition.BEFOREEND);
    render(this._boardComponent, this._taskListComponent, RenderPosition.BEFOREEND);

    this._renderBoard();
  }

  _renderSort() {

  }

  _renderTask() {

  }

  _renderTasks(from, to) {

  }

  _renderNoTasks() {

  }

  _renderLoadMoreButton() {

  }

  _renderBoard() {
    if (this._boardTasks.every((task) => task.isArchive)) {
      this._renderNoTasks();
      return;
    }

    this._renderSort();

    this._renderTasks(0, Math.min(this._boardTasks.length, TASK_AMOUNT_PER_STEP));

    if (this._boardTasks.length > TASK_AMOUNT_PER_STEP) {
      this._renderLoadMoreButton();
    }
  }
}
