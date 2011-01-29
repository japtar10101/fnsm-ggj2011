public var keyCollectDuration : float = 0.5;
public var canonBall : GameObject;

private var keyHit : boolean = false;
private var ballDropped : boolean = false;
private var startTime : float;
private var hitTimes : int = 0;
private var location : Vector3 = new Vector3(0, 0, 0);

function Update() {
	if(!ballDropped && keyHit && (Time.time - startTime) > keyCollectDuration) {
		location /= hitTimes;
		canonBall.transform.position = location;
		canonBall.rigidbody.isKinematic = false;
		Instantiate(canonBall, location, Quaternion.identity);
		ballDropped = true;
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
