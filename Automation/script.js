let tasks = [];
let currentTaskId = 0;

function addNewTask() {
    const task = {
        id: ++currentTaskId,
        name: "Task " + currentTaskId,
        status: "Planned"
    };

    tasks.push(task);
    renderTasks();
}

function renderTasks() {
    const container = document.getElementById("tasks");

    container.innerHTML = tasks.map(task => `
        <div class="task ${task.status === 'Complete' ? 'complete' : 'planned'}">
            ${task.name} - ${task.status}
            <button onclick="approveTask(${task.id})">Approve</button>
        </div>
    `).join("");
}

function approveTask(id) {
    const task = tasks.find(t => t.id === id);
    task.status = "Complete";
    renderTasks();
}
