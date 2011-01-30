public var firstState : AverageKeys;
public var firstTransform : Transform;
public var firstXRotation : float = 0;

public var secondState : ExplodeOnContact;
public var secondTransform : Transform;
public var secondXRotation : float = -30;

private var state : int = 0;

function Start() {
	transform.position = firstTransform.position;
	transform.rotation.eulerAngles.x = firstXRotation;
}

function Update () {
	switch(state)
	{
		case 0:
		  changeState0to1();
		  break;
		case 1:
		  positionCamera1();
		  changeState1to2();
		  break;
	}
}

private function positionCamera1() {
	transform.position = secondTransform.position;
	transform.rotation.eulerAngles.x = secondXRotation;
}

private function changeState1to2() {
	if(secondState.HasExploded()) {
		state = 2;
		//transform.rotation.eulerAngles.y = secondYRotation;
	}
}

private function changeState0to1() {
	if(firstState.IsBallDropped()) {
		state = 1;
	}
}
