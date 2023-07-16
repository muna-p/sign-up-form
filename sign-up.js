let inputs = document.getElementById("form-infor");
inputs.style.outline = "none";
inputs.style.borderColor = "red";

function submitTest(event) {
    let password = document.getElementById("password").value;
    let passwordConfirm = document.getElementById("confirm-password").value;

    if (password != passwordConfirm && passwordConfirm != '') {
        event.preventDefault();

        alert("Passwords do not match!");
        }   
}



let button = document.getElementById("submitButton");

button.addEventListener("click", submitTest);