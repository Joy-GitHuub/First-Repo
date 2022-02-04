console.log('"JavaScript File Add"');

const taskButton = document.getElementById('add-task-button');
const taskInput = document.
    getElementById('task-input');

const taskList = document.getElementById('task-list');

let doneTaskCount = 0

taskButton.addEventListener('click', function () {
    // alert('Click');

    const taskInputValue = (taskInput.value);
    console.log(typeof taskInputValue)

    if (taskInputValue === '' || taskInputValue >= 0 || taskInputValue <= 0) {
        // console.log(typeof taskInputValue)
        alert('SomeThing Input String Please');
        return;
    }

    const div = document.createElement('div');
    const para = document.createElement('p');
    const button = document.createElement('button');

    para.innerText = taskInputValue;
    button.innerText = 'Done';

    // para.style.color = 'blue';
    button.classList.add('btn', 'btn-outline-primary', 'btn-done');

    div.classList.add('card', 'p-3', 'mt-3', 'border-2', 'border-info', 'single-task');

    div.appendChild(para);
    div.appendChild(button);

    taskList.appendChild(div);

    taskInput.value = '';

    doneButton();
    updateCount();
});

function doneButton() {
    const buttons = document.getElementsByClassName('btn-done');

    for (const button of buttons) {
        button.addEventListener('click', function (event) {
            event.target.parentElement.classList.add('border-info', 'text-su');

            console.log(event.target.parentNode);

            if (event.target.innerText === 'Done') {
                event.target.setAttribute('disabled', true)
                event.target.classList.add('bg-dark', 'text-light');
                event.target.innerText = 'Complete'
                event.target.parentElement.classList.add('border-danger', 'text-success', 'fs-5');
                doneTaskCount++;
                updateCount();
            }
        });
    }
}

function updateCount() {
    const totalTask = document.getElementById('total-task');
    // console.log(taskList.childElementCount);
    totalTask.innerText = taskList.childElementCount;

    const doneTask = document.getElementById('done-task');

    doneTask.innerText = doneTaskCount;

    console.log(doneTaskCount);

    const unDoneTask = document.getElementById('undone-task');
    unDoneTask.innerText = taskList.childElementCount - doneTaskCount;
}

document.getElementById('search-result').addEventListener('keyup', function (event) {


    const searchKey = event.target.value.toLowerCase();
    filterNode(searchKey);

});

function filterNode(searchKey) {
    // console.log(searchKey);

    const task = document.getElementsByClassName('single-task');

    for (const element of task) {

        if (element.innerText.toLowerCase().includes(searchKey) === true) {
            element.style.display = 'block';
        }
        else {
            element.style.display = 'none';
        }
    }

}