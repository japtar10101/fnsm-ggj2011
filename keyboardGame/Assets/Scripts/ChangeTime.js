@script RequireComponent(SphereCollider)

public var slowDownTo : float = 0.5;

private var slowedDown : boolean = false;

function OnTriggerEnter (enemy : Collider) {
    if(!slowedDown && (enemy.gameObject.CompareTag("Destructable")
			|| enemy.gameObject.CompareTag("Ground"))) {
		Debug.Log("slow down!");
		// decrease its health
		Time.timeScale = slowDownTo;
		slowedDown = true;
		audio.Play();
	}
}
