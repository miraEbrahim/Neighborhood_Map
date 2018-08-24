import React from 'react';
import scriptLoader from 'react-async-script-loader';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faBars, faTimes, faDirections } from '@fortawesome/free-solid-svg-icons';
//import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListView from './components/Layout/ListView';
import { GoogleKey, Putney, cafes } from './components/Map/MapData';
import './App.css';
import { mapStyles } from './components/Map/MapStyles';




library.add(faSearch, faBars, faTimes , faDirections);

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
        cafes: cafes,
        map:"",
        marker:""
    };
  }

  componentWillReceiveProps({isScriptLoadSucceed}){
    if (isScriptLoadSucceed) {
      const map = new window.google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: Putney,
          styles: mapStyles
      });
      this.setState({map:map});
      //InfoWindo & Markers
      const  infowindow =  new window.google.maps.InfoWindow({});

      let  marker, count;
      let markerArray = [];

      for (count = 0; count < cafes.length; count++) {
          marker = new window.google.maps.Marker({
            position: new window.google.maps.LatLng(cafes[count].latitude, cafes[count].longitude),
            icon: {
              path: window.google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
              scale: 5,
              strokeColor: '#ce255e'
            },
            map: map,
            title: this.state.cafes[count].name
          });

          window.google.maps.event.addListener(marker, 'click', (function (marker, count) {
            return function () {
              infowindow.setContent(
                `<div tabIndex="0" class="infoWindow">
                    <h4>${cafes[count].name}</h4>
                    <p>${cafes[count].cafeStreetAddress}</p>
                    <p>${cafes[count].cafeCity}${cafes[count].cafeZipCode}</p>
                    <a href=${cafes[count].URL}>Click Here For More Info</a>
                  </div>
                `
              );
              infowindow.open(map, marker);
            };
          })(marker, count));
          markerArray.push({id: cafes[count].id, marker: marker});
        };

        console.log(`marker array is ${markerArray}`);

        console.log(markerArray);

        console.log(markerArray[0].id, markerArray[0].marker)
    }
    else{
      alert("script not loaded");
      this.setState({requestWasSuccessful: false});
    }
  }

  clickedMarker = (cafeName) => {
    console.log('name is: ');
    console.log(cafeName);
    //loop througss
  } 

  render(){
    return (
      <div className="App">
        <div className="app-header"><h2 className="header-title"> Putney Neighbourhood's Cafes </h2></div>
        <div className="off-canvas">
          <input id="hamburger" type='checkbox' className="hamburger-checkbox" />
          <label for="hamburger" className="hamburger-label" role="button" aria-labelledby="menu"><FontAwesomeIcon icon="bars"/></label>
          <nav id="list-toggle" role="list" className="sidebar" onClick={this.toggleList}>
            <div className="list-view">
              <ListView cafes={this.state.cafes} clickedMarker={this.clickedMarker} />
            </div>
          </nav>
          <main role="main" className="map-body">
            <div id="map"></div>
          </main>
        </div>
        <div className="app-footer">
          <h4 className="footer-title"> Maryam Ebrahim @Udacity FEND Project </h4>
        </div>
      </div>
    );
  }
}

export default scriptLoader(
  [`https://maps.googleapis.com/maps/api/js?key=${GoogleKey}`]
)(App)