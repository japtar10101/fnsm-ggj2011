@script RequireComponent(SphereCollider)

public var power : float = 10;

function Start () {
    // Applies an explosion force to all nearby rigidbodies
    var explosionPos : Vector3 = transform.position;
    var colliders : Collider[] = Physics.OverlapSphere (explosionPos, collider.radius);
    
    for (var hit : Collider in colliders) {
        if (!hit)
            continue;
        
        if (hit.rigidbody)
            hit.rigidbody.AddExplosionForce(power, explosionPos, collider.radius, 3.0);
    }
}
