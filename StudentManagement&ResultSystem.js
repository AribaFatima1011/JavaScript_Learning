const prompt = require("prompt-sync")();
const students = [];

let choice;
while(choice !== 8){
    showMenu();
    switch(choice){
        case 1:
            addStudent();
            break;
        case 2:
            displayStudents();
            break;
        case 3:
            searchStudent();
            break;
        case 4:
            showResult();
            break;
        case 5:
            showStatistics();
            break;
        case 6:
            checkAttendanceEligibility();
            break;
        case 7:
            addBonusMarks();
            break;
        case 8:
            console.log("Exit successfully");
            break;
        default:
            console.log("Invalid choice");
    }
}
function showMenu(){
    console.log("--Student Management & Result System--\n1.Add a Student\n2.Display all Students\n3.Search student by roll number\n4.Show an individual student's result\n5.Show class statistics\n6.Check Attendance Eligibility\n7.Add Bonus Marks\n8.Exit the program");
    choice = Number(prompt("Enter you choice(i.e. 1):"));
}
function calculateTotal(english, computer, math) {
  let total = english + computer + math;
  return total;
}

function calculatePercentage(total) {
  let percentage = total / 300 * 100;
  return percentage;
}

function calculateGrade(percentage) {
  if(percentage >= 80){
    console.log("Grade:A");
  }
  else if(percentage >= 70){
    console.log("Grade:B");
  }
  else if(percentage >= 60){
    console.log("Grade:C");
  }
  else if(percentage >= 50){
    console.log("Grade:D");
  }
  else{
    console.log("Grade:F");
  }
}

function calculateStatus(percentage, english, computer, maths){
    if(percentage >= 50 && english >= 40 && computer >= 40 && maths >= 40){
        console.log("Pass");
    }else{
        console.log("Fail(Retake Required)");
    }
}

function addStudent() {
    let stdName = prompt("Enter Student Name:").trim();
    if(stdName === ""){
        console.log("Student Name should not be empty");
        return;
    }
    let stdRollNo = Number(prompt("Enter Student Roll #:"));
    if(stdRollNo < 1 || !Number.isFinite(stdRollNo)){
        console.log("Invalid Roll Number");
        return;
    } 
    else if(students.some(student=>{
            return stdRollNo === student.Roll_No;
        })){
            console.log("Roll Number already exist");
            return;
    }
    let stdAge = Number(prompt("Enter Student age:"));
    if(stdAge < 1 || !Number.isFinite(stdAge)){
        console.log("Invalid age");
        return;
    }
    let engMarks = Number(prompt("Enter English Marks:"));
    if(engMarks < 0 || engMarks > 100 || !Number.isFinite(engMarks)){
        console.log("Invalid Marks");
        return;
    }
    let compMarks = Number(prompt("Enter Computer Marks:"));
    if(compMarks < 0 || compMarks > 100 || !Number.isFinite(compMarks)){
        console.log("Invalid Marks");
        return;
    }
    let mathsMarks = Number(prompt("Enter Mathematics Marks:"));
    if(mathsMarks < 0 || mathsMarks > 100 || !Number.isFinite(mathsMarks)){
        console.log("Invalid Marks");
        return;
    }
    let attendance = Number(prompt("Enter Student Attendance Percentage:"));
    if(attendance < 0 || attendance > 100 || !Number.isFinite(attendance)){
        console.log("Invalid attandence");
        return;
    }
    students.push(
        {
            name : stdName,
            Roll_No : stdRollNo,
            age : stdAge,
            eng_Marks : engMarks,
            comp_Marks : compMarks,
            maths_Marks : mathsMarks,
            attendancePercent : attendance,
            bonusUsed : false
        }
    )
    console.log("Student added successfully");
}

function displayStudents() {
    if(students.length === 0){
        console.log("No Student is added");
        return;
    }
  students.forEach(std => {
    console.log("Name:", std.name);
    console.log("Roll #:", std.Roll_No);
    console.log("Age:", std.age);
    console.log("English Marks:", std.eng_Marks);
    console.log("Computer Marks:", std.comp_Marks);
    console.log("Mathematics Marks:",std.maths_Marks);
    console.log("Attendence Percentage:", std.attendancePercent);
  })
}

function searchStudent(rollNo) {
  let searchRollno = Number(prompt("Enter Roll # of searching student:"));
  let stdExists = students.some(std =>{
    return searchRollno === std.Roll_No;
  });
  if(stdExists){
    let searchIndex = students.findIndex(std=>{
        return searchRollno === std.Roll_No;
    });
    console.log("Name:",students[searchIndex].name);
    console.log("Roll #:",students[searchIndex].Roll_No);
    console.log("Age:",students[searchIndex].age);
    console.log("English Marks:",students[searchIndex].eng_Marks);
    console.log("Computer Marks:",students[searchIndex].comp_Marks);
    console.log("Mathematics Marks:",students[searchIndex].maths_Marks);
    console.log("Attendence Percentage:",students[searchIndex].attendancePercent);
  }else{
    console.log(`Roll # ${searchRollno} not exist`);
  }
}

