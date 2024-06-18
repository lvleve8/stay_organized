"use strict"

window.onload = () => {
    const newTodoForm = document.querySelector("#newTodoForm");
    const usernameDDL = document.querySelector("#usernameDDL");
    const categoryDDL = document.querySelector("#categoryDDL");

    populate(usernameDDL, "username", "id", "http://localhost:8083/api/users");
    populate(categoryDDL, "name", "name", "http://localhost:8083/api/categories");

<<<<<<< Updated upstream
    newTodoForm.addEventListener("submit", (event) => addTodo(event));
=======
<<<<<<< HEAD
    newTodoForm.addEventListener("submit", (event) => someFn(event));
=======
    newTodoForm.addEventListener("submit", (event) => addTodo(event));
>>>>>>> 106bae6561a9cfefc3bc00e9054e14a2178b5095
>>>>>>> Stashed changes
}

async function getData(url) {
    let response = await fetch(url, {});
    let data = await response.json();

    return data;
}

async function populate(dropdown, textContentKey, valueKey, url) {
    let dataArray = await getData(url);

    dataArray.forEach((dataEntry) => {
        let newOption = document.createElement("option");

        newOption.textContent = dataEntry[`${textContentKey}`];
        newOption.value = dataEntry[`${valueKey}`];

        dropdown.appendChild(newOption);
    })
}

<<<<<<< Updated upstream
async function addTodo(event) {
=======
<<<<<<< HEAD
async function someFn(event) {
=======
async function addTodo(event) {
>>>>>>> 106bae6561a9cfefc3bc00e9054e14a2178b5095
>>>>>>> Stashed changes
    event.preventDefault();

    const myForm = event.target;

    const formData = new FormData(myForm);
    const formDataAsObject = Object.fromEntries(formData);

    const response = await fetch("http://localhost:8083/api/todos", {
        method: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(formDataAsObject)
    });

    let data = await response.json();
    console.log(data);
}