"use strict"

window.onload = () => {
    const newTodoForm = document.querySelector("#newTodoForm");
    const usernameDDL = document.querySelector("#usernameDDL");
    const categoryDDL = document.querySelector("#categoryDDL");

    populate(usernameDDL, "username", "id", "http://localhost:8083/api/users");
    populate(categoryDDL, "name", "name", "http://localhost:8083/api/categories");

    newTodoForm.addEventListener("submit", (event) => addTodo(event));
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

async function addTodo(event) {
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
    if (response.ok) {
        alert(`Success! New ToDo added for user: ${myForm.userid[myForm.userid.selectedIndex].textContent}`);
    }
}