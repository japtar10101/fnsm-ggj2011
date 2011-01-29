@script RequireComponent(Collider)

public var key : KeyCode;
public var average : AverageKeys;
private var inputtedKey : boolean = false;

function OnGUI () {
	var e : Event = Event.current;
    if (e.isKey && (e.keyCode == key) && !average. ballDropped && !inputtedKey) {
		average.GatherKey(transform.position);
		inputtedKey = true;
    }
}
