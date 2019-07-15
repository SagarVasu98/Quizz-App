/************************   Function Signup    **************************/

function signup(){
    var email =  document.getElementById("email").value;
    var password = document.getElementById("password").value;
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    /************************   Validation    **************************/
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(email.length === 0 && password.length === 0 ){
        document.getElementById("alert").style.backgroundColor = "#f44336";
        document.getElementById("alert").innerHTML= "<strong> Warning!</strong> Please Fill All Feilds."
        setTimeout(function(){
            document.getElementById("alert").style.backgroundColor = "#4CAF50";
            document.getElementById("alert").innerHTML = " <strong >Welcome!</strong> Best Wishes For You." 
        }, 2000);
    
    }
    else if (!filter.test(email)) {
        document.getElementById("alert").style.backgroundColor = "#ff9800";
        document.getElementById("alert").innerHTML= "<strong> Warning!</strong> Please fill Email."

        setTimeout(function(){
        document.getElementById("alert").style.backgroundColor = "#4CAF50";
        document.getElementById("alert").innerHTML = " <strong >Welcome!</strong> Best Wishes For You." 
        }, 2000);
        return false;
    }

else if(password.length <= 4){
    document.getElementById("alert").style.backgroundColor = "#ff9800";
    document.getElementById("alert").innerHTML= "<strong> Warning!</strong> Wrong password."

    setTimeout(function(){
        document.getElementById("alert").style.backgroundColor = "#4CAF50";
        document.getElementById("alert").innerHTML = " <strong >Welcome!</strong> Best Wishes For You." 
    }, 2000);
}
else{
/************************   All Sigup Users saved to Local Storage    **************************/

var users = localStorage.getItem("users");
    console.log(users);

    var userExist= false;

    if(users === null){
        users = [];
    }
    else{
        users = JSON.parse(users);
        console.log(users);
    }
    
    var user = {
        email :email,
        password : password,
    }
    for(var i=0; i < users.length; i++){
        if(users[i].email===email){
            userExist = true;
        }

    }
    if(userExist === true){
        message.innerHTML = "User Already Exists!";
        setTimeout(function(){
            message.innerHTML = "";
            document.getElementById("form1").style.display = "none"
            document.getElementById("form").style.display = "block";
        },800)
        
    }
    else{
        message.innerHTML = "User Sign up Succesfully"
        setTimeout(function(){
            message.innerHTML = "";
            document.getElementById("form1").style.display = "none"
            document.getElementById("form").style.display = "block";
        },1000)
        users.push(user)
        users = JSON.stringify(users)
        localStorage.setItem("users",users)
        document.getElementById("form1").style.display = "none"
        document.getElementById("form").style.display = "block"

    }
}
}

/************************   Function Login    **************************/

function login(){
    var email =  document.getElementById("email1").value;
    var password = document.getElementById("password1").value;
    console.log(email)
    var message1 = document.getElementById("message1")
    var users = localStorage.getItem("users");
    if(users === null){
        users = [];
    }
    else{
        users = JSON.parse(users);
        console.log(users);
    }
    var  userauthenitic = false;
    for(var i=0; i < users.length; i++){
        if(users[i].email===email && users[i].password === password){
            userauthenitic = true;
        }   

    }

    if(userauthenitic === false){
        message1.innerHTML = "Login Failed";
        setTimeout(function(){
            message1.innerHTML = "";
        },1000)

    }
    else{
        message1.innerHTML = "Login Succesfully";
        setTimeout(function(){
            message1.innerHTML = "";
        },1000)
    var user1 = {
        email :email1.value,
        password : password1.value,
    }
    localStorage.setItem("Single_User",JSON.stringify(user1))
    window.location.href = "quiz.html"
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

}
}

function login1(){
    document.getElementById("form1").style.display = "none"
    document.getElementById("form").style.display = "block"

}

function signup1(){
    document.getElementById("form1").style.display = "block"
    document.getElementById("form").style.display = "none"

}