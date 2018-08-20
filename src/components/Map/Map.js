import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import scriptLoader from 'react-async-script-loader';
import { GoogleKey, Putney, cafes } from './MapData';
import {mapStyles } from './MapStyles';


class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cafes: cafes,
            map:'',
            marker:''
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

            const  infowindow =  new window.google.maps.InfoWindow({});
            let  marker, count;
            for (count = 0; count < cafes.length; count++) {
                marker = new window.google.maps.Marker({
                  position: new window.google.maps.LatLng(cafes[count].latitude, cafes[count].longitude),
                  map: map,
                  title: this.state.cafes[count].name
                });
            window.google.maps.event.addListener(marker, 'click', (function (marker, count) {
                  return function () {
                    infowindow.setContent(`<div tabIndex="0" class="infoWindow">
                    <h4>${cafes[count].name}</h4>
                    <p>${cafes[count].cafeStreetAddress}</p>
                    <p>${cafes[count].cafeCity}${cafes[count].cafeZipCode}</p>
                    <a href=${cafes[count].URL}>Click Here For More Info</a>
                    
                    </div>` );
                    infowindow.open(map, marker);
                  }
                })(marker, count))};

           
        }
        else{
            alert("script not loaded");
            this.setState({requestWasSuccessful: false})
        }
    }

    render(){
        return(
            <div>
                <div id="map" style={{height: "100vh"}}></div>
            </div>
        )
    }
}

export default scriptLoader(
    [`https://maps.googleapis.com/maps/api/js?key=${GoogleKey}`]
)(Map)