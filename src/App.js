import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/home-page/home-page.component";
import Header from "./components/header/header.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import SigninSignupPage from "./pages/signin-signup-page/signin-signup-page.component";

import { useDispatch } from "react-redux";
import { setCurrentUser } from "./redux/user/user.slice";
import { auth } from "./firebase/firebase.utils";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      dispatch(setCurrentUser(user));
    });
  }, []);

  
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/creations" component={ShopPage} />
        <Route path="/signin" component={SigninSignupPage} />
        <Route path="/signup" component={SigninSignupPage} />
      </Switch>
    </div>
  );
}

export default App;
