/*
function OnCollisionEnter(collision : Collision) {
	// Go through everything colliding with this explosion
    for (var contact : ContactPoint in collision.contacts) {
		// Check if this collider is tagged as an enemy
		var enemy : Collider = contact.otherCollider;
		if(contact.otherCollider.CompareTag("Enemy")) {
			// If so, apply a force
			Destroy(enemy.GameObject);
		}
    }
}
*/
