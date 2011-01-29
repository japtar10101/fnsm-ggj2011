public var detectDuration : float = 1;
public var magnifier : float = 2000;
private var theCollider : SphereCollider;
private var startTime : float;

function Start() {
	// Grab the collider
	theCollider = GetComponent(SphereCollider);
	if(theCollider == null) {
		Destroy(this);
	}
	startTime = Time.time;
}

function OnTriggerEnter (enemy : Collider) {
    if(((Time.time - startTime) < detectDuration) && enemy.CompareTag("Enemy")) {
		// TODO: decrease its health
		var forceDirection : Vector3 =
				(enemy.transform.position - transform.position) * magnifier;
		enemy.attachedRigidbody.AddForce(forceDirection);
	}
}
