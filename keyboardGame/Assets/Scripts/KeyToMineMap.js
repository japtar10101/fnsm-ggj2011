public var key : KeyCode;
public var explosion : ActivateExplosion;
private var mine : GameObject;

function Start() {
	mine = gameObject;
}

function OnGUI() {
    var e : Event = Event.current;
    if (e.isKey && (e.keyCode == key) && (explosion != null)) {
		var clone : ActivateExplosion =
			Instantiate(explosion, transform.position, Quaternion.identity);
		clone.Detonate();
    }
}
