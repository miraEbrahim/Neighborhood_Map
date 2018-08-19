import React, { Component } from 'react';
import './App.css';
import Map from './components/Map/Map';
//import OffCanvas from './components/Layout/OffCanvas';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faBars, faTimes, faDirections } from '@fortawesome/free-solid-svg-icons'; 
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListView from './components/Layout/ListView';
import { cafes } from './components/Map/MapData';
//import ListView from './components/Layout/ListView';




library.add(faSearch, faBars, faTimes , faDirections);

class App extends Component {
  state = {
    cafes: cafes,
    map:''
}
  render() {
    return (
      <div className="App">
        <div className="app-header"><h2 className="header-title"> my react</h2></div>
        <div className="off-canvas">
          <input id="hamburger" type='checkbox' className="hamburger-checkbox" />
          <label for="hamburger" className="hamburger-label" role="button" aria-labelledby="menu"><FontAwesomeIcon icon="bars"/></label>
          <nav id="list-toggle" role="list" className="sidebar" onClick={this.toggleList}>
                    <div className="list-view">
                        <input 
                            type="text" 
                            placeholder="Filter by Business Name" 
                            className="search-cafes" 
                            role="search" 
                            aria-labelledby="search"
                            id="search-bar"
                        
                        />
                        <Button outline color="danger">Search
                        <FontAwesomeIcon icon="search"/>
                        </Button>
                        <ListView cafes={this.state.cafes} />
                        </div>
                       
                    
            </nav>
          <main role="main" className="map-body">
          <Map />
          </main>
        </div>
        <div className="app-footer"><h4 className="footer-title"> my react</h4></div>
      </div>
    );
  }
}

export default App;
