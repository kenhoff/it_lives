#pragma strict

import System.Collections.Generic;

// public var Giblet : GameObject;
// public var Trash : GameObject;

public var Giblets : List.<GameObject> = new List.<GameObject>();
public var Trash : List.<GameObject> = new List.<GameObject>();


function Awake () {
	InvokeRepeating("SpawnGibletOrTrash", 3, 1);
}

function Update () {

}

function SpawnGibletOrTrash() {
	if (Random.value >= 0.5) {
		SpawnGiblet();
	}
	else {
		SpawnTrash();
	}
}

function SpawnGiblet() {
	Instantiate(Giblets[Random.Range(0, Giblets.Count)], transform.position, Quaternion.identity);
}
function SpawnTrash() {
	Instantiate(Trash[Random.Range(0, Trash.Count)], transform.position, Quaternion.identity);
}
