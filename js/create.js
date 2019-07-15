// /***********************   Add Information To LocalStorage    ***********************/
function btn(){
    var name = document.getElementById("title1").value;
    var time = document.getElementById("time1").value;
    var question = document.getElementById("question1").value;
    var marks = document.getElementById("marks1").value;

    if (name.length === 0) {
        alert("Please enter your Quizz Name");
        return false;
    }
    if (time.length === 0) {
        alert("Please enter your Quizz Time");
        return false;
    }
    if (question.length === 0) {
        alert("Please enter your Quizz Question");
        return false;
    }
    if (marks.length === 0) {
        alert("Please enter your Quizz Question");
        return false;
    }
    
    
    var information = {
    name1 : name,
    time1 : time,
    question1 : question,
    marks1 : marks
    }

    localStorage.setItem("information",JSON.stringify(information));
    document.getElementById("title1").value="";
    document.getElementById("time1").value="";
    document.getElementById("question1").value="";
    document.getElementById("marks1").value="";

    document.getElementById("form1").style.display = "none";
    document.getElementById("form").style.display = "block";
}

/***********************   Add Questions To Array    ***********************/
var store_ques = [];
function add(){
    var information = localStorage.getItem("information");
    information = JSON.parse(information)
    if (store_ques.length < information.question1){
    var question = document.getElementById("question").value;
    var option1 = document.getElementById("option1").value;
    var option2 = document.getElementById("option2").value;
    var option3 = document.getElementById("option3").value;
    var option4 = document.getElementById("option4").value;
    var answer  = document.getElementById("answer").value;

/***********************   Constructor Function    ***********************/
    function MyFunc(question,option1,option2,option3,option4){
        this.question = question;        
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.option4 = option4;
        this.answer  = answer;
    }

    var ques = new MyFunc(question,option1,option2,option3,option4,answer);
    store_ques.push(ques);
    }
    else{
        alert("Your Select only " + information.question1 + " Questions")
        document.getElementById("Button").disabled = true;
    }
    document.getElementById("question").value = "";
    document.getElementById("option1").value = "";
    document.getElementById("option2").value = "";
    document.getElementById("option3").value = "";
    document.getElementById("option4").value = "";
    document.getElementById("answer").value = "";
}

function send(){
    store_ques = JSON.stringify(store_ques) 
    store_ques= localStorage.setItem("Quiz",store_ques);
    document.getElementById("form").style.display = "none";
    alert("Quizz Created")
    window.location.href = "user.html";
}
