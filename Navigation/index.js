import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
// Components
import RestaurantList from "../Components/RestaurantList";
import RestaurantDetail from "../Components/RestaurantDetail";
import Login from "../Components/Login";
import Signup from "../Components/SignUp";

const Nav = createStackNavigator(
  {
    RestaurantList: RestaurantList,
    RestaurantDetail: RestaurantDetail,
    Login: Login,
    Signup: Signup,
  },
  {
    initialRouteName: "RestaurantList",
  }
);

export default createAppContainer(Nav);
