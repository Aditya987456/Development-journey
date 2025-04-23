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
    console.log('hello --- jiii 1 sec baad wala hu.')
})


//$$---------- ************  Interfaces  *************-------------------

console.log('------------------------------interfaces---------------------------------')
//assignment -2 also.

interface User{
    name:string,
    age:number,
    email:string,
    address?:{                    //making address optional here.
        city:string,
        pincode:number
    }
}

function checkAge(person:User):Boolean {
    return person.age>18? true: false;
}

let user:User={
    name:"Aditya raj",
    age:21,
    email:"adityarajxdev"
}


//now checking age...

const output=checkAge(user)
console.log('can vote : ', output)




//####################### ------- Implements concept -------- ###############
console.log('------------------------------interfaces -> implements with class---------------------------------')
interface Person{
    name:string;
    age:number;
    greet(phrase:string):void
    //greeet:(phrase:string)=>void      //both greet and greeet is same
}

class Employee implements Person{
    name:string;
    age:number;

    constructor(n:string, a:number){
        this.age=a
        this.name=n
    }

    greet(phrase: string): void {
        console.log(`${phrase} ji ${this.name}`)
    }

}

const myobj=new Employee("buttan", 21)
console.log(myobj.age)
console.log(myobj.name)
myobj.greet("Namaste")



console.log('------------------------------ Inheritence in class : JS concept ---------------------------------')
//####################### ------- Inheritence concept--> like super(), extends like things... -------- ###############

/*


//js concept---  only in .js file i just written here for revise

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    Speak() {
        console.log(`hii janwar ${this.name} jii , Your age is ${this.age}`);
    }
}

//inheriting the animal class in dog class i.e dog is child class and animal is parent class...

class Dog extends Animal {
    constructor(name, age, color) {
        super(name, age); //calling the parent constructor i.e baap to hona chahiya tabhi beta hoga...
        this.color = color;
    }

    bark() {
        super.Speak();  //calling speak of parent in child class
        console.log(
            `This dog name is ${this.name} and age is ${this.age} also his color of skin is ${this.color}`,
        );
    }
}

//now using the objjj

const objpaglu = new Dog("moti", 45, "red");
console.log(objpaglu.age);
objpaglu.bark();
console.log(objpaglu.color);
console.log(objpaglu.name);
objpaglu.Speak();
//console.log(objpaglu.Speak)



*/





console.log('------------------------------ Abstract class ---------------------------------')

abstract class Vehicle{

    abstract drive():void   //must be overridden by those who extends it...

    greet(): void {
        console.log(`Hello, my name is ${this.name}.`);
      }

    abstract name:string
    
}



class Bike extends Vehicle{

    //dono abstract wala use kar liya ab greet() use nahi kare fir bhi koi error nahi dega...
    drive(): void {
        console.log('abstract wala drive function')
    }

   
    name='splender'   //i know iska use nahi ho raha hai but abstract me hai to we have to overridden it...
    constructor(n:string){
        super()
        this.name=n
    }

    bikename():void{
        console.log(`Mt bike name is ${this.name}`)
    }
}


const abObj=new Bike("hero")
abObj.bikename()