'use strict'

const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-data";

// Initial data of the form
const formObject = {};
const getLocalStorageData = localStorage.getItem(localStorageKey);

if (getLocalStorageData !== null && getLocalStorageData !== undefined) {
    try {
       const localStorageData = JSON.parse(getLocalStorageData);

        if (localStorageData) {
        form.elements.email.value = localStorageData.email;
        form.elements.message.value = localStorageData.message;
            
        formObject.email = localStorageData.email;
        formObject.message = localStorageData.message;
    }
    } catch (e) {}  
}

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
        localStorage.removeItem(localStorageKey)
    } 
})
