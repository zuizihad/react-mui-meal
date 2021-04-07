import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Meal from "./components/Meal/Meal";
import MealHome from "./components/Meal/MealHome";
import MealDetails from "./components/MealDetails/MealDetails";
import DetailHome from "./components/MealDetails/Index";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/category/:categoryName">
          <MealHome></MealHome>
        </Route>
        <Route path="/meal/:id">
          <DetailHome></DetailHome>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
