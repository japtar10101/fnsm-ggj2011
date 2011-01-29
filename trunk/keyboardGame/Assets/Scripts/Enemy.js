public var health : int = 1;

private var timeOfDefeat : float = 0;
private var isDying : boolean = false;
private var isDead : boolean = false;
private var grounded : boolean = false;

function Update () {
	// Check how much time passed after defeat
	if((isDying) && ((Time.time - timeOfDefeat) > 1)) {
		isDead = true;
	}
}

function FixedUpdate() {
	// Give a certain amount of time before death
	if((health <= 0) && (!isDying)) {
		timeOfDefeat = Time.time;
		isDying = true;
	}
	
	// Destroy the enemy at death
	if(isDead && isDying) {
		Destroy(gameObject);
	}
}

function SetGrounded(ground : boolean) {
	grounded = ground;
}

function IsGrounded() : boolean {
	return grounded;
}
