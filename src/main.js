import SiteMenuView from './view/site-menu';
import FilterPresenter from './presenter/filter';
import BoardPresenter from './presenter/board';
import TasksModel from './model/tasks';
import FilterModel from './model/filter';
import {generateTask} from './mock/task';
import {render, RenderPosition} from './utils/render';
import {MenuItem} from './const';

// Константа количества карточек заданий
const TASK_AMOUNT = 22;

const tasks = new Array(TASK_AMOUNT).fill().map(generateTask);

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

const handleSiteMenuClick = (menuItem) => {
  switch (menuItem) {
    case MenuItem.ADD_NEW_TASK:
      boardPresenter.createTask(handleTaskNewFormClose);
      siteMenuComponent.getElement().querySelector(`[value=${MenuItem.TASKS}]`).disabled = true;
      break;
    case MenuItem.TASKS:

      break;
    case MenuItem.STATISTICS:

      break;
  }
};

siteMenuComponent.setMenuClickHandler(handleSiteMenuClick);

filterPresenter.init();
boardPresenter.init();
