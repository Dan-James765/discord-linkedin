import React from 'react';
import Header from './app/components/Header';
import Hero from './app/components/Hero';
import { Route, Switch  } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './app/components/Home';
import { useAuthState } from "react-firebase-hooks/auth"
import { Redirect } from "react-router-dom"
import { auth } from './firebase';







function App() {

  const [user] = useAuthState(auth)


  return (
    <div className="App">

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

      </Switch>

      </Router>
      
      
    </div>
  );
}

export default App;
