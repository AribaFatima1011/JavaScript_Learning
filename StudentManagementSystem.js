const prompt = require("prompt-sync")();
let students = [];
let choice;
while(choice !== 6){
    showMenu();
    switch(choice){
        case 1:
            addStudent();
            break;
        case 2:
            viewStudents();
            break;
        case 3:
            searchStudent();
            break;
        case 4:
            updateStudent();
            break;
        case 5:
            deleteStudent();
            break;
        case 6:
            console.log("Exit successfully");
            break;
        default:
            console.log("Invalid choice");
    }
}
function showMenu(){
    console.log("1.Add Student\n2.View all Students\n3.Search Student\n4.Update Student\n5.Delete Student\n6.Exit");
    choice = Number(prompt("Enter you choice(i.e. 1):"));
}
function addStudent(){
    let stdName = prompt("Enter Student Name:");
    if(stdName !== ""){
        students.push(stdName);
        console.log(`${stdName} added successfully!`);
    }else{
        console.log("Student Name should not be empty");
        addStudent();
    }
}
function viewStudents(){
    if(students.length !== 0){
        for(let i = 0; i<students.length; i++){
            console.log(students[i]);
        }
    }else{
        console.log("No student is added");
    }
}
function searchStudent(){
    let searchName = prompt("Enter name of searching student:");
    let found = false;
    for(let i = 0; i<students.length; i++){
        if(searchName.toLowerCase() === students[i].toLowerCase()){
            console.log(searchName, "is found at ", i, "th number");
            found = true;
            break;
        }
    }
    if(found === false){
        console.log("Not Found");
    }
}
function updateStudent() {
    let oldName = prompt("Enter the name of the student you want to update:");
    let found = false;

    for (let i = 0; i < students.length; i++) {
        if (oldName.toLowerCase() === students[i].toLowerCase()) {
            let newName = prompt("Enter the new student name:");

            if (newName.trim() === "") {
                console.log("New name cannot be empty!");
                found = true;
                break;
            }

            students[i] = newName.trim();
            console.log("Student name updated successfully!");
            found = true;
            break;
        }
    }

    if (found === false) {
        console.log("Student Not Found");
    }
}
function deleteStudent(){
    let delName = prompt("Enter name of student you want to delete:");
    let found = false;
    if(students.length === 0){
        console.log("No student is present");
        return;
    }
    for(let i = 0; i < students.length; i++){
        if(delName.toLowerCase() === students[i].toLowerCase()){
            students.splice(i, 1);
            found = true;
            console.log("Student deleted successfully!");
            break;
        }
    }
    if(found === false){
        console.log(delName, " does not exist");
    }
}
