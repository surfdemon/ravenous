import React from 'react';
import './Business.styles.css';
import noImage from '../media/no-image.jpeg';

function Business(props){ 
    var imageUrl =  noImage;
    if ( props.business.image_url !== '') {
        imageUrl = props.business.image_url;
    }

    return (
        <div className="BusinessCard">
            <img src={imageUrl} alt={props.business.image_url}/>
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