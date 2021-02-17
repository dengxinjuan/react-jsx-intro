const App = () => {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Xinjuan" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
