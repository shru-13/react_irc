document.addEventListener('DOMContentLoaded', function () {
    const greetingElement = document.getElementById('msg');
    const changeTextButton = document.getElementById('btn');

    changeTextButton.addEventListener('click', function () {
        greetingElement.textContent = 'This is the manipulated text!';
    });
});
