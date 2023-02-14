//task 1

let salaryOne = prompt('Enter first month salary');
salaryOne = Number(salaryOne)

let salaryTwo = prompt('Enter second month salary');
salaryTwo = Number(salaryTwo)

let sum = salaryOne + salaryTwo

alert("Your salary 2 month is: " + sum + "$")

//task 2

let count =sum;
count ++;

alert("Your have extra bonus! Your total salary was: " + sum + "$" + " It`s increase for 1$ and now it is: "+ count + "$" )

//task 3

// let minimum = 2000

// let salary = count >= minimum

// alert("Will you work next? "+ salary )

//task 4

let minimum = 2000
let more = count >= minimum
let less = count <= minimum
alert( less && ("I`m out ") || more && ("I`m ready to work"))


