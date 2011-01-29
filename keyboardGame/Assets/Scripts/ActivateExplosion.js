public var detonators : DetonatorComponent[];

function Update() {
	var isAllDetonatorsGone : boolean = true;
	for(var checkNull : DetonatorComponent in detonators) {
	
		if(checkNull != null) {
			isAllDetonatorsGone = false;
			break;
		}
		
	}
	
	if(isAllDetonatorsGone) {
		// Kills the game object
		Destroy (gameObject);
	}
}