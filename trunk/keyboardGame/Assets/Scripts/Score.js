var labelFont : GUIStyle;
var boxSize : Rect = new Rect(0,0,200,40);
static var showScore : boolean = false;
/*
function Start() {
	boxSize.width = 200;
	boxSize.height = 40;
	boxSize.x = Screen.width - boxSize.width;
	boxSize.y = Screen.height - boxSize.height;
}
*/

function OnGUI () {
	if(showScore) {
	Debug.Log("Score");
		// Make a background box
		GUI.Box (boxSize, ScoreWall.score.ToString(), labelFont);
	}
}
