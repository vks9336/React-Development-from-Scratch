import { useState } from "react";

export default function TabContent({ item }) {
  const [showDetails, setShowDetails] = useState(true);
  const [likes, setLikes] = useState(0);

  function handleInc() {
    setLikes(likes + 1);
  }

  function handleClick() {
    setLikes(likes + 3);
  }

  function handleUndu() {
    setShowDetails(true);
    setLikes(0);
  }

  function handleUnduInSec() {
    setTimeout(handleUndu, 2000);
  }

  return (
    <div className="tab-content">
      <h4>{item.summary}</h4>
      {showDetails && <p>{item.details}</p>}

      <div className="tab-actions">
        <button onClick={() => setShowDetails((h) => !h)}>
          {showDetails ? "Hide" : "Show"} details
        </button>

        <div className="hearts-counter">
          <span>{likes} ❤️</span>
          <button onClick={handleInc}>+</button>
          <button onClick={handleClick}>+++</button>
        </div>
      </div>

      <div className="tab-undo">
        <button onClick={handleUndu}>Undo</button>
        <button onClick={handleUnduInSec}>Undo in 2s</button>
      </div>
    </div>
  );
}
