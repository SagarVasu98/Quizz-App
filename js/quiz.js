/***** Getting Quizz From LocalStorage which is generetd by Admin ***** */
var data = localStorage.getItem("Quiz");
if(data === null){
    data = []
}    
else{
    data= JSON.parse(data);
    console.log(data)
   
}
/***** Marks and Counter for Next Questions ***** */

var count = 0;
var marks = 0;

/***** Creating Ui for Quiz like radio buttons ******/

    var box = document.getElementById("form");
    var p = document.createElement("h1");
    p.setAttribute("id", "q")
    var p_text = document.createTextNode(data[count].question);
    p.appendChild(p_text);
    box.appendChild(p);

/***** For Option 1 ******/
    var ul = document.createElement("ul")
    var li = document.createElement("li");
    var op1 = document.createElement("input")
    op1.setAttribute("type","radio");
    op1.setAttribute("name","ans");
    op1.setAttribute("value",data[count].option1);
    op1.setAttribute("id", 'op1');
    li.appendChild(op1);

    var  span = document.createElement("span");
    span.setAttribute("id", "option1")
    var span_text1 =document.createTextNode(data[count].option1);
    span.appendChild(span_text1);
    li.appendChild(span)
    ul.appendChild(li)
    box.appendChild(ul);

/***** For Option 2 ******/
var ul = document.createElement("ul")
var li1 = document.createElement("li");
var op2 = document.createElement("input")
op2.setAttribute("type","radio");
op2.setAttribute("name","ans");
op2.setAttribute("value",data[count].option2);
op2.setAttribute("id", 'op2');
li1.appendChild(op2);

var  span2 = document.createElement("span");
span2.setAttribute("id", "option2")
var span_text2 =document.createTextNode(data[count].option2);
span2.appendChild(span_text2);
li1.appendChild(span2)
ul.appendChild(li1)
box.appendChild(ul);


/***** For Option 3 ******/
    var ul = document.createElement("ul")
    var li2 = document.createElement("li");
    var op3 = document.createElement("input")
    op3.setAttribute("type","radio");
    op3.setAttribute("name","ans");
    op3.setAttribute("value",data[count].option3);
    op3.setAttribute("id", 'op3');
    li2.appendChild(op3);
    var  span3 = document.createElement("span");
    span3.setAttribute("id", "option3")
    var span_text3 =document.createTextNode(data[count].option3);
    span3.appendChild(span_text3);
    li2.appendChild(span3)
    ul.appendChild(li2)
    box.appendChild(ul);
   

/***** For Option 4 ******/
    var ul = document.createElement("ul")
    var li3 = document.createElement("li");
    var op4 = document.createElement("input")
    op4.setAttribute("type","radio");
    op4.setAttribute("name","ans");
    op4.setAttribute("value",data[count].option4);
    op4.setAttribute("id", 'op4');
    li3.appendChild(op4);
    var  span4 = document.createElement("span");
    span4.setAttribute("id", "option4")
    var span_text4 =document.createTextNode(data[count].option4);
    span4.appendChild(span_text4);
    li3.appendChild(span4)
    ul.appendChild(li3)
    box.appendChild(ul);
    
/***** Button For Next Question ******/

    var btn1 = document.createElement("input");
    btn1.setAttribute("type", "button");
    btn1.setAttribute("id", "button");
    btn1.setAttribute("class", "button button1");
    btn1.setAttribute("value", "Next");
    btn1.setAttribute("onclick", "button1()");
    box.appendChild(btn1)
    var incre = 1
    document.getElementById("ques").innerHTML =  incre + "/" + data.length;
    
function  button1() {   
     
    var x = localStorage.getItem("information");
    x = JSON.parse(x);
    var radio = document.querySelector("input[type = radio]:checked");
    console.log(radio.value)
    radio.checked = false;

    if(radio.value === data[count].answer){
        marks++;
        console.log(marks)
    }
    if(count < data.length-1){
        count++;
        document.getElementById('q').innerHTML = data[count].question;
        document.getElementById('option1').innerHTML= data[count].option1;
        document.getElementById('op1').value= data[count].option1;
        document.getElementById('option2').innerHTML = data[count].option2;
        document.getElementById('op2').value= data[count].option2;
        document.getElementById('option3').innerHTML = data[count].option3;
        document.getElementById('op3').value= data[count].option3;
        document.getElementById('option4').innerHTML = data[count].option4;
        document.getElementById('op4').value= data[count].option4;
        incre++
        document.getElementById("ques").innerHTML =  incre + "/" + x.question1
    }
    else{
        var x =  x.marks1/x.question1 * marks;
        x = JSON.stringify(x)
        localStorage.setItem("marks",x)
        document.getElementById("form").style.display = "none"
        document.getElementById("load").style.display = "block"
        document.getElementById("countdown").style.display = "none"
        setTimeout(function(){  
         localStorage.setItem("marks",x)
         window.location.href = "result.html"
         console.log(x)
        }, 3000);

    }
}
var x1 = localStorage.getItem("information");
x1 = JSON.parse(x1);

/*timer*/

var seconds = x1.time1 * 60;
function secondPassed() {
    var minutes = Math.round((seconds - 30)/60),
        remainingSeconds = seconds % 60;

    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
    }
    document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;
    if (seconds == 0) {
        clearInterval(countdownTimer);
        var x1 = localStorage.getItem("information");
        x1 = JSON.parse(x1);
        var x =  x1.marks1/x1.question1 * marks;
        x = JSON.stringify(x)   
        document.getElementById("form").style.display = "none"
        document.getElementById("load").style.display = "block"
        document.getElementById("countdown").style.display = "none"
        setTimeout(function(){  
            localStorage.setItem("marks",x)
            window.location.href = "result.html"
            console.log(x)
        }, 3000);

    } else {
        seconds--;
    }
}
var countdownTimer = setInterval('secondPassed()', 1000);


