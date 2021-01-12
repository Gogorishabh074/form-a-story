function mainPage(){
    location.replace("index.html");
}

function myFunction(){
	var a = document.getElementById("animal-1").value;
    localStorage.setItem('inp1',a);
    
    var b = document.getElementById("animal-2").value;
    localStorage.setItem('inp2', b);

    var c = document.getElementById("animal-3").value;
    localStorage.setItem('inp3',c);

    var d = document.getElementById("adjective").value;
    localStorage.setItem('inp4',d);

    var e = document.getElementById("verbs").value;
    localStorage.setItem('inp5',e);

    var f = document.getElementById("number").value;
    localStorage.setItem('inp6',f);

    if(document.getElementById("yes").checked){
        var x=document.getElementById("yes").value;
        localStorage.setItem("inp7",x);
    }
    else if(document.getElementById("no").checked){
        var x=document.getElementById("no").value;
        localStorage.setItem("inp7",x);
    }
    else{
        var x="yes";
        localStorage.setItem("inp7",x);
    }

    var g = document.getElementById("speed").value;
    localStorage.setItem('inp8', g);

    var h = document.getElementById("quote").value;
    localStorage.setItem('inp9', h);

    var i = document.getElementById("msg").value;
    localStorage.setItem('inp10', i);
}

for(var i=0;i<8;i++){
	document.getElementsByClassName("tiger")[i].innerHTML=localStorage.getItem('inp1');
    }
    for(var i=0;i<9;i++){
	document.getElementsByClassName("lion")[i].innerHTML=localStorage.getItem('inp2');
    }

	 document.getElementById("yes").innerHTML=localStorage.getItem('inp3');
	 
	 document.getElementById("quick").innerHTML=localStorage.getItem('inp4');
	 document.getElementById("alarm").innerHTML=localStorage.getItem('inp5');
	document.getElementById("dog").innerHTML=localStorage.getItem('inp6');
	document.getElementById("exam").innerHTML=localStorage.getItem('inp7');

	  for(var i=0;i<3;i++){
	document.getElementsByClassName("running")[i].innerHTML=localStorage.getItem('inp8');
    }

	 document.getElementById("two").innerHTML=localStorage.getItem('inp9');
	 document.getElementById("msg1").innerHTML=localStorage.getItem('inp10');
   
 







    























/*
var textbox = document.getElementById("adjektiver");
var button = document.getElementById("generateBtn");
var adjektiv = document.getElementsByClassName("adj");


function addWords () {
  var textValues = textbox.value.split(","); //Array av strenger separert med komma

  for (var i = 0; i < textValues.length; i++) {
    adjektiv[i].innerHTML = textValues[i];


    //textbox = "";
  }

}

button.addEventListener("click", addWords);
*/