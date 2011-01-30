@script RequireComponent(BoxCollider)

public var corner1 : Vector3;
public var corner2 : Vector3;

function Start () {
	corner1 = transform.position;
	corner2 = transform.position;
	
	var change : float = collider.size.x / 2;
	corner1.x -= change;
	corner2.x += change;
	
	change = collider.size.y / 2;
	corner1.y -= change;
	corner2.y += change;
	
	change = collider.size.z / 2;
	corner1.z -= change;
	corner2.z += change;
}
