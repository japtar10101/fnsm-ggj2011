public var keyCollectDuration : float = 0.5;
public var canonBall : GameObject;
public var ballDropped : boolean = false;
public var speedModifier : float = 100;

private var keyHit : boolean = false;
private var startTime : float;
private var hitTimes : int = 0;
private var location : Vector3 = new Vector3(0, 0, 0);

function Update() {
	if(!ballDropped && keyHit && (Time.time - startTime) > keyCollectDuration) {
		location /= hitTimes;
		canonBall.transform.position = location;
		canonBall.rigidbody.isKinematic = false;
		canonBall.rigidbody.velocity = Vector3.down * Time.deltaTime * speedModifier;
		ballDropped = true;
		Debug.Log(hitTimes);
		Debug.Log(location);
	}
}

function GatherKey(point : Vector3) {
	if(!ballDropped) {
		location += point;
		hitTimes += 1;
		
		if(!keyHit) {
			keyHit = true;
			startTime = Time.time;
		}
	}
}

function IsBallDropped() : boolean {
	return ballDropped;
}