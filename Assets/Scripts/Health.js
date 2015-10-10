#pragma strict

public var startingHP : float = 20;
public var decreasesOverTime : boolean = false;


function Start () {

}

function Update () {
	startingHP -= Time.deltaTime;
	CheckIfDead();
}

public function Damage(amount : float) {
	startingHP -= amount;
	CheckIfDead();
}

function CheckIfDead() {
	if (startingHP <= 0) {
		Destroy(gameObject);
	}
}
