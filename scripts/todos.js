"use strict"
document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.getElementById('userDrop');
    const apiUrl = 'http://localhost:8083/api/users'; 

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