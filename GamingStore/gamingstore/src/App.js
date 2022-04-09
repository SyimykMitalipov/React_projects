import React from 'react';
import './index.css';
import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
import { Header } from './components/header';
import { HomePage } from './pages/home-page';
const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
      <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
