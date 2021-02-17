const App = () => {
  return (
    <div>
      <Tweet
        username="Jenn"
        realname="Brad"
        date="1980"
        message="He is a funny guy!"
      />
      <Tweet
        username="Karla"
        realname="Peter"
        date="1987"
        message="She is a tall girl!"
      />
      <Tweet />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
