public static var score: int = 0;

function OnTriggerEnter (collide:Collider) {
	
	if(collide.CompareTag("Destructable")){
	
		var hit:Rigidbody = collide.attachedRigidbody; 
		score += hit.mass;
	}

}

