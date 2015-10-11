#pragma strict

public var Legs : GameObject;

public var direction : Vector2;

public var spawnFrequency : float = 0.5;
public var chanceToSpawn : float = 0.33;

function Awake () {
	InvokeRepeating("SpawnLegs", 3, spawnFrequency);
}

function Update () {

}

function SpawnLegs() {
	if (Random.value <= chanceToSpawn) {
		var legs = Instantiate(Legs, transform.position, Quaternion.identity);
		legs.GetComponent.<LegsControl>().direction = direction;
	}
}
