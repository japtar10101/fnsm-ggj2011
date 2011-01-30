public var menu : Texture2D;
public var manual : Texture2D;
public var credits : Texture2D;

private var buttonPadding : int = 4;
private var state : int = 0;

function OnGUI() {
	var textureBounds : Rect = new Rect(0, 0, Screen.width, Screen.height);
	switch(state) {
		case 1:
			GUI.DrawTexture(textureBounds, manual);
			DrawBack();
			break;
		case 2:
			GUI.DrawTexture(textureBounds, credits);
			DrawBack();
			break;
		case 0:
			GUI.DrawTexture(textureBounds, menu);
			DrawMenu();
			break;
	}
}

private function DrawBack() {
	var buttonWidth : int =  Screen.width / 4;
	var buttonHeight : int = Screen.height / 8;
	
	var buttonBounds : Rect = new Rect(
			(Screen.width - buttonWidth)/2,
			(Screen.height - buttonHeight - buttonPadding),
			buttonWidth,
			buttonHeight);
			
	// Draw the Start button
	var buttonClicked : boolean = GUI.Button(buttonBounds, "Back");
	if(buttonClicked){
		state = 0;
	}
}

private function DrawMenu() {
	var buttonWidth : int =  Screen.width / 4;
	var buttonHeight : int = Screen.height / 8;
	
	var buttonBounds : Rect = new Rect(
			(Screen.width - buttonWidth)/2,
			Screen.height - (buttonHeight + buttonPadding),
			buttonWidth,
			buttonHeight);
			
	// Draw the Credits button
	var buttonClicked : boolean = GUI.Button(buttonBounds, "Credits");
	if(buttonClicked){
		state = 2;
		return;
	}
	
	// Draw the Manual button
	buttonBounds.y -= (buttonHeight + buttonPadding);
	buttonClicked = GUI.Button(buttonBounds, "How to Play");
	if(buttonClicked){
		state = 1;
		return;
	}
	
	// Draw the Start button
	buttonBounds.y -= (buttonHeight + buttonPadding);
	buttonClicked = GUI.Button(buttonBounds, "Start");
	if(buttonClicked){
		var level : int = Mathf.RoundToInt(Random.Range(1, Application.levelCount));
		Application.LoadLevel(level);
		return;
	}
}
