import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shope from './components/Shope/Shope';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";
import Order from './components/Order/Order';
import ManageInventory from './components/ManageInventory/ManageInventory';
import Error from './components/Shope/Error/Error';
import ProductsDetails from './components/ProductsDetails/ProductsDetails';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch >
          <Route path="/shope">
            <Shope></Shope>
          </Route>
          <Route path="/order">
           <Order></Order>
          </Route>
          <Route path="/manage-inventory">
            <ManageInventory></ManageInventory>
          </Route>
          <Route exact path="/"> 
            <Shope></Shope>
          </Route>
          <Route path="/product/:productKey">
              <ProductsDetails></ProductsDetails>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
