#pragma strict

public var FollowObject : Transform;

private var initialOffset : Vector3;

function Awake () {
	initialOffset = transform.position - FollowObject.position;
}

function Update () {
	if (FollowObject) {
		transform.position = FollowObject.position + initialOffset;
	}
}
