@script RequireComponent(SphereCollider)

public var detectDuration : float = 1;
public var magnifier : float = 2000;
public var damage : int = 1;
private var theCollider : SphereCollider;
private var startTime : float;

function Start() {
	// Grab the collider
	startTime = Time.time;
}

function OnTriggerEnter (enemy : Collider) {
    if(((Time.time - startTime) < detectDuration) && enemy.CompareTag("Enemy")) {
		// decrease its health
		var enemyStats : Enemy = enemy.gameObject.GetComponent(Enemy);
		enemyStats.health -= damage;
		
		// force the object away from the explosion
		var forceDirection : Vector3 = (enemy.transform.position - transform.position)
				* magnifier * Time.deltaTime;
		enemy.attachedRigidbody.AddForce(forceDirection);
	}
}
