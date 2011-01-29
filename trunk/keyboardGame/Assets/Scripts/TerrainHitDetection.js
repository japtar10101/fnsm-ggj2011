/*
function OnCollisionEnter(collision : Collision) {
    for (var contact : ContactPoint in collision.contacts) {
		if(contact.otherCollider.CompareTag("Enemy")) {
			var enemy : Enemy = contact.otherCollider.GetComponent(Enemy);
			enemy.SetGrounded(true);
			Debug.Log("here");
		}
    }
}

function OnCollisionExit(collision : Collision) {
    for (var contact : ContactPoint in collision.contacts) {
		if(contact.otherCollider.CompareTag("Enemy")) {
			var enemy : Enemy = contact.otherCollider.GetComponent(Enemy);
			enemy.SetGrounded(false);
		}
    }
}
*/