#pragma strict

public var GibletCollector : GameObject;

public var time : float = 60.0;

public var uiTimer : UI.Text;

function Start () {

}

function Update () {
	if (time <= 0) {
		EndLevel();
	}
	time -= Time.deltaTime;
	uiTimer.text = time.ToString("n");
}

function EndLevel() {
	// Debug.Log("Done!");
	var score = GibletCollector.GetComponent.<Collector>().score;
	if (score <= 1) {
		score = 1;
	}
	PlayerPrefs.SetFloat("Giblets", score);
	Application.LoadLevel("MuscleInjector_Scene");
	// Debug.Log(PlayerPrefs.GetFloat("Giblets"));
}
