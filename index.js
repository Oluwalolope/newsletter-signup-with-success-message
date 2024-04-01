const form = document.querySelector('form');
const newsletter = document.querySelector('.container');
const popup = document.querySelector('.popup__wrapper');
const popupClose = document.querySelector('button');
const pattern = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
const userEmail = form.querySelector('input');

//Check whether the form is valid then submit 
form.addEventListener('submit' , e => {
    e.preventDefault();//Stop the page from refreshing

    if (pattern.test(userEmail.value)) {
        popup.style.display= "flex";
        newsletter.style.display= "none";
        popup.querySelector('span').textContent = userEmail.value;
        userEmail.classList.remove('invalid');
        form.reset();
    } else {
        userEmail.classList.add('invalid');
        form.querySelector('.error__Mssg').style.display = "block";
    }
});

userEmail.addEventListener('keyup', () => {
    if (pattern.test(userEmail.value)) {
        userEmail.style.borderColor = "green";
        userEmail.style.backgroundColor = "var(--white)";
        form.querySelector('.error__Mssg').style.display = "none";
    } else {
        userEmail.style.border = "var(--border-invalid)";
        userEmail.style.backgroundColor = "var(--tomato-transparent)";
        form.querySelector('.error__Mssg').style.display = "block";
    }
});
popupClose.addEventListener('click', () => {
    popup.style.display= "none";
    newsletter.style.display= "flex";
    userEmail.style.borderColor = "var(--grey)";
});