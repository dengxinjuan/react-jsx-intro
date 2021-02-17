const App = () => {
  return (
    <div>
      <Person age="25" name="jess" hobby={["swimming", "hiking"]} />
      <Person
        age="17"
        name="1234567890"
        hobby={["running", "watching movies", "doing nothing"]}
      />
      <Person age="30" name="Iamasuperlongname" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
