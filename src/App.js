import React from 'react';
import './styles/App.scss';
import SignIn from './components/SignIn/SignIn'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';
import SelectContent from './components/SelectContent/SelectContent';

function App() {

  return (
    <div className="App">
    <nav>

    </nav>
    <main>
      <Switch>
        <Route exact path='/' component={SignIn}/>
        <Route exact path='/sources' component={SelectContent}/>
      </Switch>
    </main>
    </div>
  );
}

export default App;
