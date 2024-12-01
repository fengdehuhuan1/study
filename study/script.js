// 获取元素
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// 从localStorage中加载任务
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    taskList.innerHTML = ''; // 清空列表
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}" onclick="toggleTask(${index})">${task.name}</span>
            <button onclick="deleteTask(${index})">删除</button>
        `;
        taskList.appendChild(li);
    });
}

// 添加任务
function addTask() {
    const taskName = taskInput.value.trim();
    if (taskName) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push({ name: taskName, completed: false });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        taskInput.value = ''; // 清空输入框
        loadTasks(); // 重新加载任务列表
    }
}

// 删除任务
function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks(); // 重新加载任务列表
}

// 标记任务为完成/未完成
function toggleTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks(); // 重新加载任务列表
}

// 初始化页面，加载任务
loadTasks();
