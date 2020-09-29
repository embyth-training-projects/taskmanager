// Функция из интернета по генерации случайного числа из диапазона
export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

// Функция проверки просрочена ли задача
export const isTaskExpired = (dueDate) => {
  if (dueDate === null) {
    return false;
  }

  let currentDate = new Date();
  currentDate.setHours(23, 59, 59, 999);
  currentDate = new Date(currentDate);

  return currentDate.getTime() > dueDate.getTime();
};

// Функция проверки на повторяющиеся дни в задаче
export const isTaskRepeating = (repeating) => {
  return Object.values(repeating).some(Boolean);
};

// Функция перевода даты в понятную строку
export const humanizeTaskDueDate = (dueDate) => {
  return dueDate.toLocaleString(`en-US`, {day: `numeric`, month: `long`});
};
