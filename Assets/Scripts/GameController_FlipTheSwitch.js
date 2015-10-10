#pragma strict

import System.Collections.Generic;

public var chargePerCorrectPress : float = 1.0;
public var optimalCharge : float = 80.0;
public var maxCharge : float = 100.0;

public var uiElement : UI.Image;

// every second, remove X% of the power
public var percentDrainedPerSecond : float = 0.1;

private var powerLevel : float = 0.0;
private var finalPowerLevel : float = -1;

private var lastPressed : String = "";

private var finalScore : float;

public var LightningEffects : List.<GameObject> = new List.<GameObject>();

function Awake () {
	powerLevel = 0;
	finalPowerLevel = -1;
}

function SavePowerLevel() {
	if (finalPowerLevel <= optimalCharge) {
		finalScore = finalPowerLevel / optimalCharge;
	}
	else if (finalPowerLevel > optimalCharge) {
		finalScore = (maxCharge - finalPowerLevel) / (maxCharge - optimalCharge);
	}
	PlayerPrefs.SetFloat("Power Level", finalScore);
}

function ChangeLevel() {
	Application.LoadLevel("Final_Scene");
}

function Update () {

	if (Input.GetButton("Left Jolt") && Input.GetButton("Right Jolt")) {
		if (finalPowerLevel == -1) {
			finalPowerLevel = powerLevel;
			SavePowerLevel();
			ChangeLevel();
		}
	}

	if (Input.GetButtonDown("Left Button")) {
		if (lastPressed == "right") {
			powerLevel += chargePerCorrectPress;
		}
		lastPressed = "left";
	}
	if (Input.GetButtonDown("Right Button")) {
		if (lastPressed == "left") {
			powerLevel += chargePerCorrectPress;
		}
		lastPressed = "right";
	}

	powerLevel -= (Time.deltaTime) * (powerLevel * percentDrainedPerSecond);
	if (powerLevel <= 0) {
		powerLevel = 0;
	}
	uiElement.color.a = powerLevel / maxCharge;


	for (var i = 0; i < LightningEffects.Count; i++) {
		if ((powerLevel / maxCharge) > ((1.0 * i) / LightningEffects.Count)) {
			LightningEffects[i].GetComponent.<SpriteRenderer>().color.a = 1;
		}
		else {
			LightningEffects[i].GetComponent.<SpriteRenderer>().color.a = 0;
		}
	}


}
