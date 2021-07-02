import React from "react";
import "./App.css";
import HomePage from "./pages/home-page/home-page.component";
import { Route, Switch } from 'react-router-dom'
import Header from "./components/header/header.component";
import ShopPage from './pages/shop-page/shop-page.component';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}/>  
        <Route path="/creations" component={ShopPage}/>
      </Switch>



    </div>
  );
}

export default App;
