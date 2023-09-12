// log a statment using console.log()

console.log('Hello from Script')

// Variables 
// Variables are Containers for Storing Data
// JavaScript Variables can be declared in 4 ways:

// Automatically
// Using var
// Using let
// Using const


// // Automatically
// x = 52;
// y = 1;
// z = x + y;
// console.log(z)


// // Using var
// var j = 5;
// var k = 6;
// var u = j + k;
// console.log(u)


// var x = "John Doe";

// var x = 0;
// console.log(x)

// let  x = 10;
// // Here x is 10

// {  
// let x = 2;
// // Here x is 2
// }

// console.log(x)


// // You can create a const object:
// const car = {type:"Fiat", model:"500", color:"white"};

// // You can change a property:
// car.color = "red";

// // You can add a property:
// car.owner = "Johnson";

// console.log( car.owner, car.model, car.color, car.type)

// let age = 25
// // document.write(age);
// console.log(age)

// const salary = 8000 
// // salary = 80000
// // document.write(salary);
// console.log(salary)

// let sum = 0
// sum = 5
// console.log(sum)


// JavaScript Data Types

// primitive type    
//     String
//     Number
//     Boolean
//     undefined
//     null
//     biglnt
//     Symbol

// Non primitive type 
// An object
// An array
// A date


// // strings

// // string the following  goutes

// const name = "muraya"
// const language= 'javaScript'
// const chanel =  `murayach`


// // Number 

// const total = 0
// const PI =3.14

// // Boolean

// // use to run code for true or fasle statment 

// const isPrimaryNumber =true
// const IsNewUser = false


// // undefined 
// //  value that is not assisgned 

// let result
// console.log(result)

// const res =null //explicitly 

// // null
// // special value represent unknown value or empty value in JS

// const data=null


// // const object store value 
// const person =
// {
//     firstName: 'Muraya',
//     lastName: 'babu',
//     age: 30
// }

// console.log(person.firstName, person.lastName, person.age)

// const oodNumbers = [1, 3, 5, 7, 9]
// console.log(oodNumbers[4])


// let a=10
// a= 'babu'
// a=true

// console.log(a)


// let x = 16 + 4 + "Volvo"
// console.log(x)


// JavaScript Operators 
// Special symbol used to perform operation on values and variables
    // Arithmetic Operators
    // Assignment Operators
    // Comparison Operators
    // String Operators
    // Logical Operators
    // Bitwise Operators
    // Ternary Operators
    // Type Operators


    // Assignment Operators

    // let x = 10

    // Arithmetic Operators

    let x = 10
    let y = 5

    //  //console.log(x%y)
    //  console.log(x+y)
    //  console.log(x-y)
    //  console.log(x/y)
    //  console.log(x*y)
    //  console.log(++x)
    //  console.log(--y)
    

    // Comparison Operators
    // console.log(x==y)
    // console.log(x!=y)
    // console.log(x===y)
    // console.log(x!==y)
    // console.log(x>y)
    // console.log(x>=y)
    // console.log(x<=y)
    // console.log(x<y)


    // Logical Operators

    // const isValidNumber = x > 8 && 8 > y
    // const isValidNumber = x > 20 || 1 > y  // if either operand is true the result is true
    // console.log(isValidNumber)

    // String Operators adding string together 
    //     console.log('Muraya '+'babu')

    // const isEven = 10%2 ? 'number is even' : 'number is odd'
    // console.log(isEven) 

//     /// type conversions 
//     // implicit conversion 
// console.log(true + '3')

// console.log('12' - '3')
// console.log('12' / '3')
// console.log('12' * '3')
// console.log('12' % '3')


// console.log('5' - true)
// console.log('5' - null)
// console.log('2' * true)

// explicit conversion
// manually convert the type value

// console.log(Number("7"))
// console.log(parseFloat("7"))
// console.log(parseInt("7"))

// console.log(String(true))
// console.log((500).toString()) it return as string

// console.log(Boolean(20))// please note 0 '' undefined null NaN all return a boolean of false  becouse the value is 0

// equality 
//     == allow coercion
//     ===Does not allow coercion

// const var1 =10
// const var2 ='10'

// console.log(var1 == var2)
// console.log(var1 === var2)

// conditional Statements
//     if 
//     else 
//     elseif
//     switch