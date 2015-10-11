#pragma strict

import System.Collections.Generic;

// public var Giblet : GameObject;
// public var Trash : GameObject;

public var Giblets : List.<GameObject> = new List.<GameObject>();
public var Trash : List.<GameObject> = new List.<GameObject>();

public var gibForce : float = 1000;

private var gib : GameObject;

function Awake () {
	InvokeRepeating("SpawnGibletOrTrash", 3, 1);
}

function Update () {

}

function SpawnGibletOrTrash() {
	if (Random.value >= 0.5) {
		if (Giblets.Count != 0) {
			SpawnGiblet();
		}
		else {
			SpawnTrash();
		}
	}
}

function SpawnGiblet() {
	gib = Instantiate(Giblets[Random.Range(0, Giblets.Count)], transform.position, Quaternion.identity);
	gib.GetComponent.<Rigidbody2D>().AddForce(Vector2(1 * gibForce, 0));
}
function SpawnTrash() {
	gib = Instantiate(Trash[Random.Range(0, Trash.Count)], transform.position, Quaternion.identity);
	gib.GetComponent.<Rigidbody2D>().AddForce(Vector2(-1 * gibForce, 0));
}
