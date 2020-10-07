import BoardView from './view/board';
import SortView from './view/sort';
import TaskListView from './view/task-list';
import NoTaskView from './view/no-task';
import TaskEditView from './view/task-edit';
import TaskView from './view/task';
import LoadMoreButtonView from './view/load-more-button';
import {render, RenderPosition} from './utils/render';

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
  }

  _renderSort() {

  }

  _renderTask() {

  }

  _renderTasks() {

  }

  _renderNoTasks() {

  }

  _renderLoadMoreButton() {

  }

  _renderBoard() {

  }
}
