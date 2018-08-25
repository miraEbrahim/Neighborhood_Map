import React from 'react';
import scriptLoader from 'react-async-script-loader';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faBars, faTimes, faDirections, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
//import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListView from './components/Layout/ListView';
import { GoogleKey, Putney, cafes } from './components/Map/MapData';
import './App.css';
import { mapStyles } from './components/Map/MapStyles';




library.add( fab, faSearch, faBars, faTimes , faDirections, faMoneyBill );

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
        cafes: cafes,
        map:"",
        marker:"",
        markerArray:[],
        data0: {}
    };
  }

  //https://www.robinwieruch.de/react-fetching-data/
  // componentWillMount(){
  //   fetch('https://api.foursquare.com/v2/venues/search?ll=5.4563251,-0.241421&radius=10000&client_id=J5W2ZXM0AS1ETS4COULHK1L45PVOWVURRMRZBZYC1WMFHZNP&client_secret=SVFNE2PHXCHESPKQZYONPJ4EUKZEJXVYOZ3L0EACPTPU4WE3&v=20180708')
  //     .then(response => response.json())
  //     .then(data => this.setState({ data0: data }));
  // }


  //https://api.foursquare.com/v2/venues/venue_id=55fae9de498ed94afadc0b6c&client_id=J5W2ZXM0AS1ETS4COULHK1L45PVOWVURRMRZBZYC1WMFHZNP&client_secret=SVFNE2PHXCHESPKQZYONPJ4EUKZEJXVYOZ3L0EACPTPU4WE3

  componentWillReceiveProps({isScriptLoadSucceed}){
    if (isScriptLoadSucceed) {
      const map = new window.google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: Putney,
          styles: mapStyles
      });
      this.setState({map:map});

      // console.log("foursquare data: ")
      // fetch('https://api.foursquare.com/v2/venues/search?ll=5.4563251,-0.241421&radius=10000&client_id=J5W2ZXM0AS1ETS4COULHK1L45PVOWVURRMRZBZYC1WMFHZNP&client_secret=SVFNE2PHXCHESPKQZYONPJ4EUKZEJXVYOZ3L0EACPTPU4WE3&v=20180708')
      // .then(response => response.json())
      // // .then(data => this.setState({ data0: data }))
      // .then(data => console.log(data.response.venues[5].name));

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
                    <p>${cafes[count].mapDirection}</p>
                  
                  </div>
                `
              );


                    // <p> ${this.state.data0.reponse.venues[0].name}</p>
              infowindow.open(map, marker);
            };
          })(marker, count));
          markerArray.push({id: cafes[count].id, marker: marker});
        };

        // console.log(`marker array is ${markerArray}`);

        // console.log(markerArray);

        // console.log(markerArray[0].id, markerArray[0].marker)
        this.setState({markerArray: markerArray});
    }
    else{
      alert("script not loaded");
      this.setState({requestWasSuccessful: false});

    }
  }

  
  filterMarker = (filteredList) => {
    // console.log('inside filterMArker: ');
    // console.log(cafeName);
    // console.log(this.state.markerArray[0].id, this.state.markerArray[0].marker.visible);
    // this.state.markerArray[0].marker.visible = false;
    // console.log(filteredList);
   
    let listArray = filteredList.map( (object) => object.id );
    // console.log(listArray);

    let markers = this.state.markerArray;
    for (let l = 0; l < markers.length; l++ ){
      if (listArray.includes(markers[l].id) ) {
      // console.log(markers[l].id);
      markers[l].marker.setVisible(true);
      window.google.maps.event.trigger(markers[l].marker, 'click');
      // infowindow.open(this.state.map, markers[l]);

    }
else {markers[l].marker.setVisible(false);
}
  }
  } 

  clickedMarker = (cafeName, id) => {
    // console.log('name is: ');
    // console.log(cafeName);
    // console.log(this.state.markerArray[0].id, this.state.markerArray[0].marker.visible);
    let marker = this.state.markerArray;
    for ( let m=0; m < marker.length; m++){
      if (marker[m].id === id)
      {
        window.google.maps.event.trigger(marker[m].marker, 'click');
      }
    }
    
    // this.state.markerArray[0].marker.visible = false;
    // console.log(cafeName, id);
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
              <ListView cafes={this.state.cafes} clickedMarker={this.clickedMarker} filterMarker={this.filterMarker}  />
            </div>
            <div>
              <h2 className="price-power"> Pricing By: </h2>
              <p className="fa-p"><FontAwesomeIcon icon={['fab', 'foursquare']}/></p>
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