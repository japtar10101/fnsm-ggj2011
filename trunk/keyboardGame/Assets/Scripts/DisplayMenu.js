public var menu : Texture;
public var manual : Texture;
public var credits : Texture;

private var buttonPadding : int = 4;
private var state : int = 0;
private var buttonWidth : int;
private var buttonHeight : int;
private var textureBounds : Rect;

function Start() {
	buttonWidth =  Screen.width / 5;
	buttonHeight = Screen.height / 10;
	textureBounds = new Rect(0, 0, Screen.width, Screen.height);
}

function OnGUI() {
	switch(state) {
		case 0:
			DrawMenu();
			break;
		case 1:
			DrawBack(manual);
			break;
		case 2:
			DrawBack(credits);
			break;
	}
}

private function DrawBack(background : Texture) {
	GUI.DrawTexture(textureBounds, background);
	
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
	GUI.DrawTexture(textureBounds, menu);
	
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
