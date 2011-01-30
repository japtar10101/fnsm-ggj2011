public var detcomponent : DetonatorComponent;
public var explosion : GameObject;

private var hasExploded : boolean = false;

function OnCollisionEnter(collision : Collision) {
	if(!hasExploded) {
		Instantiate(detcomponent, transform.position, Quaternion.identity);
		hasExploded = true;
		renderer.enabled = false;
		audio.Play();
	}
}

function HasExploded() : boolean {
	return hasExploded;
}