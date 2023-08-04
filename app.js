const email = document.querySelector('#email');
const submit = document.querySelector('#submit');
const success = document.querySelector('.success');
const section = document.querySelector('section');
const spanError = document.querySelector('.error');
const message = document.querySelector('.message');

submit.addEventListener('click',  function (event) {

    if (validateEmail(email)){
        console.log('teste');
        success.setAttribute('style', 'display: block');
        section.setAttribute('style', 'display: none');

        message.setAttribute('style', 'font-weight: bold');
        message.innerHTML = email.value;
    };
});


function validateEmail(email){
    let content = email.value;
    let pattern = /\S+@\S+\.\S+/;

    if (!pattern.test(content)){
        spanError.setAttribute('style', 'display: block');
        email.setAttribute('style', 'color: hsl(4, 100%, 67%); background-color: hsl(4, 100%, 95%); border: 2px solid hsl(4, 100%, 67%)');        return false;
    }

    return true;
}