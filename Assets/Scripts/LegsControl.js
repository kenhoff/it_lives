#pragma strict


public var speed : float;
public var direction : Vector2;

private var rb : Rigidbody2D;


function Awake() {
	rb = GetComponent.<Rigidbody2D>();
}

function Update () {
	rb.velocity = direction * speed;

}
