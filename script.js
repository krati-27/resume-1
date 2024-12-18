$(document).ready(function () {
    $('#contact-form').on('submit', function (event) {
        event.preventDefault();
        let name = $('#name').val();
        let email = $('#email').val();
        let message = $('#message').val();

        if (name === '' || email === '' || message === '') {
            alert('All fields are required!');
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address!');
        } else {
            alert('Thank you for reaching out! Your message has been received.');
            this.reset();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
