console.log('"Baap Er Bank Home Page"');

document.getElementById('submit-btn').addEventListener('click', function () {

    const emailField = document.getElementById('userEmail');
    const emailFieldValue = emailField.value;


    const passwordField = document.getElementById('user-password');
    const passwordFieldValue = passwordField.value;

    if ((emailFieldValue == 'xyz@.com') && (passwordFieldValue === '123')) {
        console.log('Valid User')
        window.location.href = 'bank.html';
    }
    else {
        console.log(alert('Wrong User'));
        location.reload();
    }

});