public var key : KeyCode;
public var explosion : ActivateExplosion;
private var mine : GameObject;

function Start() {
	// Check if the explosion variable is null
	if(explosion == null) {
		// If so, halt
		Destroy (gameObject);
	}
	mine = gameObject;
}

function OnGUI() {
    var e : Event = Event.current;
    if (e.isKey && (e.keyCode == key)) {
		Instantiate(explosion, transform.position, Quaternion.identity);
		/*
		var clone : ActivateExplosion =
			Instantiate(explosion, transform.position, Quaternion.identity);
		clone.Detonate();
		*/
    }
}
