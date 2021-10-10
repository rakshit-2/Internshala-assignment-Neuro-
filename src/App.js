import "./App.css";
import Cart from "./components/js/Cart";
import Main from "./components/js/main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import Sidepanel from "./components/js/sidepanel";

function App() {
  const [cartElements,setCartElements]=useState([]);
  
  
  function handleState(id)
  {
    console.log(cartElements)
    var ele=cartElements
    ele.push(id)
    setCartElements(ele)
  }
  
  function emptyCart()
  {
    setCartElements([])
  }
  
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Main handleState={handleState}/>
        </Route>

        <Route exact path="/cart">
          <Cart cartElements={cartElements} empty={emptyCart}/>
        </Route>

        <Route exact path="/sidepanel">
          <Sidepanel />
        </Route>
        <div>
                
            </div>

      </Switch>
    </Router>
  );
}

export default App;

