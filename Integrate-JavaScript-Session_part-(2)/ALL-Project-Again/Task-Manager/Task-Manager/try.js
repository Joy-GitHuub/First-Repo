const taskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

let doneTaskCount = 0;

taskButton.addEventListener('click', function () {
    const taskInput = document.getElementById('task-input');

    const div = document.createElement('div');
    const para = document.createElement('p');
    const button = document.createElement('button');

    para.innerText = taskInput.value;
    button.innerText = 'Done';

    button.classList.add('btn', 'btn-primary', 'btn-click');
    div.classList.add('border', 'border-3', 'border-info', 'p-3', 'my-3', 'card', 'single-task')

    div.appendChild(para);
    div.appendChild(button);

    taskList.appendChild(div);

    buttonListener();
    updateResult();
});

function buttonListener() {
    const buttons = document.getElementsByClassName('btn-click')
    for (const button of buttons) {
        button.addEventListener('click', function (event) {

            event.target.parentElement.classList.add('text-danger', 'bg-dark');

            if (event.target.innerText === 'Done') {
                event.target.classList.add('btn-danger', 'px-5', 'mx-auto', 'my-3');
                event.target.parentElement.classList.add('text-danger', 'text-align', 'bg-dark');

                event.target.setAttribute("disabled", true);
                event.target.innerText = "Completed";
                doneTaskCount++;
                updateResult();
            }
        })
    }
};

function updateResult() {

    const totalTask = document.getElementById('total-task');
    totalTask.style.color = 'blue';
    totalTask.style.fontSize = '20px';

    const taskList = document.getElementById('task-list').childElementCount;
    totalTask.innerText = taskList;



    const doneTask = document.getElementById('done-task');

    doneTask.innerText = doneTaskCount;
    doneTask.style.color = 'green';
    doneTask.style.fontSize = '18px';

    const undoneTask = document.getElementById('undone-task');
    undoneTask.style.color = 'red';
    undoneTask.style.fontSize = '18px'

    undoneTask.innerText = taskList - doneTask.innerText;
};

function inputChange(event) {
    // console.log(event);

    const searchKey = event.target.value.toLowerCase();
    filterNotes(searchKey);
}

function filterNotes(searchKey) {
    // console.log(searchKey);

    const task = document.getElementsByClassName('single-task');
    // console.log(task);
    for (const element of task) {
        if (element.innerText.toLowerCase().includes(searchKey) == true) {
            console.log(element.innerText.includes(searchKey))
            console.log('work')
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }
}