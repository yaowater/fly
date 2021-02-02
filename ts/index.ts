let arr:number[]=[1,2,3]
console.log("arr",arr);

let arr2:string[]=["a","bb","ccc"]
console.log("arr2",arr2);

let arr3:Array<number>=[1,2,3,4]
console.log("arr3",arr3);

let arr4:Array<string>=["a","2","c","4"]
console.log("arr4",arr4);

// 元组类型（tuple）
let arr5:[string,number,boolean]=["ts",3.18,true]
console.log("arr5",arr5);

enum Flag {success=1,error=-1}
let f:Flag=Flag.success
console.log("f",f);
console.log("Flag.error",Flag.error);

enum Color {red,blue=5,orange}
let c:Color=Color.blue
console.log("c",c);
console.log("Color.orange",Color.orange);


