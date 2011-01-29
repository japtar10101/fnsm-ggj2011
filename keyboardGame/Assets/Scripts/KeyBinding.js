@script RequireComponent(Collider)

public var key : KeyCode;
public var average : AverageKeys;

function GUI () {
	var e : Event = Event.current;
    if ((e.keyCode == key)) {
		average.GatherKey(transform.position);
    }
}