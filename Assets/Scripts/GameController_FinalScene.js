#pragma strict

public var Player : Transform;
public var ScoreText : UI.Text;

private var score : float;

function Start () {

}

function Update () {
	if (Player)  {
		if (Player.position.x > score) {
			score = Player.position.x;
			ScoreText.text = "Score: " + score.ToString("n0");
		}
	}
	// Debug.Log(score);
}
