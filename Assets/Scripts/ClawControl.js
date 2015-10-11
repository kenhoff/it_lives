#pragma strict

public var clawSpeed : float = 10.0;

private var rb :Rigidbody2D;

function Awake () {
	rb = GetComponent.<Rigidbody2D>();
}

function Update () {

	rb.MovePosition(Vector2(rb.position.x + (Input.GetAxis("Horizontal") * Time.deltaTime * clawSpeed), rb.position.y));

}
