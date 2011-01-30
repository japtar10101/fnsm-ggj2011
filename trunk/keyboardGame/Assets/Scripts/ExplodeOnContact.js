public var explosion : DetonatorComponent;

private var hasExploded : boolean = false;

function OnCollisionEnter(collision : Collision) {
	if(!hasExploded) {
		Instantiate(explosion, transform.position, Quaternion.identity);
		hasExploded = true;
	}
}

function HasExploded() : boolean {
	return hasExploded;
}