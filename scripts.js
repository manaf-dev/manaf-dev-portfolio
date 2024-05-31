document.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.querySelector(".toggle_btn");
    const hamburgerMenu = document.querySelector(".hamburger_menu");
    const header = document.getElementById("header")
    
    
    hamburger.addEventListener("click", toggleHamburgerMenuMenu);
    
    function toggleHamburgerMenuMenu() {
        hamburgerMenu.classList.toggle("active");
        hamburger.classList.toggle("active");
    }
    
    

    // add header background color on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('scrolled')
        } else {
            header.classList.remove('scrolled')
        }
    })
})


// Send email
const sendBtn = document.getElementById('send-btn');
let nameField = document.getElementById('name');
let emailField = document.getElementById('email');
let subjectField = document.getElementById('email-subject');
let messageField = document.getElementById('email-message');


sendBtn.onclick = function (e) {
    // e.preventDefault()
    const name = nameField.value;
    const email = emailField.value;
    const subject = subjectField.value;
    const message = messageField.value;

    console.log(name, email, subject, message)
    nameField.value = emailField.value = subjectField.value = messageField.value = ''
}
