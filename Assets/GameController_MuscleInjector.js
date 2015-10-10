#pragma strict

public var inflationMaxHigh : float = 100.0;
public var inflationMaxLow : float = 60.0;

public var inflateHigh : float = 8.0;
public var inflateLow : float = 12.0;

private var currentInflate : float = 0.0;
private var inflationMax : float;

public var Arms : Transform;
public var armsMaxSize : float;

function Awake () {
	currentInflate = 0.0;
	PickMaxInflation();
}

function Update () {
	if (Input.GetButtonDown("A")) {
		currentInflate += (inflateLow + (Random.value * (inflateHigh - inflateLow)));
	}

	if (currentInflate > inflationMaxHigh) {
		Debug.Log("POP!");
		currentInflate = 0;
		PickMaxInflation();
	}

	var armScale = armsMaxSize * (currentInflate / inflationMax);
	if (armScale < 1) {
		armScale = 1;
	}

	Arms.localScale = Vector3(armScale, armScale, 1);

}

function PickMaxInflation() {
	inflationMax = inflationMaxLow + (Random.value * (inflationMaxHigh - inflationMaxLow));
	Debug.Log("Inflation Max: " + inflationMax);
}
