public var detonators : DetonatorComponent[];

function Start () {
	for( var detonate : DetonatorComponent in detonators) {
		detonate.on = false;
	}
}

public function Detonate () {
	for( var detonate : DetonatorComponent in detonators) {
		detonate.on = true;
	}
}
