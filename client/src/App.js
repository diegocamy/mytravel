import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/home/home-page.component';
import SearchPage from './pages/search/search-page.component';
import NavBar from './components/nav-bar/nav-bar.component';
import FooterComponent from './components/footer/footer.component';
import DestinationsPage from './pages/destinations/destinations-page.component';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/search/:category" component={SearchPage} />
        <Route exact path="/destinations" component={DestinationsPage} />
      </Switch>
      <FooterComponent />
    </div>
  );
}

export default App;
