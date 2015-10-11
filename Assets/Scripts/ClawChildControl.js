#pragma strict

private var anim : Animator;

public var grabPoint : Transform;
public var grabRadius : float = 0.5;

private var legs : GameObject;


function Awake () {
	anim = GetComponent.<Animator>();

}

function Update () {
	if (Input.GetButtonDown("A")) {
		if (!anim.GetCurrentAnimatorStateInfo(0).IsName("Base Layer.ClawDrop")) {
			anim.SetTrigger("FireClaw");
		}
	}

}


public function Grab() {
	var hit : Collider2D = Physics2D.OverlapCircle(grabPoint.position, grabRadius, LayerMask.GetMask("Legs"));

	if (hit && hit.CompareTag("Legs")) {
		legs = hit.gameObject;
		legs.transform.parent = transform;
		legs.GetComponent.<LegsControl>().enabled = false;
		Destroy(legs.GetComponent.<Rigidbody2D>());
	}

}

public function CheckIfGotLegs() {

	if (legs) {
		PlayerPrefs.SetFloat("Legs", legs.GetComponent.<LegsControl>().speed);
		Application.LoadLevel("FlipTheSwitch_Scene");
	}
}
