console.log('"Add JavaScript File"');

// add Task Button
const addButton = document.getElementById('add-task-button');


// Task List Add
const taskList = document.getElementById('task-list');

let doneTaskCount = 0;

// Add Button Event
addButton.addEventListener('click', function () {
    const taskInput = document.getElementById('task-input');

    // Create Element
    const div = document.createElement('div');
    const para = document.createElement('p');
    const button = document.createElement('button');

    para.innerText = taskInput.value;
    button.innerText = 'DONE';

    // Add Class
    button.classList.add("btn", "btn-primary", "task-button");
    div.classList.add("card", "p-3", "border", "mt-1", "single-task");

    // append Child
    div.appendChild(para);
    div.appendChild(button);

    taskList.appendChild(div);

    taskInput.value = '';
    buttonListener();
});

function buttonListener() {

    const taskButtons = document.getElementsByClassName("task-button");

    for (const taskButton of taskButtons) {
        taskButton.addEventListener('click', function (event) {
            console.log(event.target);

            event.target.parentNode.style.color = "red";
            event.target.parentNode.style.padding = "10px";
            event.target.parentNode.style.border = "1px solid green";
            event.target.parentNode.style.margin = "5px";

            if (event.target.innerText == "DONE") {
                event.target.setAttribute("disabled", true);
                event.target.innerText = "Completed";
                // doneTaskCount++;

                updateResult();
            }
        });

    }
}