"use strict"

window.onload = () => {
    const usernameDDL = document.querySelector("#usernameDDL");
    const categoryDDL = document.querySelector("#categoryDDL");

    populate(usernameDDL, "username", "http://localhost:8083/api/users");
    populate(categoryDDL, "name", "http://localhost:8083/api/categories");
}

async function getData(url) {
    let response = await fetch(url, {});
    let data = await response.json();

    return data;
}

async function populate(dropdown, key, url) {
    let dataArray = await getData(url);

    dataArray.forEach((dataEntry) => {
        let newOption = document.createElement("option");

        newOption.textContent = dataEntry[`${key}`];
        newOption.value = dataEntry.id;

        dropdown.appendChild(newOption);
    })
}