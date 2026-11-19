let students = ["Ariba", "Fatima", "Zain", "Zara", "Zeemal"];
let marks = [90,89,95,100, 79];
for(let i = 0; i<marks.length; i++){
  let grade;
  let status;
  if(marks[i] >= 90){
    grade = "A+";
  }
  else if(marks[i] >= 80){
    grade = "A";
  }
  else if(marks[i] >= 70){
    grade = "B";
  }
  else if(marks[i] >= 60){
    grade = "C";
  }
  else if(marks[i] >= 50){
    grade = "D";
  }
  else{
    grade = "F";
  }
  if(grade === "F"){
    status = "Fail";
  }
  else{
    status = "Pass";
  }
  console.log(`${students[i]}-${marks[i]}-${grade}-${status}`);
}