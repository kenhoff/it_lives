#pragma strict

public var Legs : GameObject;

public var direction : float;

public var spawnFrequency : float = 0.5;
public var chanceToSpawn : float = 0.33;

public var maxSpeed : float = 10.0;
public var minSpeed : float = 1.0;

public var minSize : float = 0.5;
public var maxSize : float = 5.0;

function Awake () {
	InvokeRepeating("SpawnLegs", 1, spawnFrequency);
}

function Update () {

}

function SpawnLegs() {
	if (Random.value <= chanceToSpawn) {
		var legs = Instantiate(Legs, transform.position, Quaternion.identity);
		legs.GetComponent.<LegsControl>().direction = direction;
		legs.transform.localScale = legs.transform.localScale * Random.Range(minSize, maxSize);
		if (direction < 0) {
			legs.transform.localScale.x = -legs.transform.localScale.x;
		}
		legs.GetComponent.<LegsControl>().speed = Random.Range(minSpeed, maxSpeed);
	}
}
