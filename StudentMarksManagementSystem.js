const prompt = require("prompt-sync")();
let students = ["Ariba", "Fatima", "Sarim", "Zain"];
let marks = [90, 96, 98, 80];
function viewStudents(){
    if(students.length !== 0){
        for(let i = 0; i<students.length; i++){
            console.log(`${students[i]}  ${marks[i]}`);
        } 
    }else{
        console.log("No student is present");
    }
}
function addStudent(name, num){
    if(name.trim() === "" || num<0 || num>100){
        console.log("Invalid Data");
    }else{
        students.push(name);
        marks.push(num);
        console.log("Student Added Successfully!");
    }
}
function searchStudent(name){
    let index = students.indexOf(name);
    if(index !== -1){
         console.log(`${students[index]} ${marks[index]}`);
    }else{
        console.log("Student Not Found!");
    }
}
function updateMarks(name, newMarks){
    if(name.trim() === ""){
        console.log("Student cannot be empty");
        return;
    }
    let searchIndex = students.indexOf(name);
    if(searchIndex === -1){
        console.log("Student is not present");
    }
    else if(newMarks<0 || newMarks>100){
        console.log("Invalid Marks")
    }
    else{
        marks[searchIndex] = newMarks;
        console.log("Updated Successfully");
    }
}
function deleteStudent(name){
    if(name.trim() === ""){
        console.log("Student cannot be empty");
        return;
    }
    let delIndex = students.indexOf(name);
    if(delIndex === -1){
        console.log("Student is not present");
    }else{
        students.splice(delIndex, 1);
        marks.splice(delIndex, 1);
        console.log("Deleted Successfully");
    }
}
viewStudents();
let name = prompt("Enter Student Name:");
let number = Number(prompt("Enter Student's Marks:"));
addStudent(name, number);
let searchName = prompt("Enter the Searching Name:");
searchStudent(searchName);
let updatedStudent = prompt("Enter name of student whoes marks you wanna update:");
let newMarks = Number(prompt("Enter new Marks:"));
updateMarks(updatedStudent, newMarks )
let delName = prompt("Enter the Deleting Name:");
deleteStudent(delName);
viewStudents();