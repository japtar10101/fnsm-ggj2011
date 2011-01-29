public var key : KeyCode;
public var explosion : ActivateExplosion;
public var crater : Material;
public var mineRenderer : Renderer;
public var numberOfExplosions : int = 1;

function Start() {
	// Check if the explosion variable is null
	if((explosion == null) || (crater == null) || (mineRenderer == null)) {
		// If so, halt
		Destroy (gameObject);
	}
	
	// Make sure the number of explosions is greater than 0
	if(numberOfExplosions <= 0) {
		numberOfExplosions = 0;
		mineRenderer.material.mainTexture = crater;
	}
}

function OnGUI() {
    var e : Event = Event.current;
    if ((numberOfExplosions > 0) && e.isKey && (e.keyCode == key)) {
		Instantiate(explosion, transform.position, Quaternion.identity);
		numberOfExplosions -= 1;
		if(numberOfExplosions <= 0) {
			mineRenderer.material = crater;
		}
    }
}
