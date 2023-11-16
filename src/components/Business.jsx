import React from 'react';
import './Business.styles.css';

function Business(props){ 
    //Should display an image, name, address, city, 
    //state, zipcode, category, rating, and review count
    return (
        <div className="BusinessCard">
            <img src={props.business.image_url} alt={props.business.image_url}/>
            <div className="BusinessCardDetails">
                <div className="BusinessCardDetailsLeft">
                    <p className="BusinessCardName">{props.business.name}</p>
                    <div className="BusinessCardAddress">{props.business.address}</div>
                </div>
                <div className="BusinessCardDetailsRight">
                    <span className="BusinessCardCategory">{props.business.category}</span>
                    <span className="BusinessCardRating">{props.business.rating} Stars</span>
                    <span className="BusinessCardReviewCount">{props.business.reviewCount}</span>
                </div>
            </div>
        </div>
    );
}

export default Business;