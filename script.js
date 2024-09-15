document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('myForm');
    const textInput = document.getElementById('textInput');
    const emailInput = document.getElementById('emailInput');
    const ageInput = document.getElementById('ageInput');
    const telInput = document.getElementById('telInput');

    form.addEventListener('submit', (event) => {
        let valid = true;
        let message = '';

        if (textInput.value.trim() === '') {
            message += 'Text field cannot be empty!\n';
            valid = false;
        }
        if (telInput.value.trim() === '') {
            message += 'Tel field cannot be empty!\n';
            valid = false;
        }

        if (emailInput.value.trim() === '') {
            message += 'Email field cannot be empty!\n';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(emailInput.value.trim())) {
            message += 'Invalid email format!\n';
            valid = false;
        }

        if (ageInput.value.trim() === '') {
            message += 'Age field cannot be empty!\n';
            valid = false;
        } else {
            const age = parseInt(ageInput.value.trim(), 10);
            if (isNaN(age) || age < 18 || age > 99) {
                message += 'Age must be a number between 18 and 99!\n';
                valid = false;
            }
        }

        if (!valid) {
            alert(message);
            event.preventDefault();  // Prevent form submission
        }
    });
});