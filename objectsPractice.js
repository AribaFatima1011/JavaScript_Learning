let students = [
    {
       name : "Ariba",
       gender : "female",
       age : 20,
       course : "JavaScript",
       address : {
           city : "Sheikhupura",
           country : "Pakistan"
        },
        myName : function(){
           console.log(this.name);
        }
    },
    {
        name : "Fatima",
       gender : "female",
       age : 21,
       course : "CSS",
       address : {
           city : "Lahore",
        country : "Pakistan"
       },
        myName : function(){
           console.log(this.name);
        }
    }
]
console.log(students[1].name);
console.log(students[1].address.country);
students[0].myName();
students[0].address.city = "Islamabad";
console.log(students[0].address.city);
students[1].grade = "A";
console.log(students[1]);
console.log(Object.keys(students[0]));
console.log(Object.values(students[0]));
console.log(Object.entries(students[0]));
let {name, age, address:{city}} = students[0];
console.log(name);
console.log(age);
console.log(city);