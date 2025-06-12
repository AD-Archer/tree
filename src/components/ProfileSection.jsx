const ProfileSection = () => {
  return (
    <div className="profile-section">
      <img 
        src="/personal/antonioarcher.webp" 
        alt="Antonio Archer" 
        className="profile-img"
      />
      <h1 className="profile-name">
        Antonio Archer
      </h1>
      <div className="profile-bio">
        <p>Full Stack Software Engineer</p>
        <p>
          Credited in Reactjs, Javascript, and certified in Python. Working hard to make tech fun and practical to improve human lives.
        </p>
      </div>
    </div>
  );
};

export default ProfileSection;