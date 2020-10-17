import Observer from '../utils/observer';

export default class Tasks extends Observer {
  constructor() {
    super();

    this._tasks = [];
  }

  setTasks(tasks) {
    this._tasks = tasks.slice();
  }

  getTasks() {
    return this._tasks;
  }
}
