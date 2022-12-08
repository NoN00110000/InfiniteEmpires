// DOM
const btncredits = document.querySelector(' #upcredits');   // credits button
const displaycredits = document.querySelector('#displaycredits');   // credits

// variables
let credits = 0; // credits

// Event Listeners
btncredits.addEventListener('click', () => {
    credits += 1;
    displaycredits.innerHTML = 'Credits: ' + credits;
});