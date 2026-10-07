
function UserCard({ name, role, age }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{role}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default UserCard;