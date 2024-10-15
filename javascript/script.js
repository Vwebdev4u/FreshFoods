function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Displaying the entered information in an alert box
    alert(`Name: ${name}\nEmail: ${email}\nPassword: ${password}`);

    // Optionally, you can reset the form after submission
    document.getElementById('signupForm').reset();
}
