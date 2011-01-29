public var key : KeyCode;
public var explosion : GameObject;
private var mine : GameObject;

function Start() {
	mine = gameObject;
}

function OnGUI() {
    var e : Event = Event.current;
    if (e.isKey && (e.keyCode == key)) {
		// TODO: create the explosion instance
    }
}
