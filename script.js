const taskInput = document.getElementById("taskInput");
const dueDateInput = document.getElementById("dueDateInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const filterButtons = document.querySelectorAll(".filter-btn");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

renderTasks();

// Add task
addBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  const dueDate = dueDateInput.value;

  if (text === "") {
    alert("Please enter a task");
    return;
  }

  const task = {
    id: Date.now(),
    text: text,
    dueDate: dueDate,
    completed: false,
  };

  tasks.push(task);
  saveTasks();
  renderTasks(currentFilter);

  taskInput.value = "";
  dueDateInput.value = "";
});

// Render tasks
function renderTasks(filter = "all") {
  taskList.innerHTML = "";

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  filteredTasks.forEach((task) => {
    const li = document.createElement("li");

    const taskContent = document.createElement("div");
    taskContent.className = "task-content";

    const titleSpan = document.createElement("span");
    titleSpan.textContent = task.text;

    if (task.completed) {
      titleSpan.classList.add("completed");
    }

    taskContent.appendChild(titleSpan);

    if (task.dueDate) {
      const dueDateLabel = document.createElement("small");
      dueDateLabel.className = "due-date";
      dueDateLabel.textContent = `Due: ${formatDueDate(task.dueDate)}`;
      taskContent.appendChild(dueDateLabel);
    }

    // Toggle complete
    titleSpan.addEventListener("click", () => {
      task.completed = !task.completed;
      saveTasks();
      renderTasks(currentFilter);
    });

    // Delete task
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", () => {
      tasks = tasks.filter((t) => t.id !== task.id);
      saveTasks();
      renderTasks(currentFilter);
    });

    li.appendChild(taskContent);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

function formatDueDate(dateString) {
  const date = new Date(dateString);
  if (isNaN(date)) return dateString;

  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// Filter buttons
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    renderTasks(currentFilter);
  });
});

// Save to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
