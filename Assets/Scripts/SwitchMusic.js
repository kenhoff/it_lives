#pragma strict

function Awake () {
	var music = GameObject.FindWithTag("Music");
	if (music) {
		Destroy(music);
	}
}

function Update () {

}
