/*******************************  Admin  Login Function       ***************************************/
function login(){

    var email =  document.getElementById("email").value;
    var password = document.getElementById("password").value;
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
/************************   Validation    **************************/
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(email.length === 0 && password.length === 0 ){
        document.getElementById("box").style.display = "block" 
        document.getElementById("alert").style.backgroundColor = "#f44336";
        document.getElementById("alert").innerHTML= "<strong> Warning!</strong> Please fill All Feilds."  
    
        setTimeout(function(){
            document.getElementById("box").style.display = "none" 
        }, 2000);
    
    }
    else if (!filter.test(email)) {
        document.getElementById("box").style.display = "block"        
        document.getElementById("alert").style.backgroundColor = "#ff9800";
        document.getElementById("alert").innerHTML= "<strong> Warning!</strong> Please fill Email."

        setTimeout(function(){
            document.getElementById("box").style.display = "none" 
        }, 2000);
        return false;
    }
    else if(password.length <= 4){
        document.getElementById("box").style.display = "block"        
        document.getElementById("alert").style.backgroundColor = "#ff9800";
        document.getElementById("alert").innerHTML= "<strong> Warning!</strong> Wrong password."
    
        setTimeout(function(){
            document.getElementById("box").style.display = "none" 
        }, 2000);
    
    }
    
/************************   After Submit     **************************/
    else if(email === "sagar@admin.com" && password === "admin"){
        values = {
            email : email,
            password : password
        }
        localStorage.setItem("Admin_ID",JSON.stringify(values))
        window.location.href = "pages/create.html"
    }

    else if(password !== "admin"){
        document.getElementById("box").style.display = "block"        
        document.getElementById("alert").style.backgroundColor = "#ff9800";
        document.getElementById("alert").innerHTML= "<strong> Sorry!</strong> You are not Admin."
    
        setTimeout(function(){
            document.getElementById("box").style.display = "none" 
        }, 2000);
    }
    


}