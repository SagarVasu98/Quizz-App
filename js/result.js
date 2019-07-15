var user1= localStorage.getItem("Single_User");
    user1 = JSON.parse(user1);
    user1 = user1.email.slice(0,-10);

 document.getElementById("h1").innerHTML = user1.toUpperCase();
 var x = localStorage.getItem("marks");
 x = JSON.parse(x)
 var x1 = localStorage.getItem("information");
 x1 = JSON.parse(x1)

 var total = document.getElementById("h2").innerHTML ="  Quiz Title :" + "<span id = 'title'> "+ x1.name1 + "</span>";
 document.getElementById("marks1").innerHTML = x + "%" ;

if(x >= 50 && x <= 90 ){
    document.getElementById("about").innerHTML = "<strong id = 'strong'> Congrats! </strong> You have Pass the Test"
}
else if( x > 90 ){
    document.getElementById("about").innerHTML = "<strong id = 'strong'> Amazing! </strong> You have Passed with Great Marks"

}
else if( x >= 30  && x <= 40){
    document.getElementById("about").innerHTML = "<strong id = 'strong1'> Sorry! </strong> You have Failed the Test"
}
else if( x <= 20 ){
    document.getElementById("about").innerHTML = "<strong id = 'strong1'> Nibhaga ! </strong> Teen To Saffa Dekhare Chadi"

}

function btn(){
    window.location.href = "user.html"

}


