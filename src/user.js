import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css';

import Navbar from "./components/navbar.customer"

import RestaurantDisplya from "./components/Homepage/newsevent.customer"
import LocationMap from "./components/map.customer"
import Favorite from "./components/FavoritePage/favorite.customer"
import UserSystem from "./components/usersystem.customer"
// import UserLogin from "./components/CustomerLoginpage/loginpage.customer"
import CreateUser from "./components/createuser.customer"
import UserEdit from "./components/userEdit.customer"

function User() {
  return (

    <Router>
      <Navbar />
      <br />
      <Route path ="/home" component = {RestaurantDisplya} />
      <Route path="/user/location" component={LocationMap} />
      <Route path="/user/favorite" component={Favorite} />
      <Route path="/user/profile" component={UserSystem} />
      {/* <Route path="/user/login" component={UserLogin} /> */}
      <Route path="/user/register" component={CreateUser} />
      <Route path="/user/edit/:id" component={UserEdit}/>

    </Router>


  );
}

export default User;