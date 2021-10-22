import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Feelings from "./components/feelings/Feelings";
import Navbar from "./components/layout/Navbar";
import AuthContext from "./context/AuthContext";
import Home from "./components/layout/Home";

function Router() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        {loggedIn === false && (
          <>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </>
        )}
        {loggedIn === true && (
          <>
              <Navbar/>
            <Route path="/feeling">
              <Feelings />
            </Route>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
