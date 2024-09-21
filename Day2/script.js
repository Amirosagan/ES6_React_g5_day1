document.writeln(`<h1 style="text-align:center"> ES6 Day2 </h1>`)

/**
 * Asynchrounous code Execution in memory
 * promise => then , catch   && async, await
 * oop in ES6
 */

// var x=10;
// var y =15;
// var z=20;
// console.log(x);
// console.log(y);
// console.log(z);


/*** synchrounous  (line by line => (stack)) , Asynchrounous  */
// function print()
// {
//     console.log("first");         
//           second()
//     console.log("third");         
    
// }
// function second() {
//     console.log("second");  
// }
// print()
// function print()
// {
//     console.log("first");         
//           second()
//     console.log("third");        
// }
// function second() {
//     console.log("before set TimeOut");
//      var x;
//    setTimeout(() => {
//     x=15;
//     console.log(x);
    
//     console.log("second");
//    }, 2000);
//    console.log(x);
//    console.log("after Set Time out");

// }
// print()   // first , before setTime out , undefined , after setTime out, third, 15,second   


// let interval=setInterval(() => {
//     console.log("hello");
    
// }, 1000);
// setTimeout(() => {
//     clearInterval(interval)
// }, 2000);


// setTime => call back Hell => promises



// function great(myFunc){
//     myFunc()
// }

// great (function (){
//     console.log("hello");
    
// })
// function print(x)
// {
//     console.log("x : " ,x);
    
// }

// print(5)

// function great(myFunc){
//     myFunc("ayaat","adel")
// }

// great (function (a,b){
//     // console.log("hello");
//     console.log(a);  // ayaat 
//     console.log(b);   // adel 
// })
// function great(myFunc){
//     myFunc
//     (
//         function(){console.log(" function 1 a");
//     },
//     function(){console.log( " functio 2 b");
//     }
// )
// }

// great (function (a,b){
    
//     // console.log(a);    //function(){console.log("a");
//     // console.log(b);    // function(){console.log("b");

//     a()
//     b()
// })



// var promise=new Promise(function (x,y){
//     // console.log(x);// function
//     // console.log(y);  // function
//     // x()
//     y()
// })
// console.log(promise);

/**
 * pending => still execute
 * fullfilled => success   => then
 * reject => failed        => catch
 * 
 * ==============> then   catch
 */


// promise
// .then(()=>{
//    console.log("success");
   
// })
// .catch(()=>{
// console.log("failed");

// })



//                                 // success  // failed
// var promise =new Promise(function (resolve,reject) {
//     // resolve("ayaat")
//     // var users=[100,200,300]
//     // var users=[]
//     var users;
//     if(users)
//     {
//         resolve(users)
//     }else{

//         reject("Error on getting Data")
//     }

// })

// promise
// // success
// .then((data)=>{
//     console.log(data);
// })
// // failed
// .catch((error)=>{
//     console.log(error);
// })

// function getUsersId()
// {
//                                     // success  // failed
// var promise =new Promise(function (resolve,reject) {
//     // resolve("ayaat")
//     // var users;
//     var users=[100,200,300]   
//     // var users=[]
//     if(users)
//     {
//         resolve(users)   // then
//     }else{

//         reject("Error on getting Data")  // catch
//     }

// })
// return promise

// }

// // console.log( getUsersId());  // promise

// getUsersId()
// .then((data)=>{
// console.log(data);

// })
// .catch((error)=>{
// console.log(error);

// })

// // get user data => get user details


// function getUserDetails(userId)
// {
//     var promise =new Promise(function (resolve,reject) {
//         var user={
//             id:userId,
//             name:"ayaat",
//             address:"cairo"
//         }
//         if(user)
//         {
//             resolve(user)   // then
//         }else{
//             reject("Error On getting User Details Data")  // catch
//         }
//     })
// return promise
// }
// getUserDetails(5)
// .then((user)=>{
// console.log(user);

// })
// .catch((error)=>{
//     console.log(error);
    
// })

// getUsersId()
// .then((users)=>{  // [100,200,300]  users[0]=>100   

// return getUserDetails(users[0]) // user DEtails for id // promise => then catch
// .then((user)=>{
// console.log(user);

// })
// .catch((error)=>{
// console.log(error);

// })
// })


/****************   async , await */

// async function execute()
// {
//     try {
//         let users= await getUsersId();  //[100,200,300]
//         // console.log(users);
//         let UserData= await getUserDetails(users[0])
//         console.log(UserData);
        
//     } catch (error) {
//         console.log(error);
        
