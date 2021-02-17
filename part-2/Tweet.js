const Tweet = ({
  username = "xinjuan",
  realname = "jennifer",
  date = "2020",
  message = "You are awesome!",
}) => {
  return (
    <div class="alert alert-success" role="alert">
      <h1>Tweet</h1>
      <p>Username:{username}</p>
      <p>Real Name:{realname}</p>
      <p>Date: {date}</p>
      <p>Message: {message}</p>
    </div>
  );
};
