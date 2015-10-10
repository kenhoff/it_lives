#pragma strict

public var acceleration : float = 1.0;
public var maxSpeed : float = 5;

private var rb : Rigidbody2D;

function Awake () {
	rb = GetComponent.<Rigidbody2D>();
}

function FixedUpdate () {
	rb.AddForce(Vector2(acceleration * Time.fixedDeltaTime, 0));
	if (maxSpeed < 0) {
		if (rb.velocity.x < maxSpeed) {
			rb.velocity.x = maxSpeed;
		}
	}
	else {
		if (rb.velocity.x > maxSpeed) {
			rb.velocity.x = maxSpeed;
		}
	}
}
