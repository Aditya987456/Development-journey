//npx tsc -b

let x: number = 5;

console.log(x)


//----------###   some practice of TS class ------------

//problem-1   greeting func with first name.

function Greeting(firstname:string) {
    console.log('Namaste ', firstname)
}
Greeting("aditya")



//problem-2    sum fuction two number

function Sum(a:number, b:number):number {    //here :number i.e Sum function will return number...
    return (a+b)  
}

const ans=Sum(1,5)
console.log(ans)





//Problem 3 - Return true or false based on if a user is 18+

function ageVerify(age:number):Boolean {    // :boolean after )  means it will return the boolean value
    return age>18?true:false
}

const response=ageVerify(19)
console.log(response)




//Problem 4 - Create a function that takes another function as input, and runs it after 1 second.
    // ****  here fn ka type is ()=>void that means this fn will not take any argu and doesn't returns any val therefore void
    //otherwise if it returning value it it can be any like number, string , boolean...
function delayfunc(fn:()=>void) {
    setTimeout(fn, 1000);
}

delayfunc( function greet() {
    console.log('hello --- jiii')
})