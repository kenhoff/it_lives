#pragma strict

import System.Collections.Generic;
public var Arms : List.<Transform> = new List.<Transform>();


public var inflationMaxHigh : float = 100.0;
public var inflationMaxLow : float = 60.0;

public var inflateHigh : float = 8.0;
public var inflateLow : float = 12.0;

private var currentInflate : float = 0.0;
private var inflationMax : float;

public var armsMaxSize : float;


public var time : float = 20.0;

public var uiTimer : UI.Text;



function Awake () {
	currentInflate = 0.0;
	PickMaxInflation();
}

function Update () {

	if (time <= 0) {
		EndLevel();
	}
	time -= Time.deltaTime;
	uiTimer.text = "Time remaining: " +  time;


	if (Input.GetButtonDown("A")) {
		currentInflate += (inflateLow + (Random.value * (inflateHigh - inflateLow)));
	}

	if (currentInflate > inflationMax) {
		currentInflate = 0;
		PickMaxInflation();
	}

	var armScale = armsMaxSize * (currentInflate / inflationMax);
	if (armScale < 1) {
		armScale = 1;
	}

	for (var i = 0; i < Arms.Count; i++) {
		Arms[i].localScale = Vector3(armScale, armScale, 1);
	}

}

function PickMaxInflation() {
	inflationMax = inflationMaxLow + (Random.value * (inflationMaxHigh - inflationMaxLow));
}



function EndLevel() {
	PlayerPrefs.SetFloat("Arms", currentInflate / inflationMax);
	Application.LoadLevel("PitOfLegs_Scene");
}
