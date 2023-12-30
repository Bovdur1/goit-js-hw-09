'use strict'

const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-data";

// Initial data of the form
try {
const localStorageData = JSON.parse(localStorage.getItem(localStorageKey));
form.elements.email.value = localStorageData.email;
form.elements.message.value = localStorageData.message;  
} catch (e) {}

const formObject = {};

// Saving form data to the local storage
form.addEventListener("input", () => {
    const formData = new FormData(form);

    formData.forEach((value, key) => {
        formObject[key] = value.trim();
    })

    localStorage.setItem(localStorageKey, JSON.stringify(formObject))
})

// Verify and submit form data
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const email = e.currentTarget.elements.email.value;
    const message = e.currentTarget.elements.message.value;
    
    if (email === "" || message === "") {
        alert('All form fields must be filled in');
    } else {
        console.log(formObject);
        form.reset()
        localStorage.clear()
    }
})
