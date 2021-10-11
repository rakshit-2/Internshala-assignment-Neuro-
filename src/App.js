import "./App.css";
import Cart from "./components/organisms/cartFiles/Cart";
import Main from "./components/organisms/mainFile/main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import Sidepanel from "./components/organisms/sidepanelFiles/sidepanel";
import Mans from "./components/organisms/manFiles/mans";
import Women from "./components/organisms/womenFiles/women";
import Electronics from "./components/organisms/electronicsFile/electronics";
import Jewelery from "./components/organisms/jeweleryFile/jewelery";
import Information from  "./components/organisms/informationFile/information";


function App() {
  // state for changing cart elments when user clicks the add to cart button from the cards in home section
  const [cartElements,setCartElements]=useState([]);
  // state for changing screen to info page when user clicks the info button from the cards in the home section
  const [info,setInfo]=useState();
  
  // function which changes the state for cart elements
  function handleState(id)
  {
    console.log(cartElements)
    var ele=cartElements;
    ele.push(id);
    setCartElements(ele);
  }
  
  // function which runs when the user press empty cart button
  function emptyCart()
  {
    setCartElements([]);
  }
  
  // function which changes the state for info page
  function infoButtonPressed(obj)
  {
    setInfo(obj);

  }
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Main handleState={handleState} infoButton={infoButtonPressed}/>
        </Route>

        <Route exact path="/cart">
          <Cart cartElements={cartElements} empty={emptyCart}/>
        </Route>

        <Route exact path="/sidepanel">
          <Sidepanel />
        </Route>

        <Route exact path="/mans">
          <Mans />
        </Route>

        <Route exact path="/womens">
          <Women />
        </Route>

        <Route exact path="/electronics">
          <Electronics />
        </Route>

        <Route exact path="/jewelery">
          <Jewelery />
        </Route>

        <Route exact path="/information">
          <Information in={info}/>
        </Route>
        <div>
                
            </div>

      </Switch>
    </Router>
  );
}

export default App;

