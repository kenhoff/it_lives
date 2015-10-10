#pragma strict

// can also create terrain, trees, cottages, and other scenery!

public var playerTransform : Transform;
public var playerOffset : Vector2 = new Vector2(20, 0);
public var Villager : GameObject;
public var VillagerSpawnChanceEverySecond : float = 0.2;



function Start () {

	InvokeRepeating("SpawnVillager", 3, 1);

}

function Update () {

}

function SpawnVillager() {
	if (Random.value >= VillagerSpawnChanceEverySecond) {
		Instantiate(Villager, playerTransform.position + playerOffset, Quaternion.identity);
	}
}
