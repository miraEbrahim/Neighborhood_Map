import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ListView extends Component {

    filterCafes = (event) => { 
        let cafeSearch = event.target.value;
        let cafeDetails = this.props.cafes;
        for (let i = 0; i < cafeDetails.length; i++) {
            if (cafeDetails[i].name.includes(cafeSearch)) {
            console.log('hey we got a match');

            }
        console.log(cafeDetails[i].name);

        }

    }
    render (){
        return (
            <div className="list-view">
                        <input 
                            type="text" 
                            placeholder="Filter by Business Name" 
                            onChange={(event) => this.filterCafes(event)}
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

export default ListView;