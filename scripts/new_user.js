"use strict"

window.onload = () => {
    const form = document.querySelector("#registrationForm");

    form.addEventListener("submit", registerNewUser);
}

const registerNewUser = async (event) => {
    event.preventDefault();

    let form = event.target;

    if (form.createPassword.value === form.confirmPassword.value) {
        try {
            const response = await fetch("http://localhost:8083/api/users", {
                method: "POST",
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: JSON.stringify({
                    username: form.username.value,
                    name: form.name.value,
                    password: form.confirmPassword.value,
                })
            });
            const data = await response.json();

            if (response.ok) {
                alert("Success! New user added");
            } else {
                alert(`${data.error}`);
            }
        } catch (error) {
            console.log("uh oh", error);
        }
    } else {
        alert("hey bozo, those passwords don't match");
    }
}