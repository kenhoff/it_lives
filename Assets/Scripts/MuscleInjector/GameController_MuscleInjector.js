#pragma strict

import System.Collections.Generic;
public var Arms : List.<Transform> = new List.<Transform>();
public var PumpingSoundClips : List.<AudioClip> = new List.<AudioClip>();
public var PoppingSoundClip : AudioClip;

private var sfx : AudioSource;





public var inflationMaxHigh : float = 100.0;
public var inflationMaxLow : float = 60.0;

public var inflateHigh : float = 8.0;
public var inflateLow : float = 12.0;

private var currentInflate : float = 0.0;
private var inflationMax : float;

public var armsMinSize : float;
public var armsMaxSize : float;

public var deflateRate : float = 0.1;

public var time : float = 20.0;

public var uiTimer : UI.Text;



function Awake () {
	currentInflate = 0.0;
	sfx = GetComponent.<AudioSource>();

	PickMaxInflation();
}

function Update () {

	if (time <= 0) {
		EndLevel();
	}
	time -= Time.deltaTime;
	uiTimer.text =  time.ToString("n0");


	if (Input.GetButtonDown("A")) {
		Inflate();
	}


	var armScale = armsMinSize + (armsMaxSize * (currentInflate / inflationMax));
	if (armScale < armsMinSize) {
		armScale = armsMinSize;
	}

	for (var i = 0; i < Arms.Count; i++) {
		Arms[i].localScale = Vector3(armScale, armScale, 1);
	}


	currentInflate -= currentInflate * deflateRate * Time.deltaTime;
	Debug.Log(currentInflate);

	if (currentInflate < 0) {
		currentInflate = 0;
	}

}

function Inflate() {
	if (currentInflate > inflationMax) {
		sfx.clip = PoppingSoundClip;
		sfx.Play();
		currentInflate = 0;
		PickMaxInflation();
	}
	else {
		currentInflate += (inflateLow + (Random.value * (inflateHigh - inflateLow)));
		sfx.clip = PumpingSoundClips[(currentInflate / inflationMax) * (PumpingSoundClips.Count - 1)];
		sfx.Play();
	}
}

function PickMaxInflation() {
	inflationMax = inflationMaxLow + (Random.value * (inflationMaxHigh - inflationMaxLow));
}



function EndLevel() {
	PlayerPrefs.SetFloat("Arms", currentInflate / inflationMax);
	Application.LoadLevel("PitOfLegs_Scene");
}
