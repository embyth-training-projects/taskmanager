import SiteMenuView from './view/site-menu';
import FilterView from './view/filter';
import BoardPresenter from './presenter/board';
import TasksModel from './model/tasks';
import FilterModel from './model/filter';
import {generateTask} from './mock/task';
import {generateFilter} from './mock/filter';
import {render, RenderPosition} from './utils/render';

// Константа количества карточек заданий
const TASK_AMOUNT = 22;

const tasks = new Array(TASK_AMOUNT).fill().map(generateTask);
const filters = generateFilter(tasks);

const tasksModel = new TasksModel();
tasksModel.setTasks(tasks);

const filterModel = new FilterModel();

const siteMainNode = document.querySelector(`.main`);
const siteHeaderNode = siteMainNode.querySelector(`.main__control`);

const boardPresenter = new BoardPresenter(siteMainNode, tasksModel);

render(siteHeaderNode, new SiteMenuView(), RenderPosition.BEFOREEND);
render(siteMainNode, new FilterView(filters), RenderPosition.BEFOREEND);
boardPresenter.init();
