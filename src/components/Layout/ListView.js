import React, { Component } from 'react';
//import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class ListView extends Component {
    state = {
        filtered: this.props.cafes,
        extraData: "nothing yet"
        //dat0: 
        
    }
    filterCafes = (event) => { 
        let cafeSearch = event.target.value.toUpperCase();
        let cafeDetails = this.props.cafes;
        let filteredArray = [];
        for (let i = 0; i < cafeDetails.length; i++) {
            if (cafeDetails[i].name.toUpperCase().includes(cafeSearch)) {
            // console.log('hey we got a match');
            filteredArray.push({id: cafeDetails[i].id, name: cafeDetails[i].name});
            }
        // console.log(cafeDetails[i].name);
        }
        this.setState({
            filtered:filteredArray
        });
        this.props.filterMarker(filteredArray);
    }

    componentWillMount () {

        //fetch  x 8
        // get data.response.name or whatever, setState for extraInfo
        // this.setState({filtered})
        let newFilteredData = this.state.filtered;
        // let extraData1 = "";
        // for (let j = 0; j < newFilteredData.length; j++) {
        // }
        fetch('https://api.foursquare.com/v2/venues/4c7cc27e3e90a1cdfb5243be?&oauth_token=BUAOGTNXZHKAOS4JOYOMGANFSE54NV2WAS2HJMFF51Q2WAVG&v=20180825')
        .then(response => response.json())
        // .then(data => this.setState({ extraData: data.response.venues[5].name }))
        .then(data => newFilteredData[0].extraInfo = data.response.venue.price.message )
        .then(data => this.setState({ filtered: newFilteredData }))
        // .then(data => console.log(data.response.venues[5].name));

        fetch('https://api.foursquare.com/v2/venues/4c78016e97028cfa4e4dd6fe?&oauth_token=BUAOGTNXZHKAOS4JOYOMGANFSE54NV2WAS2HJMFF51Q2WAVG&v=20180825')
        .then(response => response.json())
        // .then(data => this.setState({ extraData: data.response.venues[5].name }))
        .then(data => newFilteredData[1].extraInfo = data.response.venue.price.message )
        .then(data => this.setState({ filtered: newFilteredData }))
        // .then(data => console.log(data.response.venues[5].name));

        fetch('https://api.foursquare.com/v2/venues/4b9fe98af964a520d54937e3?&oauth_token=BUAOGTNXZHKAOS4JOYOMGANFSE54NV2WAS2HJMFF51Q2WAVG&v=20180825')
        .then(response => response.json())
        // .then(data => this.setState({ extraData: data.response.venues[5].name }))
        .then(data => newFilteredData[2].extraInfo = data.response.venue.price.message )
        .then(data => this.setState({ filtered: newFilteredData }))
        // .then(data => console.log(data.response.venues[5].name));

        fetch('https://api.foursquare.com/v2/venues/559b959f498e191eb0698efa?&oauth_token=BUAOGTNXZHKAOS4JOYOMGANFSE54NV2WAS2HJMFF51Q2WAVG&v=20180825')
        .then(response => response.json())
        // .then(data => this.setState({ extraData: data.response.venues[5].name }))
        .then(data => newFilteredData[3].extraInfo = data.response.venue.price.message )
        .then(data => this.setState({ filtered: newFilteredData }))
        // .then(data => console.log(data.response.venues[5].name));

        fetch('https://api.foursquare.com/v2/venues/4ebf15afd5fb50d70f350c59?&oauth_token=BUAOGTNXZHKAOS4JOYOMGANFSE54NV2WAS2HJMFF51Q2WAVG&v=20180825')
        .then(response => response.json())
        // .then(data => this.setState({ extraData: data.response.venues[5].name }))
        .then(data => newFilteredData[4].extraInfo = data.response.venue.price.message )
        .then(data => this.setState({ filtered: newFilteredData }))
        // .then(data => console.log(data.response.venues[5].name));

        fetch('https://api.foursquare.com/v2/venues/4c7cc27e3e90a1cdfb5243be?&oauth_token=BUAOGTNXZHKAOS4JOYOMGANFSE54NV2WAS2HJMFF51Q2WAVG&v=20180825')
        .then(response => response.json())
        // .then(data => this.setState({ extraData: data.response.venues[5].name }))
        .then(data => newFilteredData[5].extraInfo = data.response.venue.price.message )
        .then(data => this.setState({ filtered: newFilteredData }))
        // .then(data => console.log(data.response.venues[5].name));

        fetch('https://api.foursquare.com/v2/venues/4fd09d28e4b0da17b03a3264?&oauth_token=BUAOGTNXZHKAOS4JOYOMGANFSE54NV2WAS2HJMFF51Q2WAVG&v=20180825')
        .then(response => response.json())
        // .then(data => this.setState({ extraData: data.response.venues[5].name }))
        .then(data => newFilteredData[6].extraInfo = data.response.venue.price.message )
        .then(data => this.setState({ filtered: newFilteredData }))
        // .then(data => console.log(data.response.venues[5].name));

        // fetch('https://api.foursquare.com/v2/venues/4b546704f964a520f8b927e3?&oauth_token=BUAOGTNXZHKAOS4JOYOMGANFSE54NV2WAS2HJMFF51Q2WAVG&v=20180825')
        // .then(response => response.json())
        // // .then(data => this.setState({ extraData: data.response.venues[5].name }))
        // .then(data => newFilteredData[7].extraInfo = data.response.venue.price.message )
        // .then(data => this.setState({ filtered: newFilteredData }))
        // // .then(data => console.log(data.response.venues[5].name));
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
                        <li key={cafe.id} onClick={() => this.props.clickedMarker(cafe.name, cafe.id)} style={{cursor: 'pointer'}}>
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