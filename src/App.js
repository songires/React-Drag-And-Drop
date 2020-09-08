import React from 'react';
import './App.css';
import 'carbon-components/scss/globals/scss/styles.scss';
import CollectionTile from "./CollectionTile"
import DroppableTile from "./DroppableTile"
function App() {
  return (
    <div className="App">
      <div className="bx--row">
        <div className="bx--col-lg-12"><CollectionTile /></div>
      </div>
      <div className="bx--row">
        <div className="bx--col"><DroppableTile id='1' /></div>
        <div className="bx--col"><DroppableTile id='2' /></div>
        <div className="bx--col"><DroppableTile id='3' /></div>
        <div className="bx--col"><DroppableTile id='4' /></div>
        <div className="bx--col"><DroppableTile id='5' /></div>

      </div>
    </div>
  );
}

export default App;
