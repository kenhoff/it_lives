#pragma strict

public var score : float = 0.0;
public var GibletInGrinder : AudioClip;
public var TrashInGrinder : AudioClip;
public var GibletInTrash : AudioClip;
public var TrashInTrash : AudioClip;

private var sfx : AudioSource;

function Awake () {
	score = 0.0;
	sfx = GetComponent.<AudioSource>();
}

function Update () {

}

function OnTriggerEnter2D(other : Collider2D) {
	if (other.gameObject.CompareTag("Giblet")) {
		score += 2;
		if (gameObject.CompareTag("TrashCollector")) {
			sfx.clip = GibletInTrash;
			sfx.Play();
		}
		if (gameObject.CompareTag("GibletCollector")) {
			sfx.clip = GibletInGrinder;
			sfx.Play();
		}
	}
	else {
		score -= 1;
		if (gameObject.CompareTag("TrashCollector")) {
			sfx.clip = TrashInTrash;
			sfx.Play();
		}
		if (gameObject.CompareTag("GibletCollector")) {
			sfx.clip = TrashInGrinder;
			sfx.Play();
		}
	}
	Destroy(other.gameObject);
}
