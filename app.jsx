import UserCard from "./usercard";

function App() {
  return (
    <div>
      <h1>My React Practice</h1>

      <UserCard
        name="Harsh"
        role="Frontend Developer"
        age={20}
      />

      <UserCard
        name="Riya"
        role="UI Designer"
        age={21}
      />
    </div>
  );
}

export default App;