@script RequireComponent(Rigidbody)
@script RequireComponent(Enemy)

public var direction : Vector3;

private var enemy : Enemy;

function Start() {
	enemy = GetComponent(Enemy);
}

function FixedUpdate () {
	if(Mathf.Approximately(rigidbody.velocity.y, 0)) {
		rigidbody.AddForce(direction * Time.deltaTime);
	}
}
