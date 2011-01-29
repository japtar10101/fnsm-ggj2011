var score: int = 0;
var font = "Arial";


function OnGUI (){

	GUI.Label (Rect(25,25,100,30), score +"" );
}

function Update () {

	score ++;
}