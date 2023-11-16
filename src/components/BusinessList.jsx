import React from 'react';
import Business from './Business';
import './BusinessList.styles.css';

function BusinessList(props) {
    const { businesses } = props;
    console.log(businesses);
    console.log(props.businesses);
    if ( businesses !== undefined && businesses.length < 1){
        return (<div><h1>No Businesses to show!</h1></div>)
    } else {
        return (<div className="BusinessList">
            {businesses.map((business) => { return <Business 
                key={business.id}   
                business={business}  
            />})}
        </div>);
    }
}

export default BusinessList;