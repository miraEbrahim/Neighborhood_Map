import React, { Component } from 'react';

class ListView extends Component {

    render (){
        return (
            <ol className="list-view">
                {this.props.cafes.map((cafe) => (
                    <li key={cafe.id} className="list-view-item">
                        <div className="cafe-details">
                            {cafe.name}
                        </div>
                    </li>
                ))}
            </ol>
        )
    }

}

export default ListView;