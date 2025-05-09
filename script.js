const passwordinp = document.getElementById("password");
const button = document.getElementById("buttononclick");
const copy = document.getElementById("copy");
const length = 12;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialChars = "!@#$%^&*()_+-={}:<>?";
const allChars = uppercase + lowercase + numbers + specialChars;
function passwordgenerator(){
    let generatedpassword ="";
    generatedpassword += uppercase[Math.floor(Math.random()*uppercase.length)];
    generatedpassword += lowercase[Math.floor(Math.random()*lowercase.length)];
    generatedpassword += numbers[Math.floor(Math.random()*numbers.length)];
    generatedpassword += specialChars[Math.floor(Math.random()*specialChars.length)];

    while(generatedpassword.length<length){
        generatedpassword += allChars[Math.floor(Math.random()*allChars.length)];

    }
    passwordinp.value=generatedpassword;
    console.log(generatedpassword);
}
 button.onclick=()=>{
     passwordgenerator();
     alert("dont share your password with anyone to avoid cyber attacks!!")
};
copy.onclick = ()=>{
    navigator.clipboard.writeText(passwordinp.value);
    alert("copied successfully")
}
