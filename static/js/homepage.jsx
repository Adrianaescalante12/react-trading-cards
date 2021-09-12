"use strict";

function Homepage() {
  return (
    <React.Fragment>
      <h2>Welcome to whatever this is.</h2>
      <a href="/cards">Play Cards</a>
      <br />
      <img src="/static/img/balloonicorn.jpg" />
    </React.Fragment>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
