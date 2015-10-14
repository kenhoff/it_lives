#pragma strict

function Start () {

}

function Update () {
	if (Input.GetButtonDown("A")) {
		Application.LoadLevel("GibletGrinder_Scene");
	}
}
