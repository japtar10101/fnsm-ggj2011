@script RequireComponent(Collider)

public var key : KeyCode;
public var average : AverageKeys;

function OnGUI () {
	var e : Event = Event.current;
    if (e.isKey && (e.keyCode == key) && !average. ballDropped) {
		average.GatherKey(transform.position);
    }
}
