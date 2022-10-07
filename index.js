import './style.css';
import displayTasks, { footer } from './modules/displayTasks.js';
import addTask from './modules/addTask.js';

const totalTasks = [
  {
    description: 'Wash the dishes',
    completed: false,
    index: 1,
  },
  {
    description: 'Food',
    completed: false,
    index: 2,
  },
  {
    description: 'Baith',
    completed: false,
    index: 3,
  },
  {
    description: 'Sleep',
    completed: false,
    index: 4,
  },
];

const tasksListDisplay = document.querySelector('.display');

if (totalTasks.length === 0) {
  tasksListDisplay.innerHTML = '<hr/><p>No tasks available now!</p>';
}

/* Add a new task */
addTask();

window.addEventListener('DOMContentLoaded', () => {
  totalTasks.forEach((i) => {
    displayTasks(i);
  });
  footer();
});