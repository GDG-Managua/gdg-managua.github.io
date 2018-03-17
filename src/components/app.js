import { h, Component } from "preact";
import { Router } from "preact-router";

import Home from "../routes/home";
import Event from "../routes/event";
import Organizer from "../routes/organizer";
import Sponsor from "../routes/sponsor";

// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app">
        <div className="intro__image">
          <Router onChange={this.handleRoute}>
            <Home path="/" />
            <Event path="/events" />
            <Organizer path="/organizers" />
            <Sponsor path="/sponsors" />
          </Router>
        </div>
      </div>
    );
  }
}
