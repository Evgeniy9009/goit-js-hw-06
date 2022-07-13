const form = document.querySelector(".login-form")
// const email = document.querySelector(".email")
// const password = document.querySelector(".password")

form.addEventListener("submit", onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget
    
    if (email.value === "" || password.value === "") {
        alert ("Все поля должны быть заполнены.")
    }

    const formData = {
        email : email.value,
        password : password.value
    }
    console.log(formData)
    form.reset()
    }

