import React from 'react';
import './App.css';
import Header from './Header';
import Home from "./Home";
import Tabs from "./components/Tabs";
import Slideshow from './ImageSlider';
import ScrollView from "./ScrollView";




function App() {
  return (
    //BEM
    <div className="App">

      <Header />
      <Tabs>
        <div label="Your Amazon">

        </div>
        <div label="Mobiles">

        </div>
        <div label="Best Sellers">

        </div>
        <div label="Today's Deals">

        </div>
        <div label="Prime">

        </div>
        <div label="Computers">

        </div>
        <div label="Pantry">

        </div>
        <div label="Electronics">

        </div>
        <div label="Books">

        </div>
        <div label="New Releases">

        </div>
        <div label="Gift Ideas">

        </div>
        <div label="Customer Service">

        </div>
        <div label="Fashion">

        </div>
        <div label="Amazon Pay">

        </div>
        <div label="Home & Kitchen">

        </div>
        <div label="Sell">

        </div>
      </Tabs>
      <Slideshow />
      <ScrollView />
      <Home />
    </div>
  );
}

export default App;
