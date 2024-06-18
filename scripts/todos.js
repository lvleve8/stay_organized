"use strict"
console.log("hi lazy team")
document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.getElementById('userDrop');
    const apiUrl = 'http://localhost:8083/api/users'; 

    dropdown.addEventListener("change", getUsers)

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const option = document.createElement('option');
                option.value = item.id;
                option.textContent = item.name;
                dropdown.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            dropdown.innerHTML = '<option value="">Failed to load options</option>';
        });
});


async function getUsers() {
    let userInput = document.querySelector("#userDrop")
    

    let newString = ("http://localhost:8083/api/todos/byuser/").concat(userInput.value)
    console.log(newString)

    try {
        let reponse = await fetch(newString);
        if (!reponse.ok) {
            throw new Error("gosh darnit");
        }
        let data = await reponse.json();
        console.log(data)

        let filteredData = data.map(user => ({
            category: user.category,
            description: user.description,
            completed: user.completed
        }));

        let results = document.getElementById(`results`)
        results.innerHTML = ""
        filteredData.forEach(user => {
            let dataDiv = document.createElement(`div`);
            dataDiv.innerHTML = `<strong>Category</strong>: ${user.category}<br>Description: ${user.description}<br> Have completed? ${user.completed}`;
            results.appendChild(dataDiv)
          });



    } catch (error) {
        console.log(error);
    }
}


async function buildTextDrop(){

let users = await getUsers()
    users.forEach(user => {
        let newOption = document.createElement("option");
        newOption.textContent = user.userId;
        newOption.value = user.id
        theDropdown.appendChild(newOption)
});
}
