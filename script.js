// const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const usernamePattern = /^[a-zA-Z0-9_]{3,20}$/;
// const email = document.getElementById("email").value.trim();
// const username = document.getElementById("username").value.trim();
// const password = document.getElementById("password").value;
// let val = document.getElementById("f1");
// val.onsubmit(fun);
// function fun(event){
//     if(!email.test(username)) {
//         alert("invalid email address.");
//         return false;
//     }
//     if(password.length < 6) {
//         alert("Invalid Password.");
//         return false;
//     }
//     if (!usernamePattern.test(username)) {
//         alert("Invalid username.");
//         return false;
//     }
//     return true;
// }

 var Rollno = document.getElementById("Roll").value.trim();
      var ourname =document.getElementById("name").value.trim();
      var fname = document.getElementById("fname").value.trim();
      var mobile = document.getElementById("Mobile").value;
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      var city = document.getElementById("City").value;
      var address = document.getElementById("Address").value;
      var student ={
          emailpattern :  /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          namepattern :  /^[a-zA-Z0-9_]{3,20}$/,
          passwordpatten :  /^[a-zA-Z0-9_]{3,20}$/,
        }

      function fun(){
          if(!student.emailpattern.test(email)){
            alert("Invalid email.");
            return false;
          }
        if(!student.passwordpatten.test(password)){
            alert("Invalid Password.");
            return false;
          }
        if(!isNaN(Rollno)){
            alert("Invalid Roll Number.");
            if(Rollno.length > 10){
              alert("Invalid Roll Number.");
            }
        return false;
    }
    
    return true;
}
