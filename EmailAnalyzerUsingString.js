const prompt = require("prompt-sync")();

function analyzeEmail(email){
  email = email.trim().toLowerCase();
  if(!email.includes(".") || !email.includes("@")){
    console.log("Invalid Email");
    return;
  }
  let atIndex = email.indexOf("@");
  let dotIndex = email.indexOf(".");
  let userName = email.slice(0, atIndex);
  let domain = email.slice(atIndex+1);
  let provider = email.slice(atIndex+1, dotIndex);
  let extension = email.slice(dotIndex+1);
  console.log(`Email: ${email}`);
  console.log(`userName: ${userName}`);
  console.log(`Domain: ${domain}`);
  console.log(`Provider: ${provider}`);
  console.log(`Extension: ${extension}`);
}
let yourEmail = prompt("Enter your email:");
analyzeEmail(yourEmail);