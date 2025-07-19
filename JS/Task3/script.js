// Create a mini task tracker with:
// 	•	Task name, due date, and status
// 	•	Filter by upcoming/past/all tasks
const select = (elm) => document.querySelector(elm);

    let form = select('form');
    let task = select('.task');
    let date = select('.date');
    let stage = select('.stage');
    let taskList = select('.tasks');
    let filterSelect = select('.filterSelect');

    let tasks = [];

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let tval = task.value;
      let dval = date.value;
      let sval = stage.value;

      tasks.push({
        name: tval,
        due: dval,
        status: sval
      });

      task.value = "";
      date.value = "";
      stage.value = "Pending";

      renderTasks();
    });

    filterSelect.addEventListener('change', () => renderTasks());

    function renderTasks() {
      taskList.innerHTML = "";

      let filter = filterSelect.value;
      let today = new Date().toISOString().split("T")[0];

      let filtered = tasks.filter((t) => {
        if (filter === "upcoming") {
          return t.due >= today;
        } else if (filter === "past") {
          return t.due < today;
        } else {
          return true;
        }
      });

      if (filtered.length === 0) {
        taskList.innerHTML = "<p>No tasks found.</p>";
        return;
      }

      filtered.forEach((t) => {
        let taskElm = document.createElement("div");
        taskElm.className = `task-item ${t.due >= today ? "upcoming" : "past"}`;
        taskElm.innerHTML = `
          <strong>${t.name}</strong><br/>
          Due: ${t.due}<br/>
          Status: ${t.status}
        `;
        taskList.appendChild(taskElm);
      });
    }

// ✅ Steps:
// 	1.	Basic HTML inputs
// 	•	Task input, date input, select for status
// 	2.	Add task to array
// 	3.	Compare task date with current date
// 	•	Use new Date()
// 	4.	Filter based on condition (past/upcoming/all)
// 	5.	Render filtered task list
// 	6.	Use ternary operators or multiple filters
