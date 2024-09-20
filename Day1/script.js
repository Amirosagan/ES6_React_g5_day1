document.writeln("<h1 style='text-align:center'> ES Day1 </h1>")


/*** 
 * var let const
 * destrucure
 * rest params
 * different between  primitive data type & refrence data type
 * spread operator
 * default values
 * arrow function
 * string api
 * array api
 */


// var
/**
 * redeclare
 * reAsign
 * hoistiong  => acces varibale before initialization
 * can assign on window object
 * scope  function scope 
 */
// console.log(x);  // undefined 
// var x=5;
// // var x=10;
// // x=15;
// console.log(x);  // 5
// console.log(window.x);  // 5

// function print() {
  
//     for (var index = 0; index < 3; index++) {
 
//          console.log("index in for",index);  // 0,1,2
         
//     }
//     console.log("index out for",index); // 3   => scope function 
// }

// print()

/************************************************************************ */
// let
/**
 * can't redeclare
 * can reasign
 * can't use hoisting  => Cannot access 'variableName' before initialization
 * can't assign on window object
 * scope is block scope  {}
 */

// console.log(x);
// let x=5;
// // let x=10;
// x=10;
// console.log(window.x);


// function print() {
// //   let index;
//     for (let index = 0; index < 3; index++) {
 
//          console.log("index in for",index);  // 0,1,2
         
//     }
//     console.log("index out for",index); // 3   => scope function 
// }

// print()


/****************************************************************** */
// const => ثابت
/**
  * can't redeclare
 * can't reasign
 * can't use hoisting  => Cannot access 'variableName' before initialization
 * can't assign on window object
 * scope is block scope  {}
 */
// pi=22/7  , 3.14 
// console.log(PI);
// const PI=3.14;
// // PI=5;
// console.log(PI);
// const PI=5;



// function print() {
// //   let index;
// const index=10;
   
//     console.log("index out for",index);  
// }
// console.log("index out for",index); 

// print() 

/**********************   Destructure                */

// let arr=[1,2,3,"ayaat","mohammed","aml"]
// let x=arr[0];
// let y=arr[1];

// let [x,y]=[1,2,3]
// let [x,y]=arr   // destructure
// let [,,,x,,y]=arr
// console.log("x is : ", x);  //1
// console.log("y is : ", y);  //2



// function useArr()
// {
//     return [1,2,3,"ayaat","mohammed","aml"]
// }
// // console.log(useArr());
// // let result=useArr();
// // console.log(result);
// let [x,y]=useArr()
// // let [x,y]=[1,2,3,"ayaat","mohammed","aml"]
// console.log("x is : ", x);  
// console.log("y is : ", y);  




// function useArr(temp)
// {
//     return [temp,function()
//         {
//             console.log("welcome");
            
//         }
//     ]
// }
// var [x,y]=useArr(15)
// y()

// // var y=function()
// // {
// //     console.log("welcome");
    
// // }
// console.log("x is : ", x);   //15
// console.log("y is : ", y);    //function()


/////////////////////////  destructure on object


// object => accsess => key  : value
// let person={
//     name:"ayaat",
//     age:24,
//     address:"menoufia"
// }
// console.log(person);
// console.log(person.name);

// let x=person.name;
// let y=person.age;

// console.log("x is : ", x);   
// console.log("y is : ", y); 

// let{name:x,age:y}=person;
// let{name:x,age:y}={
//     name:"ayaat",
//     age:24,
//     address:"menoufia"
// };

// boject key:variable
// let{name:name,age:age}=person;  // syntax sugar
// let{name,age}=person;

// console.log("x is : ", name);   
// console.log("y is : ", age); 


// premitive  data type  // int
// let x=5;    
// // let y=x;   //5
//  x=10;   
// console.log("x is : ", name);   
// console.log("y is : ", age);  //5



// refrence data type  => array ,object

// let x=[1,2]
// let y=x;

// x.push("ayaat")
// y.push("aml")
// console.log("x is : ", x);    [1,2,"ayaat","aml"]
// console.log("y is : ", y);    [1,2,"ayaat","aml"]

// let x=[1,2]
// let y=[];

// for (let index = 0; index < x.length; index++) {
//     y[index] = x[index];
    
// }
// x.push("ayaat")
// y.push("aml")
// console.log("x is : ", x);    
// console.log("y is : ", y)


///////////////////////////////////   spread operator
// let x=[1,2]
// let y=[...x,"nada"]
// // x.push("ayaat")
// // y.push("aml")
// console.log("x is : ", x);    
// console.log("y is : ", y)

