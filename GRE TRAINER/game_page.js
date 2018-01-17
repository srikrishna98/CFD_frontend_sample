var answers = document.getElementsByClassName("answer");
var score=0;
var score_element=document.getElementById("score");
for(var i=0;i<answers.length;i++)
{
	answers[i].addEventListener("click", function() {
   score=score+1;
   score_element.textContent=score;
	});
}