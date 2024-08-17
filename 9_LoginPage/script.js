let signUpBtn = document.querySelector('.signupbtn');
let signInBtn = document.querySelector('.signinbtn');
let nameField = document.querySelector('.namefield');
let tittle = document.querySelector('.tittle');
let underline = document.querySelector('.underline');
let text = document.querySelector('.text');

signInBtn.addEventListener('click',()=>{
    nameField.style.maxHeight = '0';
    tittle.innerHTML = 'Sign In'
    text.innerHTML = 'Lost Password'
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.transform = 'translateX(35px)';

});
signUpBtn.addEventListener('click',()=>{
    nameField.style.maxHeight = '60px';
    tittle.innerHTML = 'Sign Up';
    text.innerHTML = 'Password Suggestion';
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underline.style.transform = 'translateX(0px)';

});