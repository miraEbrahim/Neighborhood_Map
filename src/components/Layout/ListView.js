import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class ListView extends Component {
    state = {
        filtered: this.props.cafes,
        // extraData: "nothing yet"
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

    componentWillMount () {
        let newFilteredData = this.state.filtered;
        //Fetch venue pricing range from fourquare using each venues id
        //Cafe Id C1
        fetch('https://api.foursquare.com/v2/venues/4c7cc27e3e90a1cdfb5243be?&oauth_token=BUAOGTNXZHKAOS4JOYOMGANFSE54NV2WAS2HJMFF51Q2WAVG&v=20180825')
        .then(response => response.json())
        .then(data => newFilteredData[0].extraInfo = data.response.venue.price.message )
        .then(data => this.setState({ filtered: newFilteredData }))
        //Cafe Id C2
        fetch('https://api.foursquare.com/v2/venues/4c78016e97028cfa4e4dd6fe?&oauth_token=BUAOGTNXZHKAOS4JOYOMGANFSE54NV2WAS2HJMFF51Q2WAVG&v=20180825')
        .then(response => response.json())
        .then(data => newFilteredData[1].extraInfo = data.response.venue.price.message )
        .then(data => this.setState({ filtered: newFilteredData }))
        //Cafe Id C3
        fetch('https://api.foursquare.com/v2/venues/4b9fe98af964a520d54937e3?&oauth_token=BUAOGTNXZHKAOS4JOYOMGANFSE54NV2WAS2HJMFF51Q2WAVG&v=20180825')
        .then(response => response.json())
        .then(data => newFilteredData[2].extraInfo = data.response.venue.price.message )
        .then(data => this.setState({ filtered: newFilteredData }))
        //Cafe Id C4
        fetch('https://api.foursquare.com/v2/venues/559b959f498e191eb0698efa?&oauth_token=BUAOGTNXZHKAOS4JOYOMGANFSE54NV2WAS2HJMFF51Q2WAVG&v=20180825')
        .then(response => response.json())
        .then(data => newFilteredData[3].extraInfo = data.response.venue.price.message )
        .then(data => this.setState({ filtered: newFilteredData }))
        //Cafe Id C5
        fetch('https://api.foursquare.com/v2/venues/4ebf15afd5fb50d70f350c59?&oauth_token=BUAOGTNXZHKAOS4JOYOMGANFSE54NV2WAS2HJMFF51Q2WAVG&v=20180825')
        .then(response => response.json())
        .then(data => newFilteredData[4].extraInfo = data.response.venue.price.message )
        .then(data => this.setState({ filtered: newFilteredData }))
        //Cafe Id C6
        fetch('https://api.foursquare.com/v2/venues/4c7cc27e3e90a1cdfb5243be?&oauth_token=BUAOGTNXZHKAOS4JOYOMGANFSE54NV2WAS2HJMFF51Q2WAVG&v=20180825')
        .then(response => response.json())
        .then(data => newFilteredData[5].extraInfo = data.response.venue.price.message )
        .then(data => this.setState({ filtered: newFilteredData }))
        //Cafe Id C7
        fetch('https://api.foursquare.com/v2/venues/4fd09d28e4b0da17b03a3264?&oauth_token=BUAOGTNXZHKAOS4JOYOMGANFSE54NV2WAS2HJMFF51Q2WAVG&v=20180825')
        .then(response => response.json())
        .then(data => newFilteredData[6].extraInfo = data.response.venue.price.message )
        .then(data => this.setState({ filtered: newFilteredData }))
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
                    aria-labelledby="search"
                />
                <ol> 
                    {this.state.filtered.map((cafe) => (
                        <li tabIndex="0" key={cafe.id} onClick={() => this.props.clickedMarker(cafe.name, cafe.id)} style={{cursor: 'pointer'}}>
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