import { useState } from 'react';

export default function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function handleToggleTask(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <div className="app">
      <h1>📅 Mini Task Tracker</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
      <Stats tasks={tasks} />
    </div>
  );
}

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  const [sortBy, setSortBy] = useState('input');

  let sortedTasks;

  if (sortBy === 'input') sortedTasks = tasks;

  if (sortBy === 'description')
    sortedTasks = tasks
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === 'completed')
    sortedTasks = tasks
      .slice()
      .sort((a, b) => Number(a.completed) - Number(b.completed));

  return (
    <div className="task-list">
      <h2>Task List</h2>
      <ul>
        {sortedTasks.map((task) => (
          <TaskItem
            task={task}
            key={task.id}
            onToggleTask={onToggleTask}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </ul>

      <div className="sort-list">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="completed">Sort by completed</option>
        </select>
      </div>
    </div>
  );
}

function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <li className="task-item">
      <span>
        <input
          type="checkbox"
          value={task.completed}
          onChange={() => onToggleTask(task.id)}
        />
        <span style={task.completed ? { textDecoration: 'line-through' } : {}}>
          {task.description}
        </span>
      </span>
      <button onClick={() => onDeleteTask(task.id)}>
        <span>❌</span>
      </button>
    </li>
  );
}

function AddTask({ onAddTask }) {
  const [description, setDescription] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newTask = {
      id: Date.now(),
      description: description,
      completed: false,
    };

    onAddTask(newTask);
    setDescription('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add task"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function Stats({ tasks }) {
  if (!tasks.length) return <h4>Add tasks to your list.</h4>;

  const numTasks = tasks.length;
  const numCompleted = tasks.filter((task) => task.completed).length;
  const percentage = Math.round((numCompleted / numTasks) * 100);

  return (
    <h4>
      {percentage === 100
        ? `Congrats 🎉 All tasks have been completed!`
        : `You have ${numTasks} tasks. ${numCompleted} have been completed.`}
    </h4>
  );
}
