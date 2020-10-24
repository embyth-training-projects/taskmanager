import SiteMenuView from './view/site-menu';
import StatisticsView from './view/statistics';
import FilterPresenter from './presenter/filter';
import BoardPresenter from './presenter/board';
import TasksModel from './model/tasks';
import FilterModel from './model/filter';
import {generateTask} from './mock/task';
import {render, remove, RenderPosition} from './utils/render';
import {MenuItem, UpdateType, FilterType} from './const';
import Api from './api';

// Константа количества карточек заданий
const TASK_AMOUNT = 22;
const AUTHORIZATION = `Basic mbpooaj415n1ijbn23_`;
const END_POINT = `https://12.ecmascript.pages.academy/task-manager`;

const tasks = new Array(TASK_AMOUNT).fill().map(generateTask);
const api = new Api(END_POINT, AUTHORIZATION);

api.getTasks()
  .then((tasks) => console.log(tasks));

const tasksModel = new TasksModel();
tasksModel.setTasks(tasks);

const filterModel = new FilterModel();

const siteMainNode = document.querySelector(`.main`);
const siteHeaderNode = siteMainNode.querySelector(`.main__control`);
const siteMenuComponent = new SiteMenuView();

render(siteHeaderNode, siteMenuComponent, RenderPosition.BEFOREEND);

const boardPresenter = new BoardPresenter(siteMainNode, filterModel, tasksModel);
const filterPresenter = new FilterPresenter(siteMainNode, filterModel, tasksModel);

const handleTaskNewFormClose = () => {
  siteMenuComponent.getElement().querySelector(`[value=${MenuItem.TASKS}]`).disabled = false;
  siteMenuComponent.setMenuItem(MenuItem.TASKS);
};

let statisticsComponent = null;

const handleSiteMenuClick = (menuItem) => {
  switch (menuItem) {
    case MenuItem.ADD_NEW_TASK:
      remove(statisticsComponent);
      boardPresenter.destroy();
      filterModel.setFilter(UpdateType.MAJOR, FilterType.ALL);
      boardPresenter.init();
      boardPresenter.createTask(handleTaskNewFormClose);
      siteMenuComponent.getElement().querySelector(`[value=${MenuItem.TASKS}]`).disabled = true;
      break;
    case MenuItem.TASKS:
      remove(statisticsComponent);
      boardPresenter.init();
      break;
    case MenuItem.STATISTICS:
      boardPresenter.destroy();
      statisticsComponent = new StatisticsView(tasksModel.getTasks());
      render(siteMainNode, statisticsComponent, RenderPosition.BEFOREEND);
      statisticsComponent.init();
      break;
  }
};

siteMenuComponent.setMenuClickHandler(handleSiteMenuClick);

filterPresenter.init();
boardPresenter.init();
