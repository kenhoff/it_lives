#pragma strict

import System.Collections.Generic;

// public var Giblets : List.<GameObject> = new List.<GameObject>();
// Trash[Random.Range(0, Trash.Count)]

public var startingHP : float = 20;
public var decreasesOverTime : boolean = false;

public var villagerDeathNoise : List.<GameObject>;
public var villagerHurtNoise : List.<GameObject>;

function Update () {
	startingHP -= Time.deltaTime;
	CheckIfDead();
}

public function Damage(amount : float) {
	startingHP -= amount;
	if (!CheckIfDead()) {
		Instantiate(villagerHurtNoise[Random.Range(0, villagerHurtNoise.Count)]);
	}
}

function CheckIfDead() {
	if (startingHP <= 0) {
		Instantiate(villagerDeathNoise[Random.Range(0, villagerDeathNoise.Count)]);
		Destroy(gameObject);

		return true;
	}
	else {
		return false;
	}
}