function showStatistics() {
    console.log("---Class Statistics---");
    if(students.length == 0){
        console.log("No student is added");
        return;
    }
    let totalPercentage = 0;
    for(let i = 0; i<students.length; i++){
        let percentage = calculatePercentage(calculateTotal(students[i].eng_Marks,students[i].comp_Marks,students[i].maths_Marks));
        totalPercentage += percentage;
    }
    let classAverage = totalPercentage / students.length;
    console.log(`Class Average:${classAverage}`);
    let highestPercentage = students.reduce((highest,std) => {
        let percentage = calculatePercentage(calculateTotal(std.eng_Marks,std.comp_Marks,std.maths_Marks));
        return percentage > highest ? percentage : highest;
    },0)
    console.log("Highest Percentage:", highestPercentage);
    let highestIndex = students.findIndex(std =>{
        let percentage = calculatePercentage(calculateTotal(std.eng_Marks,std.comp_Marks,std.maths_Marks));
        return highestPercentage === percentage;
    });
    console.log("Highest Percentage Student Name:", students[highestIndex].name);

    let lowestPercentage = students.reduce((lowest,std) => {
        let percentage = calculatePercentage(calculateTotal(std.eng_Marks,std.comp_Marks,std.maths_Marks));
        return percentage < lowest ? percentage : lowest;
    },100)
    console.log("Lowest Percentage:", lowestPercentage);
    let lowestIndex = students.findIndex(std =>{
        let percentage = calculatePercentage(calculateTotal(std.eng_Marks,std.comp_Marks,std.maths_Marks));
        return lowestPercentage === percentage;
    });
    console.log("Lowest Percentage Student Name:", students[lowestIndex].name);

    let pass = 0;
    let fail = 0;
    students.forEach(std => {

        let total = calculateTotal(std.eng_Marks, std.comp_Marks, std.maths_Marks);
        let percentage = calculatePercentage(total);

        if(percentage >= 50 && std.eng_Marks >= 40 && std.comp_Marks >= 40 && std.maths_Marks >= 40){
            pass++;
        }
        else{
           fail++;
        }

    });

    console.log("Pass Students:", pass);
    console.log("Fail Students:", fail);
    console.log("---Sorting of Percentage in Decending Order---")
    let sortedStudents = [...students].sort((a,b)=>{
         let totalA = calculateTotal(a.eng_Marks, a.comp_Marks, a.maths_Marks);
         let totalB = calculateTotal(b.eng_Marks, b.comp_Marks, b.maths_Marks);
         let percentageA = calculatePercentage(totalA);
         let percentageB = calculatePercentage(totalB);
         return percentageB - percentageA;
    })
    sortedStudents.forEach(std=>{
        let total = calculateTotal(std.eng_Marks, std.comp_Marks, std.maths_Marks);
        let percentage = calculatePercentage(total);
        console.log("Name:", std.name);
        console.log("Roll # ",std.Roll_No);
        console.log("Percentage:", percentage.toFixed(2), "%");
    })
    let highestMaths = students.reduce((highest,std) => {
        return std.maths_Marks > highest ? std.maths_Marks : highest;
    },0)
    console.log("-------------------------");
    console.log("Highest Mathematics Marks:", highestMaths);
    let highestMathsIndex = students.findIndex(std =>{
    return highestMaths === std.maths_Marks;
    });
    console.log("Highest Mathematics Marks Student Name:", students[highestMathsIndex].name); 
}
function showResult(){
    if(students.length == 0){
        console.log("No student is present");
        return;
    }
    let resultRoll = Number(prompt(("Enter Roll #:")));
    let stdExists = students.some(std =>{
    return resultRoll === std.Roll_No;
  });
  if(stdExists){
    let searchIndex = students.findIndex(std=>{
        return resultRoll === std.Roll_No;
    });
    let totalMarks = calculateTotal(students[searchIndex].eng_Marks, students[searchIndex].comp_Marks, students[searchIndex].maths_Marks);
    console.log("Total Marks:300");
    console.log("Obtained Marks:", totalMarks);
    let percentage = calculatePercentage(totalMarks);
    console.log(`Percentage:${percentage}%`);
    calculateGrade(percentage);
    calculateStatus(percentage, students[searchIndex].eng_Marks, students[searchIndex].comp_Marks, students[searchIndex].maths_Marks);
}else{
    console.log("Roll # ", resultRoll, " does not exist");
}
}

function checkAttendanceEligibility(){
    if(students.length === 0){
        console.log("No student is added");
        return;
    }
    students.forEach(std=>{
        if(std.attendancePercent >= 75){
            console.log(std.name," is Eligible");
        }else{
            console.log(std.name, " is not Eligible");
        }
    })
}

function addBonusMarks(){
    if(students.length == 0){
        console.log("No student is added");
        return;
    }
    let bonusRollNo = Number(prompt("Enter Roll No:"));
    let findBonusIndex = students.findIndex(std=>{
        return bonusRollNo === std.Roll_No;
    });
    if(findBonusIndex === -1){
        console.log("Student does not exist");
        return;
    }
    console.log("You can add 5 bonus marks only to one of three subjects(i.e. English, Computer, Mathematics)");
    let bonusSubject = prompt("Enter name of subject:");
    if(bonusSubject.trim().toLowerCase() === "english" && students[findBonusIndex].bonusUsed === false){
        students[findBonusIndex].eng_Marks = Math.min(students[findBonusIndex].eng_Marks+5, 100);
        console.log("Bonus Marks Added Successfully");
        students[findBonusIndex].bonusUsed = true;
    }
    else if(bonusSubject.trim().toLowerCase() === "computer" && students[findBonusIndex].bonusUsed === false){
        students[findBonusIndex].comp_Marks = Math.min(students[findBonusIndex].comp_Marks+5, 100);
        console.log("Bonus Marks Added Successfully");
        students[findBonusIndex].bonusUsed = true;
    }
    else if (bonusSubject.trim().toLowerCase() === "mathematics" && students[findBonusIndex].bonusUsed === false){
        students[findBonusIndex].maths_Marks = Math.min(students[findBonusIndex].maths_Marks+5, 100);
        console.log("Bonus Marks Added Successfully");
        students[findBonusIndex].bonusUsed = true;
    }
    else if(students[findBonusIndex].bonusUsed === true){
        console.log("Already availed bonus marks in one subject");
    }
    else{
        console.log("Invalid subject name or spelling");
    }
}