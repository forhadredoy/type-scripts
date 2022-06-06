// // // // // // // // // //console.log("hello world")
// // // // // // // // // //console.log('hello i amco');

// // // // // // // // // //var arr =[ 44 ,true,"true"]
// // // // // // // // // //arr.push(0);
// // // // // // // // // //console.log(arr)
// // // // // // // // // //function functionName( a:number, b:number) {
// // // // // // // // //     //console.log (a*b)

// // // // // // // // // //}
// // // // // // // // // //functionName(2,3)

// // // // // // // // // //let a :number | string ;
// // // // // // // // // //a = 88;
// // // // // // // // // //a = "name"
// // // // // // // // // //console.log (a)


// // // // // // // // // //let object : {name: string
// // // // // // // // //               //rool: number
// // // // // // // // //               //age: number
// // // // // // // // //             //}
// // // // // // // // // //object =[1,2,3]
// // // // // // // // // //console.log(object)
// // // // // // // // // //var hridoy =(a:string, b:string, c?:string) =>{
// // // // // // // // //  // console.log(`the name of our country ${a} and i love him ${b}`)
// // // // // // // // //   //console.log(c)
// // // // // // // // // //}
// // // // // // // // // //console.log('hello world')
// // // // // // // // // //type stringornumber = string | number
// // // // // // // // // //type user1 = { name:string; age: number}
// // // // // // // // // //const func = (id:stringornumber,user:user1) => {
// // // // // // // // // //console.log (`user id is  ${id} and name is  ${user.name}  and age is ${user.age}` )
// // // // // // // // // //} 
// // // // // // // // // //let func :( a:number , b:number,c:string) =>void;

// // // // // // // // // //func= ( x:number ,y:number,z:string)=> {
// // // // // // // // //   //if (z == "ins" ){
// // // // // // // // //     //console.log(x+y);
// // // // // // // // //   //}
// // // // // // // // //   //else{
// // // // // // // // //    // console.log(x-y);
// // // // // // // // //   //}


// // // // // // // // // //}
// // // // // // // // // //func( 2,3,"4")
// // // // // // // // // class hridoy{
// // // // // // // // //   public name : string;
// // // // // // // // //    private rool : number;
// // // // // // // // //    private  age :number;
// // // // // // // // //   constructor( n: string, a:number ,r: number){
// // // // // // // // //     this.name =n;
// // // // // // // // //     this.rool =r;
// // // // // // // // //     this.age = a;
    
// // // // // // // // //     }
    
// // // // // // // // //     funck () {
// // // // // // // // //       console.log(`${this.name} from ${this.rool}`);
// // // // // // // // //   }
  
// // // // // // // // // }
// // // // // // // // // var hello = new hridoy("redoy", 45, 940926);
// // // // // // // // // var hello1= new hridoy ("hridoy", 46, 9000);


// // // // // // // // // console.log(hello1.name)
// // // // // // // // // hello.name='mohiful'
// // // // // // // // // hello1.age =99;

// // // // // // // // // const hridoy1 : hridoy[]=[]
// // // // // // // // // console.log(hridoy1.push(hello))
// // // // // // // // // console.log(hello);
// // // // // // // // // console.log(hello1)
// // // // // // //access modifier...
// // // // // // // // class hridoy{
  
// // // // // // // //   constructor( 
// // // // // // // //     public name : string,
// // // // // // // //     private rool : number,
// // // // // // // //     public age :number,){}
    
// // // // // // // //     funck () {
// // // // // // // //       console.log(`${this.name} from ${this.rool}`);
// // // // // // // //   }
  
// // // // // // // // }
// // // // // // // // var hello = new hridoy("redoy", 45, 940926);
// // // // // // // // var hello1= new hridoy ("hridoy", 46, 9000);


// // // // // // // // console.log(hello1.name)
// // // // // // // // hello.name='mohiful'
// // // // // // // // hello1.age =99;

// // // // // // // // const hridoy1 : hridoy[]=[]
// // // // // // // // console.log(hridoy1.push(hello))
// // // // // // // // console.log(hello);
// // // // // // // // console.log(hello1)
// // // // //  import { hridoy} from "./classes/hridoy.js";
// // // // // import { ishridoy } from "./interfaces/ishridoy.js";

// // // // //  let hello:ishridoy;

// // // // //  hello = new hridoy("redoy", 22, 940926)

// // // // //  var hello1 = new hridoy("ridoy", 46, 9000);

// // // // //  const ridoys1 :ishridoy[]=[]

// // // // // console.log(hello);
// // // // //console.log(hello1);

// // // // // interface linkup{
// // // // //     width:number,
// // // // //     height: number,
// // // // // }

// // // // // function myFunc (squre : linkup) 
// // // // // {

// // // // //     let width = squre.width
// // // // //     let height = squre.height
    
    
// // // // //     }

// // // // // let mynumber = {
// // // // //     width : 30,
// // // // //     height : 20,
// // // // //     number3 : 34,
// // // // // }
// // // // // myFunc (mynumber);

// // // // //generics
// // // // function myFunction  <T extends{
// // // //     rool :number;
// // // //     age :number;
// // // // }>( obj: T) {
// // // //     let id= 400*700;
// // // //     return{...obj, id}


// // // // }
// // // // let user =myFunction({
// // // //  rool :45,
// // // //  age :940926,
// // // //  name : "hridoy"

// // // // })
// // // interface aPiresponse <T> {
// // //     id: number;
// // //     password:string;
// // //     username: string;
// // //     date:T;
// // // }
// // // const response1: aPiresponse <string>={

// // //     id :1111,
// // //     password: "yyeehh44hh",
// // //     username : "soyad",
// // //     data :"redoy"
// // // }
// // enum response { hridoy,mohiful,foysal,bipra }
// // enum date { year ,month ,day,hour,minutes,second }

// //  interface aPiresponse <T> {
// //      id: number;
// //     password:string;
// //     username: string;
// //     nam: response;
// //     time :date;
// //      data:T;
// //  }
// //  const response1: aPiresponse <string>={

// //   id :1111,
// //     password: "yyeehhhh",    
// //     username : "soyad",
// //     nam: response.bipra,
// //     time :date.minutes,
// //     data: "redoy"
    
// //       }
// //       console.log(response1);
// //tupules
// let tupules = [ "hridoy",940926,{a:6}];
// let tupules1 :[boolean, object,number,string,] = [true,{a:90},88,"hello world"]
// console.log(tupules1);










