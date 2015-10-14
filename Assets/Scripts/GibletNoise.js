#pragma strict

import System.Collections.Generic;
public var gibletBounceNoises : List.<AudioClip>;
public var trashBounceNoises : List.<AudioClip>;


private var sfx : AudioSource;


function Awake () {

	sfx = GetComponent.<AudioSource>();


}

function OnCollisionEnter2D() {
	if (gameObject.CompareTag("Giblet")) {
		sfx.clip = gibletBounceNoises[Random.Range(0, gibletBounceNoises.Count)];
		sfx.Play();
	}
	if (gameObject.CompareTag("Trash")) {
		sfx.clip = trashBounceNoises[Random.Range(0, trashBounceNoises.Count)];
		sfx.Play();
	}

}
