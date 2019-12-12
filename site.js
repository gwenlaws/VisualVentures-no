var aa = "art management";
var bb = "digital design";
var cc = "print media";
var dd = "branding / media";
var ee = "animation";
var ff = "environmental design";
var gg = "film and video";

function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;

	var twice = 8;
	var three = 8;
	var a = 0;
	var b = 0;
	var c = 0;
	var d = 0;
	var e = 0;
	var f = 0;
	var g = 0;

	if(question1 == "1"){ // if yes 
		a++;
		d++; // ask about these
		f++;
	}
	else if(question1 == "2"){ // if no
		g++;
	}
	else if(question2 == "3"){ // if maybe
		e++;
		b++;
		c++;
	}

	if(question2 == "1"){
		b++;
		d++;
		e++;
		g++;
	}
	else if(question2 == "2"){
		c++;
	}
	else if(question3 == "3"){
		a++;
		f++;
	}

	if(question3 == "1"){
		e++;
		g++;
	}
	else if(question3 == "2"){
		c++;
		b++;
		f++;
	}
	else if (question3 == "3"){
		a++;
		d++;
	}

	if(question4 == "1"){

	}
	else if(question4 == "2"){
		a++;
	}
	else if(question4 == "3"){
		e++;
		d++;
		c++;
		g++;
		b++;
		f++;
	}

	if(question5 == "1"){
		b++;
	}
	else if(question5 == "2"){
		c++;
		a++;
		d++;
		f++;
	}
	else if(question5 == "3"){
		e++;
		g++;
	}

	//var list = [a, b, c, d, e, f, g];

	

	if(a>b && a>c && a>d && a>e && a>f && a>g){
		score=0;
	}
	else if(b>c && b>d && b>e && b>f && b>g){
		score=1;
	}
	else if(c>d && c>e && c>f && c>g){
		score=2;
	}
	else if(d>e && d>f && d>g){
		score=3;
	}
	else if(e>f && e>g){
		score=4;
	}
	else if(f>g){
		score=5;
	}
	else{
		score=6;
	}

	/*list.sort();
	var score = list[list.length-1];
	console.log("got here");
	console.log(list, score);*/


	/*if(list.length - 1 == list.length - 2){
		twice = list[list.length-2];
	}
	else if(list.length - 1 == list.length - 3){
		three = list[list.length-3];
	}*/

	var pictures = ["art man.jpg", "digital designer.jpg",
	"graphic novelist.jpg", "branding designer.jpg", 
	"animator.jpg", "environmental designer.jpg", "videographer.jpg"];
	var messages = ["Art Management","Digital Design","Print Media","Branding Media",
	"Animation","Environmental Design","Film and Video"];
	var score;
	var twice;
	var three;

	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("picture").src = pictures[score];
	
	//if(twice > 8){
	//	document.getElementById("message").innerHTML = messages[twice];
	//}
}