
var icon : Texture2D;



function OnGUI() {
	
	//if(Time.time % 2 < 1){
	
		if(GUI.Button(Rect(10,10,200,200),"Start Button")){
			
			print("On to next Scene");
		
			Application.LoadLevel(1);
		
		}
		
		if(GUI.Button(Rect(Screen.width - 200,10,200,200), icon)){
			
			print("icon clicked");
		
			//Application.LoadLevel(1);
		
		}
		
		
	
	//}

}
