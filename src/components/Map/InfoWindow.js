import React, { Component } from 'react';

class InfoWindow extends Component {
    
var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            'sandstone rock formation in the southern part of the '+
            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
            'south west of the nearest large town, Alice Springs; 450&#160;km '+
            '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
            'features of the Uluru - Kata Tjuta National Park. Uluru is '+
            'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
            'Aboriginal people of the area. It has many springs, waterholes, '+
            'rock caves and ancient paintings. Uluru is listed as a World '+
            'Heritage Site.</p>'+
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
       
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
                            <ol className="list-view">
                
                {this.props.cafes.map((cafe) => (
                    <li key={cafe.id} className="list-view-item">
                        <div className="cafe-details">
                            {cafe.name}
                        </div>
                    </li>
                ))}
            </ol>
               </div>
            render (){
                return (
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
                                <ol className="list-view">
                    
                    {this.props.cafes.map((cafe) => (
                        <li key={cafe.id} className="list-view-item">
                            <div className="cafe-details">
                                {cafe.name}
                            </div>
                        </li>
                    ))}
                </ol>
                   </div>
                )
            }
        
    



    }
    export default InfoWindow;