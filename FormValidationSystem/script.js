let form = document.getElementById("myForm");
form.addEventListener("submit", function(e) {

    e.preventDefault();
    let isValid = true;
    let nameValue = username.value.trim();
    let nameError = document.getElementById("nameError");
    let namePattern = /^[a-zA-Z ]+$/;

    if (nameValue === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }
    else if (!namePattern.test(nameValue)) {
        nameError.textContent = "Only letters and spaces are allowed";
        isValid = false;
    }else{
        nameError.textContent = "";
        console.log("Name is Valid");
    }
    let emailValue = email.value.trim();
    let emailError = document.getElementById("emailError");
    let emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/;
    if(emailValue === ""){
        emailError.textContent = "Email is required";
        isValid = false;
    }
    else if(!emailPattern.test(emailValue)){
        emailError.textContent = "Invalid Email";
        isValid = false;
    }
    else{
        emailError.textContent = "";
        console.log("Valid Email");
    }
    let passwordValue = password.value.trim();
    let passwordError = document.getElementById("passwordError");
    if(passwordValue === ""){
        passwordError.textContent = "Password is required";
        isValid = false;
    }
    else if(passwordValue.length < 8){
        passwordError.textContent = "Password must be atleast 8 characters";
        isValid = false;
    }
    else{
        passwordError.textContent = "";
        console.log("Valid Password");
    }
    let confirmPasswordValue = confirmPassword.value.trim();
    let confirmPassError = document.getElementById("confirmPasswordError");
    if(confirmPasswordValue === ""){
        confirmPassError.textContent = "Confirm Password is required";
        isValid = false;
    }
    else if(confirmPasswordValue !== passwordValue){
        confirmPassError.textContent = "Password and confirm password are different";
        isValid = false;
    }
    else{
        confirmPassError.textContent = "";
        console.log("Valid confirm password");
    }
    let ageValue = age.value;
    let ageError = document.getElementById("ageError");

    if (ageValue === "") {
       ageError.textContent = "Age is required";
       isValid = false;
    }
    else if (Number(ageValue) < 18) {
        ageError.textContent = "Age must be 18 or above";
        isValid = false;
    }
    else {
       ageError.textContent = "";
       console.log("Age is valid");
    }
    let genderValue = gender.value;

    let genderError = document.getElementById("genderError");

    if (genderValue === "") {
        genderError.textContent = "Please select your gender";
        isValid = false;
    }
    else {
        genderError.textContent = "";
        console.log("Gender is valid");
    }
    let successMessage = document.getElementById("successMsg");
    if(isValid){
        successMessage.textContent = "Registration Successful!";
        successMessage.style.color = "green";
    }
    else{
        successMessage.textContent = "";
    }
});
