function ProfileCard({ name, role, skill }) {
  return (
    <div className="profile-card">
      <div className="avatar">{name.charAt(0)}</div>

      <h2>{name}</h2>
      <p>{role}</p>

      <span className="skill">{skill}</span>
    </div>
  );
}

export default ProfileCard;