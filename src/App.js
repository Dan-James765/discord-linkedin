import React from 'react';
import Header from './app/components/Header';
import Hero from './app/components/Hero';
import { Route, Switch  } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './app/components/Home';
import { useAuthState } from "react-firebase-hooks/auth"
import { Redirect } from "react-router-dom"
import { auth } from './firebase';
import Trending from './app/components/Trending';







function App() {

  const [user] = useAuthState(auth)


  return (
    <>

      <Router>
      {!user && <Redirect to="/"/>}
        <Switch>

          <Route exact path="/">
      <Header/> 
      <Hero/> 
      </Route>
      
      <Route exact path="/inbox">
        <Home/> 
      </Route>

      <Route exact path="/inbox/:id">
        <Home/> 
      </Route>

      <Route exact path="/trending">
        <Trending/> 

      </Route>

      </Switch>

      </Router>
      
      
    </>
  );
}

export default App;
