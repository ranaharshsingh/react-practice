import { useState } from "react";
import "./App.css";

function App() {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  function handleLike() {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);
    }
  }

  return (
    <div className="post">
      <h2>Harsh's Post</h2>

      <div className="photo">📸</div>

      <button onClick={handleLike}>
        {liked ? "❤️ Liked" : "🤍 Like"}
      </button>

      <p>{likes} likes</p>
    </div>
  );
}

export default App;