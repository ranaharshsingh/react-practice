import "./App.css";
import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div className="app">
      <h1>My React Practice</h1>
      <p className="subtitle">Learning React, one step at a time.</p>

      <div className="profiles">
        <ProfileCard
          name="Harsh Singh"
          role="Frontend Developer"
          skill="React"
        />

        <ProfileCard
          name="Riya Sharma"
          role="UI Designer"
          skill="CSS"
        />
      </div>
    </div>
  );
}

export default App;