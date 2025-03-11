const refs = {
    form: document.querySelector('.login-form'),
}

console.log(refs.form);

const onBtnClick = event => {
    event.preventDefault();
    
    const formData = {
        [event.currentTarget.elements.email.name]: event.currentTarget.elements.email.value,
        [event.currentTarget.elements.password.name]: event.currentTarget.elements.password.value,
    }

    if (event.currentTarget.elements.email.value == "" || event.currentTarget.elements.password.value == ""){
        alert('All form fields must be filled in');
        return;
    } 

    console.log(formData);
    event.currentTarget.reset(); 
} 


refs.form.addEventListener('submit', onBtnClick);
    

