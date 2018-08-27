import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AUTH_TOKEN, C2_ID, C1_ID, C3_ID, C4_ID, C5_ID, C6_ID, C7_ID, VERSION } from '../Map/MapData';


class ListView extends Component {
    state = {
        filtered: this.props.cafes
    }

    filterCafes = (event) => { 
        let cafeSearch = event.target.value.toUpperCase();
        let cafeDetails = this.props.cafes;
        let filteredArray = [];
        for (let i = 0; i < cafeDetails.length; i++) {
            if (cafeDetails[i].name.toUpperCase().includes(cafeSearch)) {
            filteredArray.push({id: cafeDetails[i].id, name: cafeDetails[i].name});
            }
        }
        this.setState({
            filtered:filteredArray
        });
        this.props.filterMarker(filteredArray);
    }
    keyPress(target,item,e) {
        if(item.charCode===13){
         this.listItem(target,e)
       }
     }

    componentWillMount () {
        let newFilteredData = this.state.filtered;
        //Fetch venue pricing range from fourquare using each venues id
        //Foursquare Get Details of a Venue requres venue id for each one seperatly, tried putting them on an array but it didnt accept it
        //Cafe Id C1
        fetch(`https://api.foursquare.com/v2/venues/${C1_ID}?&oauth_token=${AUTH_TOKEN}&v=${VERSION}`)
        .then(response => response.json())
        .then(data => newFilteredData[0].extraInfo = data.response.venue.price.message )
        .then(data => this.setState({ filtered: newFilteredData }))
        .catch(error => alert('parsing faild',error));
        //Cafe Id C2
        fetch(`https://api.foursquare.com/v2/venues/${C2_ID}?&oauth_token=${AUTH_TOKEN}&v=${VERSION}`)
        .then(response => response.json())
        .then(data => newFilteredData[1].extraInfo = data.response.venue.price.message )
        .then(data => this.setState({ filtered: newFilteredData }))
        .catch(error => alert('parsing faild',error));
        //Cafe Id C3
        fetch(`https://api.foursquare.com/v2/venues/${C3_ID}?&oauth_token=${AUTH_TOKEN}&v=${VERSION}`)
        .then(response => response.json())
        .then(data => newFilteredData[2].extraInfo = data.response.venue.price.message )
        .then(data => this.setState({ filtered: newFilteredData }))
        .catch(error => alert('parsing faild',error));
        //Cafe Id C4
        fetch(`https://api.foursquare.com/v2/venues/${C4_ID}?&oauth_token=${AUTH_TOKEN}&v=${VERSION}`)
        .then(response => response.json())
        .then(data => newFilteredData[3].extraInfo = data.response.venue.price.message )
        .then(data => this.setState({ filtered: newFilteredData }))
        .catch(error => alert('parsing faild',error));
        //Cafe Id C5
        fetch(`https://api.foursquare.com/v2/venues/${C5_ID}?&oauth_token=${AUTH_TOKEN}&v=${VERSION}`)
        .then(response => response.json())
        .then(data => newFilteredData[4].extraInfo = data.response.venue.price.message )
        .then(data => this.setState({ filtered: newFilteredData }))
        .catch(error => alert('parsing faild',error));
        //Cafe Id C6
        fetch(`https://api.foursquare.com/v2/venues/${C6_ID}?&oauth_token=${AUTH_TOKEN}&v=${VERSION}`)
        .then(response => response.json())
        .then(data => newFilteredData[5].extraInfo = data.response.venue.price.message )
        .then(data => this.setState({ filtered: newFilteredData }))
        .catch(error => console.log('parsing faild',error));
        //Cafe Id C7
        fetch(`https://api.foursquare.com/v2/venues/${C7_ID}?&oauth_token=${AUTH_TOKEN}&v=${VERSION}`)
        .then(response => response.json())
        .then(data => newFilteredData[6].extraInfo = data.response.venue.price.message )
        .then(data => this.setState({ filtered: newFilteredData }))
        .catch(error => console.log('parsing faild',error));
}

    render (){
        return (
            <div className="list-view">
                <input 
                    id="search-bar"
                    type="text" 
                    placeholder="Search by Name" 
                    onChange={(event) => this.filterCafes(event)}                        
                    className="search-cafes" 
                    role="search" 
                    aria-labelledby="text filter" tabIndex="1"
                />
                <ol aria-labelledby="list of cafes" tabIndex="1">
                    {this.state.filtered.map((cafe) => (
                        <li 
                            tabIndex="1" key={cafe.id} area-labelledby={`View details for ${cafe.name}`} onKeyPress={this.keyPress.bind(cafe.name, cafe.id)} onClick={() => this.props.clickedMarker(cafe.name, cafe.id)} style={{cursor: 'pointer'}}>
                            <h6>{cafe.name }</h6>
                            <p><span className="fa-span"><FontAwesomeIcon icon="money-bill"/> </span>{cafe.extraInfo} </p>
                        </li>
                    ))}
                </ol>
           </div>
        )
    }

}

export default ListView;