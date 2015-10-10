#pragma strict

public var score : float = 0.0;

function Awake () {
	score = 0.0;
}

function Update () {

}

function OnTriggerEnter2D(other : Collider2D) {
	if (other.gameObject.CompareTag("Giblet")) {
		score += 2;
	}
	else {
		score -= 1;
	}
	Destroy(other.gameObject);
}
