let msg: string = "I love Playwright"; 

console.log(msg.length); //21
console.log(msg.indexOf("love"));
console.log("before replace:", msg)
//console.log(msg.replace("Playwright", "AI"))
msg = msg.replace("Playwright", "AI")
console.log("after replace:", msg)

const num:string = "123456789";

console.log(msg.toLocaleUpperCase());
console.log(msg.toLowerCase());
console.log(msg.substring(2,7))

console.log(msg[0]);
console.log(msg.charAt(10));

console.log("msg: ",msg);
let res = msg.split(" ");
console.log("res: " ,res);