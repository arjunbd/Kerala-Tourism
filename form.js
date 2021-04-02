let email=document.getElementById("inputEmail3");
let pass=document.getElementById("inputPassword3");
let error1=document.getElementById("error1");
let error2=document.getElementById("error2");
let regexp1=/^([a-zA-Z0-9\.-]*)@([a-zA-Z0-9\-]*).([a-z]{2,3})(.[a-z]{2,3}?)$/ /*email regexp*/
let regexp2=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])([a-zA-Z0-9!@#$%^&*]{8,25})$/ /*password regexp*/
let regexp3=/^([a-zA-Z]{3,25})$//*name regexp*/
let regexp4=/^(?=.*[0-9])([a-zA-Z0-9]{8,25})$//*username regexp */
let regexp5=/^\d{3}[\s.-]?\d{3}[\s.-]?\d{4}$/
let fname=document.getElementById("Firstname");
let lname=document.getElementById("Lastname");
let username=document.getElementById("Username");
let mail=document.getElementById("email");
let password=document.getElementById("Password");
let rpassword=document.getElementById("Password1");
let fnameerror=document.getElementById("fnameerror");
let lnameerror=document.getElementById("lnameerror");
let emailerror=document.getElementById("emailerror");
let usererror=document.getElementById("usererror");
let pass1error=document.getElementById("pass1error");
let pass2error=document.getElementById("pass2error");
var strength = {
    0: "Worst",
    1: "Bad",
    2: "Weak",
    3: "Good",
    4: "Strong"
  }
  var strengthcolor={
      0:"red",
      1:"red",
      2:"yellow",
      3:"orange",
      4:"green"
  }
var text = document.getElementById('password-strength-text');
password.addEventListener('input', function() {
    var val = password.value;
    var result = zxcvbn(val);
   console.log(result.score);
    if (val !== "") {
        text.style.color=strengthcolor[result.score];
      text.innerHTML = "Strength: " + strength[result.score]; 
    } else {
      text.innerHTML = "";
    }
  });
function validate(){
    if (regexp1.test(email.value)){
        email.style.borderColor="white";
        error1.innerHTML ="";
        if(regexp2.test(pass.value))
            {
                pass.style.borderColor="white";
                error2.innerHTML="";
                return true;}
        else{
                error2.style.color="red";
                error2.innerHTML="Incorrect password";
                pass.style.borderColor="red";
                return false;
        }
    }
    else{
        error1.style.color="red";
        error1.innerHTML = "Incorrect email";
        email.style.borderColor="red";
        if(regexp2.test(pass.value))
            {
                pass.style.borderColor="white";
                error2.innerHTML="";
                return false;
            }
        else{
                error2.style.color="red";
                error2.innerHTML="Incorrect password";
                pass.style.borderColor="red";
                return false;
        }
    }
}
function Fnvalidate(){
    if(regexp3.test(document.getElementById("Firstname").value)){
        document.getElementById("Firstname").style.borderColor="white";
        document.getElementById("fnameerror").innerHTML="";
        return true;
    }
    else{
        document.getElementById("Firstname").style.borderColor="red";
        document.getElementById("fnameerror").style.color="red";
        document.getElementById("fnameerror").innerHTML="incorrect Firsttname format";
        return false;
    }
}
function Lnvalidate(){
    if(regexp3.test(document.getElementById("Lastname").value)){
        document.getElementById("Lastname").style.borderColor="white";
        document.getElementById("lnameerror").innerHTML="";
        return true;
    }
    else{
        document.getElementById("Lastname").style.borderColor="red";
        document.getElementById("lnameerror").style.color="red";
        document.getElementById("lnameerror").innerHTML="incorrect Lastname format";
        return false;
    }
}
function Evalidate(){
    if(regexp1.test(document.getElementById("Email").value)){
        document.getElementById("Email").style.borderColor="white";
        document.getElementById("emailerror").innerHTML="";
        return true;
    }
    else{
        document.getElementById("Email").style.borderColor="red";
        document.getElementById("emailerror").style.color="red";
        document.getElementById("emailerror").innerHTML="incorrect mail format";
        return false;
    }

}
function Phvalidate(){
    
    if(regexp5.test(document.getElementById("Phone").value)){
        document.getElementById("Phone").style.borderColor="white";
        document.getElementById("phonerror").innerHTML="";
        return true;
    }
    else{
        document.getElementById("Phone").style.borderColor="red";
        document.getElementById("phonerror").style.color="red";
        document.getElementById("phonerror").innerHTML="incorrect phone format";
        return false;
    }
}
function Uvalidate(){

    if(regexp4.test(username.value)){
        username.style.borderColor="white";
        usererror.innerHTML="";
        return true;
    }
    else{
        if( document.getElementById("Username").value==""){
            username.style.borderColor="white";
            usererror.style.color="red";
            usererror.innerHTML="";
        }
        else{
        username.style.borderColor="red";
        usererror.style.color="red";
        usererror.innerHTML="incorrect username format";
        return false;
        }
    }
}
function Pvalidate(){ 
        if(regexp2.test(password.value))
        {   
            pass1error.innerHTML="";
            password.style.borderColor="white";
            if(password.value==""&&rpassword.value==""){
            pass2error.innerHTML = "";
            password.style.borderColor="white";
            rpassword.style.borderColor="white";
            }
            else if (password.value == rpassword.value) {
            pass2error.style.color = 'green';
            pass2error.innerHTML = 'matching';
            password.style.borderColor="white";
            rpassword.style.borderColor="white";
            return true;
            } else {
            pass2error.style.color = 'red';
            pass2error.innerHTML = 'not matching';
            password.style.borderColor="red";
            rpassword.style.borderColor="red";
            }
      }
      else{
        if(password.value==""&&rpassword.value==""){
            password.style.borderColor="white";
            rpassword.style.borderColor="white";
            pass1error.innerHTML="";
            pass2error.innerHTML="";
            }
            else{
          pass1error.style.color="red";
          pass1error.innerHTML="Wrong password format";
          password.style.borderColor="red";
          return false;
            }
      }
}

function Svalidate(){
    if(Pvalidate()&&Uvalidate()&&Phvalidate()&&Evalidate()&&Fnvalidate()&&Lnvalidate()){
        return true;
    }
    else{
        alert("Please enter all fields correctly");
        return false;
    }
}
