
// const students = {
//     studentdetail: {
//         firstName: "Praveen",
//         lirstName: "kumar",
//         age: 34,
//         hobbies: ['coding', 'desigining', 'drawing'],
//         skill: ['html', 'css', 'javascript', 'figma'],
//         quality: ['leadership', 'selfmotivater', 'selfleaner'],
//         isWorking: true,
//     }
// }
/*
//curd operations

//create
students.studentdetail.isALive = true;
console.log(students.studentdetail.age);

students.studentdetail.hobbies.push('innovation');
console.log(students.studentdetail.hobbies);

//update
students.studentdetail.skill[2] = "javaScript"
console.log(students.studentdetail.skill);

//read
//properties
//destructure
console.log(students.studentdetail.firstName);
const { studentdetail: { age } } = students;
console.log(age);
//delete
delete students.studentdetail.age;
console.log(students.studentdetail.age);
*/

//===================================================================
const teachers ={ 
    name:'monogaran',
    age:22,
    position:'hod',
    address:'thiruvannamalai'
}
// console.log(teachers);

const students ={
    student1:{
        fitstName:'praveen',
        lastName:'kumar',
        age:45,
        address:'thirumpoondi'
    },
    student2:{
        fitstName:'dhinesh',
        lastName:'kumar',
        age:55,
        address:'thirumpoondi'
    }
}

console.log(students);
//entries
Object.entries(students).forEach(function(value){
  console.log(value[1].fi);
})
//freeze
    //freeze existing properties not chanable and can not add new properties  
//hasOwn

