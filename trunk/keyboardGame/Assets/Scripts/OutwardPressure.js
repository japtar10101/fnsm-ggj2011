@script RequireComponent(SphereCollider)

public var power : float = 10;
public var radius : float = 100;

/*
function Start () {
    // Applies an explosion force to all nearby rigidbodies
    var explosionPos : Vector3 = transform.position;
    var colliders : Collider[] = Physics.OverlapSphere (explosionPos, collider.radius);
    
    for (var hit : Collider in colliders) {
        if (!hit)
            continue;
        
        if (hit.rigidbody)
            hit.rigidbody.AddExplosionForce(power, explosionPos, radius, 3.0);
    }
}
*/

function FixedUpdate () {
    // Applies an explosion force to all nearby rigidbodies
    var explosionPos : Vector3 = transform.position;
    var colliders : Collider[] = Physics.OverlapSphere (explosionPos, collider.radius);
    
    for (var hit : Collider in colliders) {
        if (!hit)
            continue;
        
        if (hit.rigidbody)
            hit.rigidbody.AddExplosionForce(power, explosionPos, radius, 3.0);
    }
}
