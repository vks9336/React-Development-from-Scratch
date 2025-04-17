function FinishedScreen({ points, totalPoints, highscore, dispatch }) {
  const average = (points * 100) / totalPoints;

  let emoji;

  if (average === 100) emoji = "🥇";
  if (average >= 80 && average < 100) emoji = "🎉";
  if (average >= 50 && average < 80) emoji = "🙃";
  if (average > 0 && average < 50) emoji = "😊";
  if (average === 0) emoji = "🤦";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored <strong>{points}</strong> out of{" "}
        {totalPoints}({Math.ceil(average)}%)
      </p>
      <p className="highscore">(Highest Score : {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishedScreen;
