public var firstState : AverageKeys;
public var firstTransform : Transform;
public var firstXRotation : float = 0;

public var secondState : ExplodeOnContact;
public var secondTransform : Transform;
public var secondXRotation : float = -30;

public var zoomOutSpeed : float = 50;
public var thirdTransform : Transform;
public var thirdStateDuration : float = 3;

public var spinSpeed : float = 10;
public var spinDuration : float = 10;

public var pauseDuration : float = 10;

private var state : int = 0;
private var pointOfImpact : Vector3;
private var timeTrack : float;

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
		case 2:
			positionCamera2();
			changeState2to3();
			break;
/* 		case 3:
 * 			positionCamera3();
 * 			changeState3to4();
 * 			break;
 * 		case 4:
 * 			positionCamera4();
 * 			changeState4to5();
 * 			break;
 */
		default:
			
			break;
	}
}

private function positionCamera3() {
	transform.RotateAround(pointOfImpact, Vector3.up,
		spinSpeed * Time.deltaTime);
}

private function positionCamera2() {
	var direction : Vector3 = thirdTransform.position - pointOfImpact;
	direction.Normalize();
	transform.position += (direction * zoomOutSpeed * Time.deltaTime);
}

private function changeState2to3() {
	if((Time.time - timeTrack) > thirdStateDuration) {
		Debug.Log("Speed-up time");
		state = 3;
		Time.timeScale = 1;
		timeTrack = 1;
	}
}

private function positionCamera1() {
	transform.position = secondTransform.position;
	transform.rotation.eulerAngles.x = secondXRotation;
}

private function changeState1to2() {
	if(secondState.HasExploded()) {
		state = 2;
		timeTrack = Time.time;
		pointOfImpact = transform.position;
	}
}

private function changeState0to1() {
	if(firstState.IsBallDropped()) {
		state = 1;
	}
}
