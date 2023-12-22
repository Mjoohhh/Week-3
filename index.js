const btnSubmit = document.querySelector("button")
const usernameInputField = document.querySelector("#username")
const userAgeInputField = document.querySelector("#age")
const loginMessage = document.querySelector(".login-message")

btnSubmit.addEventListener("click", () => {
    const usernameInput = usernameInputField.value.toLowerCase()
    const userAgeInput = userAgeInputField.value

    if(usernameInput === "harry" && userAgeInput === "11") {
        console.log("Welcome!")
        loginMessage.textContent = "Welcome, Harry!"
        loginMessage.style.color = "green"
    } else {
        console.log("Go away!")
        loginMessage.textContent = "Go away! You are not welcomed!"
        loginMessage.style.color = "red"
    }


})