import React, { Component } from 'react';
//import { Button } from 'reactstrap';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
            console.log('hey we got a match');
            filteredArray.push({id: cafeDetails[i].id, name: cafeDetails[i].name});
            }
        console.log(cafeDetails[i].name);
        }
        this.setState({
            filtered:filteredArray
        });
        this.props.filterMarker(filteredArray);
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
                        <li key={cafe.id}
                            // onClick={(event) => this.props.clickedMarker(event)}
                            onClick={() => this.props.clickedMarker(cafe.name, cafe.id)} style={{cursor: 'pointer'}}
                        >
                            <p>{cafe.name }</p>
                        </li>
                    ))}
                </ol>
           </div>
        )
    }

}

export default ListView;