//     }
  
// }
// execute()

// real api
//https://jsonplaceholder.typicode.com/
//https://fakestoreapi.com/

// let response =fetch("https://jsonplaceholder.typicode.com/users")
// console.log(response);


// fetch("https://fakestoreapi.com/products?limit=5")  // fake api
// fetch("https://jsonplaceholder.typicode.com/users")  // json place holder
// .then((response)=>{
// // console.log(response);
// return response.json()  // promise

// }).then((data)=>{
// console.log(data);
// data.forEach(element => {
//     document.writeln(`<h2> ${element.id}  </h2>`)
//     document.writeln(`<h2> ${element.username}  </h2>`)
//     document.writeln(`<h2> ${element.company.name}  </h2>`)
//     document.writeln(`<hr>`)
// });
// // document.writeln(`<h2> ${data[0].id}  </h2>`)
// // document.writeln(`<h2> ${data[0].username}  </h2>`)
// // document.writeln(`<h2> ${data[0].company.name}  </h2>`)

// })
// .catch((error)=>{
//    console.log(error);
   
// })


// async function execute()
// {
//     let response= await fetch("https://jsonplaceholder.typicode.com/users")
//     // console.log(response.json());
//     let usersData=await  response.json()
//     // console.log(usersData);
//     usersData.forEach(element => {
//     document.writeln(`<h2> ${element.id}  </h2>`)
//     document.writeln(`<h2> ${element.username}  </h2>`)
//     document.writeln(`<h2> ${element.company.name}  </h2>`)
//     document.writeln(`<hr>`)}
// )
// }
// // });
    
    

// execute()


/** procedural programming =>
 * oop  => inheritance , polymorphism , abstraction
 */


/** oop=> object oriented programming => way for writing code
// object  => instance of class , class => structure , blue print
*/

// let person={
//     id:1,
//     name:"ayaat",
//     age:24
// }

// let user={
//     name:"aml",
//     age:20,
//     address:"cairo"

// }


/** c++ => function className  , php => _construct */

// class Person{
//     // name="ayaat"
//     // age=24
//     // address="cairo"
//     // name
//     // age
//     // address

//     constructor(name="",age="",address="")
//     {
//     // console.log(name);
//     // console.log(age);
//     // console.log(address);
//     // refere on object
//      this.name=name;
//      this.age=age;
//      this.address=address;
        
//     }
//     print()
//     {
//         console.log("hello");
        
//     }
// }




// let p1=new Person("ayaat",24,"cairo")
// // p1.name="aml"
// let p2=new Person("nada",27,"cairo")
// p2.print()
// // p2.name="nada"
// console.log(p1);
// console.log(p2);





// /**** inheritance  => الوراثه */
// // parent => super class
// class Person{
//     #id  // private
// constructor(id,name="",age="", address="")
// {
//     this.#id=id
//     this.name=name;
//     this.age=age;
//     this.address=address
// }
// get getId()
// {
//     return this.#id;
    
// }
//  set setId(value)
// {
//     this.#id=value

// }

// print()
// {
//     console.log(this.name);
//     console.log(this.age);
//     console.log(this.address);
    
// }
// }

// child , sup class
// class User extends Person{
//     constructor(name,age, address,email="")
//     {
//         super(name,age,address);
//         this.email=email
//     }
//     print()
// {
//     console.log(this.name);
//     console.log(this.age);
//     console.log(this.address);
//     console.log(this.email);
// }
// }
// let p1=new Person(5,"nada",25,"menoufia")
// let u1=new User("ayaat",25,"menoufia","ayaat@gmail.com")
// // console.log("print in person");

// // p1.print()
// // p1.setId(10)
// // console.log(p1.getId());

// p1.setId=15;
// console.log(p1.getId);

// console.log('*********************************');
// console.log("print in  user");
// u1.print()


/********************   Abstract class */
class Shape // circle , rectangle
{ 
    area(){

    };

}

// abstract class => 

class Rectangle extends Shape{

}
// abstract calSS => class can be inherite , can't take object from it 
// finction may have implementation , may doesn't have any implementation

class Person{
    constructor(name,age)
    {
        if (this.constructor===Person) {
            throw  "can't take an object from abstract class"
        }
        this.name=name
        this.age=age
    }
    display()
    {
        throw "Method is not emplement";
    }
}

class User extends Person{
    display()
    {
        console.log("extends function");
        
    }
}
let p1=new Person("ayaat",25)  // abstract class => error
p1.display();
let u1=new User("ayaat",25)
console.log(u1);
u1.display()






