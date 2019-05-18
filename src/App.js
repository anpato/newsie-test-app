import React from 'react';
import './App.css';
import Trending from './components/Trending/Trending';
import SignIn from './components/SignIn/SignIn'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';

function App() {

  return (
    <div className="App">
    <main>
        <Route to='/' component={SignIn}/>
        <Route to='/dashboard' component={Dashboard}/>
    </main>
    </div>
  );
}

export default App;
