public var allBindings : KeyToMineMap[];

function OnGUI() {
    var e : Event = Event.current;
    if (e.isKey) {
        
		Debug.Log("Detected key code: " + e.keyCode);
		
		for (var binding : KeyToMineMap in allBindings) {
		
			if(e.keyCode == binding.key) {
				Debug.Log("key binding found");
				break;
			}
			
		}
    }
}
