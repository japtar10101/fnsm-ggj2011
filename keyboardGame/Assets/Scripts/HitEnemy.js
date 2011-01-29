public var detectDuration : float = 1;
private var theCollider : SphereCollider;
private var magnifier : float = 3000;
private var startTime : float;

function Start() {
	// Grab the collider
	theCollider = GetComponent(SphereCollider);
	if(theCollider == null) {
		Destroy(this);
	}
	startTime = Time.time;
}

/*
function OnCollisionEnter(collision : Collision) {
	// Go through everything colliding with this explosion
    for (var contact : ContactPoint in collision.contacts) {
		// Check if this collider is tagged as an enemy
		var enemy : Collider = contact.otherCollider;
		if(enemy.CompareTag("Enemy")) {
			// TODO: decrease its health
			enemy.attachedRigidbody.AddForce((transform.position - theCollider.transform.position) * magnifier);
		}
    }
}
*/

function OnTriggerEnter (enemy : Collider) {
    if(((Time.time - startTime) < detectDuration) && enemy.CompareTag("Enemy")) {
		// TODO: decrease its health
		var forceDirection : Vector3 =
				(enemy.transform.position - transform.position) * magnifier;
		enemy.attachedRigidbody.AddForce(forceDirection);
	}
}
