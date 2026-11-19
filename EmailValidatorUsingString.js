const prompt = require("prompt-sync")();
function inputEmail(){
  let email = prompt("Enter Email:");
  if(email == null){
    console.log("Empty Input");
    return;
  }
  emailValidator(email);
}
function emailValidator(email){
  email = email.trim().toLowerCase();
  if(email === ""){
     console.log("Email should not be empty");
    return;
    }
  if(email.includes(" ")){
     console.log("Email should not include space");
    return;
  }
  if(!email.includes("@")){
    console.log("Email must contain @");
    return;
  }
  if(!email.includes(".")){
    console.log("Email must contain .");
    return;
  }
  let atIndex = email.indexOf("@");
  let lastAtIndex = email.lastIndexOf("@"); 
  if(atIndex === 0 || atIndex === email.length-1){
    console.log("Invalid @ position");
    return;
  }
  if(atIndex !== lastAtIndex){
    console.log("Only one @ is allowed");
    return;
  }
  let dotIndex = email.lastIndexOf(".");
  if(dotIndex < atIndex || dotIndex === atIndex+1 || dotIndex === email.length-1){
    console.log("Invalid . position");
    return;
  }
  let parts = email.split("@");
  let userName = parts[0];
  let domain = parts[1];
  if(userName.includes(".")){
    console.log(". is not allowed in Username");
    return;
  }
  if(domain.startsWith(".") || domain.endsWith(".")){
    console.log("Invalid domain format");
    return;
  }
  console.log("Valid Email");
}
inputEmail();