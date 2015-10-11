#pragma strict


public var speed : float;
public var direction : float;

private var rb : Rigidbody2D;


function Start() {
	rb = GetComponent.<Rigidbody2D>();
}

function Update () {
	rb.velocity.x = direction * speed;
}
