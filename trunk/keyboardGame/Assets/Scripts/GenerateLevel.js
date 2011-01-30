public var buildingsBody : BuildingSize[];
public var plotCorner1 : Transform;
public var plotCorner2 : Transform;
public var minAreaLeft : float = 10;
public var xPadding : float = 2;
public var zPadding : float = 2;

private var leftOverArea : float;

function Start () {
	leftOverArea = GetArea(plotCorner1.position, plotCorner2.position);
	GenerateBuildings(10);
}

private function GenerateBuildings(maxNumBuildings : int) {
	var clone : GameObject;
	for(index = 0; index < maxNumBuildings; index += 1) {
		
		clone = Instantiate(buildingBody.gameObject, randomLocation, Quaternion.identity);
	}
}

private function GetArea(corner1 : Vector3, corner2 : Vector3) : float {
	var area : float = Mathf.Abs(corner1.x - corner2.x);
	area *= Mathf.Abs(corner1.z - corner2.z);
	return area;
}
