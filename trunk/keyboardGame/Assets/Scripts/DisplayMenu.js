public var menu : Texture;
public var manual : Texture;
public var credits : Texture;

private var buttonPadding : int = 4;
private var state : int = 0;
private var buttonWidth : int;
private var buttonHeight : int;

function Start() {
	buttonWidth =  Screen.width / 5;
	buttonHeight = Screen.height / 10;
}

function OnGUI() {
	var textureBounds : Rect = new Rect(0, 0, Screen.width, Screen.height);
	var backgroundTexture : Texture;

	switch(state) {
		case 0:
			backgroundTexture = menu;
			break;
		case 1:
			backgroundTexture = manual;
			break;
		case 2:
			backgroundTexture = credits;
			break;
	}
	
	GUI.DrawTexture(textureBounds, backgroundTexture);
	if(state == 0)
		DrawMenu();
	else
		DrawBack();
}

private function DrawBack() {
	
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
