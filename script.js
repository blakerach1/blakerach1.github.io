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


// Clear input fields
function clearFormAfterSubmission() {
   // Allow the form to submit normally, then clear input fields after a short delay 

setTimeout(function() {
    // Clear input fields
document.getElementById("name-box").value= '';
document.getElementById("email-box").value= '';
document.getElementById("text-box").value= '';
}, 100); // 100 milliseconds delay before clearing the form
}


document.getElementById("externalLink").addEventListener("click", function(event) {
    var confirmation = confirm("Warning: This link will open in a new window. Do you want to continue?");
    if (!confirmation) {
        event.preventDefault(); // Prevent the default behavior if the user cancels
    }
});

