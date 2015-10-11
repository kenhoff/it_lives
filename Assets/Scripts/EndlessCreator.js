#pragma strict

// can also create terrain, trees, cottages, and other scenery!

public var playerTransform : Transform;
public var playerOffset : Vector2 = new Vector2(20, 0);
public var Villager : GameObject;
public var VillagerSpawnChanceEverySecond : float = 0.2;

public var BackgroundObject : GameObject;
private var count = 0;



function Awake () {

	InvokeRepeating("SpawnVillager", 3, 1);
	InvokeRepeating("CreateBackground", 0, 0.5);
}

function Update () {

}

function SpawnVillager() {
	if (playerTransform){
		if (Random.value >= VillagerSpawnChanceEverySecond) {
			Instantiate(Villager, playerTransform.position + playerOffset, Quaternion.identity);
		}
	}
}

function CreateBackground() {
	Instantiate(BackgroundObject, Vector3(7.8 * count, 0.5, 0), Quaternion.identity);
	count++;
}
