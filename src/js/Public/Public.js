import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Register from "./Register/Register";
import PasswordRecovery from "./PasswordRecovery/PasswordRecovery";
// import Footer from "./Footer/Footer";
// import About from "./About/About";
// import Search from "./Search/Search";

function Public() {
  return (
    <main>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Register} />
          <Route path="/recoverpass" component={PasswordRecovery} />
        </Switch>
      </Router>
    </main>
  );
}

export default Public;