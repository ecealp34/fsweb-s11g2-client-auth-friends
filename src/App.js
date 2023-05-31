import React from "react"
import Login from './Login';
import Header from "./Header";
import FriendsList from "./FriendsList";
import Friend from "./Friend";
import AddFriend from "./AddFriend";
import PrivateRoute from "./PrivateRoute";
import AuthContextProvider from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';


function App() {
  return (
    <AuthContextProvider>
      <Router>
        <div className="App">
          <Header />
          <Switch>
           <Route path="/login">
              <Login />
           </Route>
           <PrivateRoute path="/friends-list/:id">
              <Friend />
            </PrivateRoute>
            <PrivateRoute path="/friends">
              <FriendsList />
            </PrivateRoute>
            <PrivateRoute path="/add-friend">
              <AddFriend />
            </PrivateRoute>
            <PrivateRoute path="/">
              <FriendsList />
            </PrivateRoute>
            <PrivateRoute path="/add-friend">{}</PrivateRoute>
          </Switch>
        </div>
      </Router>
    </AuthContextProvider>
  );
}

export default App;

