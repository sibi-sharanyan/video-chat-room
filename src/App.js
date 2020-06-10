import React from "react";
import "./App.css";
import VideoChat from "./VideoChat";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Join from "./Join";

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>Video Chat with Twilio</h1>
      </header>
      <main>
        <Router>
          <Switch>
            <Route path="/" exact>
              <div
                style={{ height: "30vh" }}
                className="d-flex flex-column justify-content-around align-items-center"
              >
                <Link to="/create">
                  <button type="button" class="btn btn-primary">
                    Create a room
                  </button>
                </Link>
                {/* <Link to="/join">
                  <button type="button" class="btn btn-warning">
                    Join a room
                  </button>
                </Link> */}
              </div>
            </Route>
            <Route path="/create" exact>
              <VideoChat />
            </Route>
            <Route path="/join" exact>
              <Join />
            </Route>
            <Route path="/room/:id" component={Join} />
          </Switch>
        </Router>
      </main>
      <footer>
        <p>
          Made with{" "}
          <span role="img" aria-label="React">
            ⚛️
          </span>{" "}
          by <a href="https://github.com/sibi-sharanyan/">Sibi</a>
        </p>
      </footer>
    </div>
  );
};

export default App;
