document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        let isValid = true;
        nameError.textContent = '';
        emailError.textContent = '';
        messageDiv.classList.add('hidden');

        // Validate name
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            isValid = false;
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        }

        // If valid, show success message
        if (isValid) {
            messageDiv.textContent = 'Form submitted successfully!';
            messageDiv.classList.remove('hidden');
            form.reset(); // Reset the form
        }
    });
});
