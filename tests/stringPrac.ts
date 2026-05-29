//import { clearScreenDown } from "node:readline"

// let str = "naylak"
// let revStr = ""

// for (let i=str.length-1;i>=0;i--){
//     revStr=revStr+str[i]
    
// }
// console.log(revStr)

//palindrome
let palins: string = "tattarrattat"
let revS=""
for (let i=palins.length-1; i>=0; i--){
    revS = revS+ palins[i]
}
    console.log(palins)
    console.log(revS)
    

    if(palins==revS)
        console.log("isPalnidrome")
    else 
        console.log("isNOTPalindrome")
