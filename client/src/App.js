import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home/home-page.component';
import NavBar from './components/nav-bar/nav-bar.component';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
