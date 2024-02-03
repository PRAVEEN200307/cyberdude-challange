let a = ['praveen', 'kumar ', 'dhinesh', 'savitha'];

//curd operations
/*
//create
//bracket nodataion
//push meathod
a[4] = 'mugesh';
a.push("somaskandhan");
console.log(a);

//update
a[0] = "raj";
console.log(a);

//read
console.log(a[0]);
const [myname, mylastName] = a;
console.log(mylastName);

//delete
a.length=5;
console.log(a);

//pop
a.pop();
console.log(a);
*/


const user = [
    { user_id: 1, name: 'Mugesh', age: 78, isAlive: false },
    { user_id: 2, name: 'Dhinesh', age: 18, isAlive: true },
    { user_id: 3, name: 'rajesh', age: 38, isAlive: true },
]

// console.log(user);

user.forEach( (values)  =>{
    // console.log(Object.entries(values));
})

console.log(user[0].isAlive)