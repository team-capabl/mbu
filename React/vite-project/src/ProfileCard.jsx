function ProfileCard(props) {
  return (
    <div className="card">
        <img
            src={props.imageUrl}
            alt="some image"
            crossOrigin="anonymous"
        />
      <h3>
        <strong>Name: </strong>
        {props.name}
      </h3>
      <h3>
        <strong>Age: </strong>
        {props.age}
      </h3>
      <h3>Hobbies:</h3>
      <ul>
        {props.hobbies.map((hobby) => {
          return <li>{hobby}</li>;
        })}
      </ul>
    </div>
  );
}

export default ProfileCard;
