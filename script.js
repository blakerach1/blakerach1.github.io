// Get the hamburger and nav menu elements
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Add click event listener to the hamburger
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

// Get the button and paragraph elements
const submitClick = document.querySelector("#submit-button");
const successMessage = document.querySelector("#submit-success");

// Add click event listener to the button    
// Change the display style of the paragraph to 'block' to make visible
submitClick.addEventListener('click', function() {
    successMessage.style.display = 'block';
})


