#pragma strict

// head
private var charge : float;
public var reactionSpeedMultiplier : float = 1.0;
private var calculatedReactionSpeed : float;

// torso
private var giblets : float;
public var healthMultiplier : float = 5.0;
public var torsoScaleMultiplier : float = 0.2;

// arms
private var muscles : float;
public var attackDistanceMultiplier : float = 3.0;
public var attackDamageMultiplier : float = 9.0;
public var attackForceMultiplier : float = 100;

// legs
private var legs : float;
public var speedMultiplier : float = 5.0;

private var anim : Animator;

function Awake() {

	anim = GetComponent.<Animator>();

	giblets = PlayerPrefs.GetFloat("Giblets");
	muscles = PlayerPrefs.GetFloat("Arms");
	charge = PlayerPrefs.GetFloat("Power Level");
	legs = PlayerPrefs.GetFloat("Legs");

	GetComponent.<Health>().startingHP = giblets * healthMultiplier;
	GetComponent.<Mover>().maxSpeed = legs * speedMultiplier;
	calculatedReactionSpeed = charge + reactionSpeedMultiplier;

	anim.SetFloat("SwingSpeed", calculatedReactionSpeed);


	Debug.Log("Giblets: " + PlayerPrefs.GetFloat("Giblets"));
	Debug.Log("Muscles: " + PlayerPrefs.GetFloat("Arms") + "/1.0");
	Debug.Log("Legs: " + PlayerPrefs.GetFloat("Legs"));
	Debug.Log("Charge: " + PlayerPrefs.GetFloat("Power Level") + "/1.0");

}

function Update() {
	if (Input.GetButtonDown("A")) {
		// Debug.Log("Pressed A!");
		// Swing();
		if (!anim.GetCurrentAnimatorStateInfo(0).IsName("Base Layer.Swinging")){
			GetComponent.<PlayerSound>().PlaySwing();
			anim.SetTrigger("Swing");
		}
	}
}

public function Swing() {
	var hit : RaycastHit2D = Physics2D.Raycast(transform.position, Vector2(1, 0), attackDistanceMultiplier, LayerMask.GetMask("Villager"));

	if (hit.collider != null) {
		hit.collider.gameObject.GetComponent.<Health>().Damage(attackDamageMultiplier * muscles);
		hit.collider.gameObject.GetComponent.<Rigidbody2D>().AddForce(Vector2(1,0.5) * attackForceMultiplier * muscles);
		GetComponent.<PlayerSound>().PlayConnects();
	}
}
