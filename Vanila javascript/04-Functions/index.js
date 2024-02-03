console.log("%c hello javascript", 'font-weight:bold;color:red;font-size:24px;');

// Task
//function decelaration
//function expression
//return it
//pass arguments ,receive parameter
//IIFE( IMIDIATE INNOVAKE FUNCTION EXPRESSION)

//1 *2 = 2
//2 * 2 =4
//user =2

//function declearation
// let table = 8
function gettables(table) {
    for (let i = 1; i <= 15; i++) {
        console.log(` ${i} * ${table} = ${i * table}`)
    }
}

// gettables()

// console.log(Math.floor(Math.random() * (5 - 0 + 1)) + 0);

//function expression
  const expression="evening"
    // i dancing
    const habit = ()=> {
        switch(expression){
            case 'morning':
                console.log('learning')
            break;
            case 'afternoon':
                console.log('take reast');
            break;
            case 'evening':
                console.log('dancing');
            break;
        }
    }
    habit()

//return it

function gettables(table) {
    for (let i = 1; i <= 15; i++) {
        console.log(` ${i} * ${table} = ${i * table}`)
    }
}


function learning(){
   return gettables;
}
let tableNum=learning();
tableNum(9);


//i want add number

function addValue(a,b){
   return a + b ;
}

const totalvalue =addValue(10,10);
console.log(totalvalue);


//immitiate innovake function expression

(
  function selfInovoke(name,age){
    console.log(name,age)
  }  
)('praveen',10);
