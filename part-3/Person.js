const Person = ({
  name = "SampleUser",
  age = "20",
  hobby = ["hobby1", "hobby2", "hobby3"],
}) => {
  return (
    <div class="card">
      <h2>Learn More Information About the Person</h2>
      <div class="card-body">
        <p>Name: {name.length > 8 ? name.substring(0, 6) : name}</p>
        <p>Age: {age}</p>
        <p>Message: {age >= 18 ? "please go vote!" : "you must be 18"}</p>
        <ul>
          {hobby.map((h) => (
            <li>{h}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