// // let person={name:"ayaat",age:24}
// // let human=person
// // human.address="cairo"
// // person.id="5";
// // console.log(human);
// // console.log(person);
// let person={name:"ayaat",age:24}
// let human={price:5000,...person}
// human.address="cairo"
// person.id="5";
// console.log(human);
// console.log(person);


/**********************   Default values */

// function print(x=5,y=6,...w)  // reset params
// {
//     console.log("x : ",x);
//     console.log("y : ",y);
//     console.log("w : ",w);
    
    
// }

// print(2,1,15,10,"ayaat")



/*******************  Arrow function */

// regular function => statement function , expression function , arow function

// function print(x=5,y=6,...w)  // regular function
// {
//     console.log("x : ",x);
//     console.log("y : ",y);
//     console.log("w : ",w);
    
    
// }

// print(2,1,15,10,"ayaat")


// let result=function sum(x,y)
// {
//     return x+y;
// }

// console.log(result(5,6));
// let result= (x=1,y=2)=>{
//     return x+y;
// }

// console.log(result(5,6));
// let result= (x=1,y=2)=>{
//     return x+y;
// }

// console.log(result());



// let sayHello=()=>{
//     // console.log("hello");
//     return("hello");
    
// }
// // console.log(sayHello());

// let sayHello=()=> "hello";
// console.log(sayHello());


// let sqaure=(x)=>{
//     // console.log("hello");
//     return x+x;
    
// }

// let square=(x)=>x+x;
// let square=x=>x+x;

// console.log(square(12));

// // let sayHello=()=> "hello";
// let sayHello=_=> "hello";
// console.log(sayHello());


// console.log(this);


/****************************   string api */

/** 
 * index of   // return index of charcter
 * char at   // take=> number (index of character)
 * start with  // check string start with value
 * end with // check string end with value
 * includes  //  check string iclude value
 
*/


// let text="hello from iti"
// // console.log(text.indexOf('h'));
// // console.log(text.indexOf('o'));
// // console.log(text.charAt(60));
// // console.log(text.startsWith("iti"));
// // console.log(text.endsWith("iti"));
// console.log(text.includes("iti"));
// console.log(text.includes("f"));




/***********   array api */

// for of , for in , forEach
// let  arr=[10,30,25,27]
// function findElement(item,index,arr) {
//     console.log("item:",item);
//     console.log("index:",index);
//     console.log("arr:",arr);
    
//   if(item>25)
//   {
//     console.log(item ,"Greater than 25");
    
//   }
//     // for (let index = 0; index < arr.length; index++) {
//     //     if(arr[index]>25) return arr[index]
        
//     // }
// }
// for (let index = 0; index < arr.length; index++) {
//     findElement(arr[index],index,arr)
//     console.log("*******************************************");
    
    
// }
// let input=prompt("enter your data")

// let arr=["ayaat","nada"]
// arr.find((item)=>{
// //   if(item==input)
// //   {
// //     console.log("found");
    
// //   }
// //   else{
// //     console.log("not found");
    
// //   }
// })

// inculdes

// let input=prompt("enter your data")

// let arr=["ayaat","nada"]
// arr.forEach((element,index,arr) => {
//     // if(element==input)
//     // {
//     //     console.log("found");
        
//     // }else{
//     //     console.log("not found");
        
//     // }

//     console.log(element);
//     console.log(index);
//     console.log(arr);
    
// });

// let arr=["ayaat","nada"]
let arr=[25,15,30]
// let result =arr.map((item,index,arr)=>{
//     // console.log(item);

//     // console.log(index);
//     // console.log(arr);
//     // return   item=="ayaat"?item:"not found"
//    if(item>15)
//    {
//     return item
//    }
// })
// let input=prompt("enter your data")

// let arr2=["ayaat","nada"]
// let result =arr2.filter((item,index,arr)=>{
//     // console.log(item);

//     // console.log(index);
//     // console.log(arr);
//     // return   item=="ayaat"?item:"not found"
//    if(item==input)
//    {
//     return item
//    }
// // return   item==input?item
    
// })
// console.log(result);

//******  forEach , map ,filter  => iteration array
//for => void
// map => return array => length main array=> condition => false => un defined
// filter => return array => value => true => condition



/**********************  task */

let products=[
    {
        name:"lap top dell ram",
        price:30000 ,
        description:"laptop dell core i5 hard ssd 1 tera"
    },
    {
        name:"lap top mac ",
        price:50000 ,
        description:"laptop hp core i5 ram 32"
    },
    {
        name:"lap top hp",
        price:40000 ,
        description:"laptop hp core i7 hard ssd .5 tera"
    }
]

///  table => name  , price , description 