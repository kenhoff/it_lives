#pragma strict

public var monsterSwing : AudioClip;
public var monsterConnects : AudioClip;
public var monsterInjured : AudioClip;
public var monsterDies : GameObject;

private var monsterAudio : AudioSource;

function Awake () {
	monsterAudio = GetComponent.<AudioSource>();
}

function Update () {

}

function PlaySwing() {
	monsterAudio.clip = monsterSwing;
	monsterAudio.Play();
}

function PlayConnects() {
	monsterAudio.clip = monsterConnects;
	monsterAudio.Play();
}



function PlayInjured() {
	monsterAudio.clip = monsterInjured;
	monsterAudio.Play();
}
function PlayDies() {
	Instantiate(monsterDies);
}
