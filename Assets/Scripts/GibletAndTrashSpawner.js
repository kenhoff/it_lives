#pragma strict

import System.Collections.Generic;

// public var Giblet : GameObject;
// public var Trash : GameObject;

public var Giblets : List.<GameObject> = new List.<GameObject>();
public var Trash : List.<GameObject> = new List.<GameObject>();

public var gibForce : float = 1000;
public var gibRotation : float = 10;

private var gib : GameObject;


public var GibletsSpawnNoise : AudioClip;
public var TrashSpawnNoise : AudioClip;

private var sfx : AudioSource;

function Awake () {
	InvokeRepeating("SpawnGibletOrTrash", 3, 1);
	sfx = GetComponent.<AudioSource>();

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
	gib.GetComponent.<Rigidbody2D>().MoveRotation(Random.Range(0, 360));
	gib.GetComponent.<Rigidbody2D>().AddTorque(Random.Range(-gibRotation, gibRotation));
	sfx.clip = GibletsSpawnNoise;
	sfx.Play();
}
function SpawnTrash() {
	gib = Instantiate(Trash[Random.Range(0, Trash.Count)], transform.position, Quaternion.identity);
	gib.GetComponent.<Rigidbody2D>().AddForce(Vector2(-1 * gibForce, 0));
	gib.GetComponent.<Rigidbody2D>().MoveRotation(Random.Range(0, 360));
	gib.GetComponent.<Rigidbody2D>().AddTorque(Random.Range(-gibRotation, gibRotation));
	sfx.clip = TrashSpawnNoise;
	sfx.Play();
}
