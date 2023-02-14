function login() {
    // // email validation
    // let email = document.getElementById("email")
    // let emailError = document.getElementById("emailError")
    // console.log("entered email value -->", email.value);

    // if (email.value == "") {
    //     console.log("please enter email")
    //     emailError.innerHTML = "please enter email"
    //     emailError.style.color = 'red'
    // }

    // // password validation
    // let password = document.getElementById("password")
    // let passError = document.getElementById("passError")
    // console.log("entered password value -->", password.value);

    // if (password.value.length == 0) {
    //     console.log("plz enter password");
    //     passError.innerHTML = "plz enter password"
    //     passError.style.color = 'red'
    // }

    // else if (password.value.length <= 4) {
    //     console.log("password length should be more than 4");
    //     passError.innerHTML = "password length should be more than 4"
    //     passError.style.color = 'red'
    // }

    //17/12/2022-sat

    let firstName = document.getElementById("firstName")
    let password = document.getElementById("password")
    console.log("entered email value -->", firstName.value);
    console.log("entered password value -->", password.value);

    let register = localStorage.getItem("noncsr")
    console.log(register)
    console.log(register.firstName)

    let registerObject = JSON.parse(register)
    console.log(registerObject);
    console.log(registerObject.firstName);
    console.log(registerObject.password);


    let msg = document.getElementById("msg")

    if (firstName.value == registerObject.firstName || password.value == registerObject.password) {
        console.log("login success")
        msg.innerHTML = "login success"
        window.location.href = "https://www.facebook.com"

    } else {

        console.log("incorrect email or password");
        msg.innerHTML = "incorrect name or password"

    }

}