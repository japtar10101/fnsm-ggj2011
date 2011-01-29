public var key : KeyCode;
public var explosion : ActivateExplosion;
public var crater : Material;
public var mineRenderer : Renderer;
public var numberOfExplosions : int = 1;
public var secondsBetweenEachExplosion : float = 0.5;
private var lastTime : float = 0;

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
	var currentTime : float = Time.time;
    if ((currentTime - lastTime > secondsBetweenEachExplosion) &&
			(numberOfExplosions > 0) &&
			e.isKey && (e.keyCode == key)) {
		clone = Instantiate(explosion, transform.position, Quaternion.identity);
		numberOfExplosions -= 1;
		lastTime = currentTime;
		if(numberOfExplosions <= 0) {
			mineRenderer.material = crater;
		}
    }
}
