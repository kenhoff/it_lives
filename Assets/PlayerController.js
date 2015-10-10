#pragma strict

public var acceleration : float = 1.0;
public var maxSpeed : float = 5;
public var startingHP : float = 20;

private var rb : Rigidbody2D;

function Awake () {
	rb = GetComponent.<Rigidbody2D>();

}

function FixedUpdate () {
	rb.AddForce(Vector2(acceleration * Time.fixedDeltaTime, 0));
	if (rb.velocity.x > maxSpeed) {
		rb.velocity.x = maxSpeed;
	}
}

function Update() {
	if (Input.GetButtonDown("A")) {
		Debug.Log("Pressed A!");
	}
	startingHP -= Time.deltaTime;
	Debug.Log(startingHP);
	if (startingHP <= 0) {
		Destroy(gameObject);
	}
}
