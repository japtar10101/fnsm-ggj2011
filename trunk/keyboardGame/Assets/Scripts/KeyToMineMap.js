public var key : KeyCode;
private var mine : GameObject;

function Start() {
	mine = gameObject;
}

function OnGUI() {
    var e : Event = Event.current;
    if (e.isKey) {
		if(e.keyCode == key) {
			Debug.Log("key binding found");
		}
    }
}
