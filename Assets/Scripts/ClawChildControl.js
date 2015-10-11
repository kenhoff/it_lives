#pragma strict

private var anim : Animator;

public var grabPoint : Transform;
public var grabRadius : float = 0.2;

private var legs : GameObject;

public var ClawDown : AudioClip;
public var ClawGrab : AudioClip;
public var ClawUp : AudioClip;
private var sfx : AudioSource;

function Awake () {
	anim = GetComponent.<Animator>();
	sfx = GetComponent.<AudioSource>();

}

function Update () {
	if (Input.GetButtonDown("A")) {
		if (!anim.GetCurrentAnimatorStateInfo(0).IsName("Base Layer.ClawDrop")) {
			anim.SetTrigger("FireClaw");
			sfx.clip = ClawDown;
			sfx.Play();
		}
	}

}


public function Grab() {
	var hit : Collider2D = Physics2D.OverlapCircle(grabPoint.position, grabRadius, LayerMask.GetMask("Legs"));

	sfx.clip = ClawGrab;
	sfx.Play();
	Invoke("ClawReturnSound", 0.25);

	if (hit && hit.CompareTag("Legs")) {
		legs = hit.gameObject;
		legs.transform.parent = transform;
		legs.GetComponent.<LegsControl>().enabled = false;
		Destroy(legs.GetComponent.<Rigidbody2D>());
	}
}

function ClawReturnSound() {
	sfx.clip = ClawUp;
	sfx.Play();
}

public function CheckIfGotLegs() {

	if (legs) {
		PlayerPrefs.SetFloat("Legs", legs.GetComponent.<LegsControl>().speed);
		Application.LoadLevel("FlipTheSwitch_Scene");
	}
}
