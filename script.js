const button=document.querySelector('#btn');
const otp=document.querySelector('#otp');

// let digit;
const generateOTP=()=>{

const num="0123456789";
 let digit="";
for(let i=0;i<5;i++){
    let random=Math.floor(Math.random()*10)
    digit+=num[random];
    digit+=" ";
}
return digit;
}
// console.log(generateOTP());

const displayOTP=()=>{
    otp.innerText=generateOTP();
}

button.addEventListener('click',displayOTP);