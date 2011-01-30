
var icon : Texture2D;
private var startText : String = "Press Start Button";
//startText


function OnGUI() {
	
	//if(Time.time % 2 < 1){
	
		if(GUI.Button(Rect(Screen.width/2 - 150,Screen.height/2 + 200,300,100),startText)){
			
			print("On to next Scene");
		
			Application.LoadLevel(1);
		
		}
		
		//if(GUI.Button(Rect(Screen.width - 200,10,200,200), icon)){
			
			//print("icon clicked");
		
			//Application.LoadLevel(1);
		
		//}
		
		
	
	//}

}

