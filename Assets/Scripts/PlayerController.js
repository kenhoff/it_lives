#pragma strict


// legs
public var acceleration : float = 1.0;
public var maxSpeed : float = 5;


// arms
public var attackDistance : float = 1.0;
public var attackDamage : float = 9.0;
public var attackForce : float = 100;

function Update() {
	if (Input.GetButtonDown("A")) {
		Debug.Log("Pressed A!");
		Swing();
	}
}

function Swing() {
	var hit : RaycastHit2D = Physics2D.Raycast(transform.position, Vector2(1, 0), attackDistance, LayerMask.GetMask("Villager"));

	if (hit.collider != null) {
		hit.collider.gameObject.GetComponent.<Health>().Damage(attackDamage);
		hit.collider.gameObject.GetComponent.<Rigidbody2D>().AddForce(Vector2(1,0.5) * attackForce);
	}
}
