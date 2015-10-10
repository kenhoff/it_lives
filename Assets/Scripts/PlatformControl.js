#pragma strict

public var maxTilt : float = 30.0;

private var input : float;
private var rb : Rigidbody2D;

function Awake () {
	rb = GetComponent.<Rigidbody2D>();
}

function Update () {

	input = Input.GetAxis("Horizontal");
	rb.MoveRotation(-input * maxTilt);

}
