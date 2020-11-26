import React from 'react';
import './CSS/App.css';
import Header from './Header';
import CatagoryBar from './CatagoryBar';
import Body from './Body';
import Cart from './Cart';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
        <Header />
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <CatagoryBar />
            <Body className="app_body" />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
