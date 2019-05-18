import React from 'react';
import './App.css';
import SignIn from './components/SignIn/SignIn'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';

function App() {

  return (
    <div className="App">
    <nav>

    </nav>
    <main>
      <Switch>
        <Route exact path='/' component={SignIn}/>
        <Route exact path='/dashboard' component={Dashboard}/>
      </Switch>
    </main>
    </div>
  );
}

export default App;
