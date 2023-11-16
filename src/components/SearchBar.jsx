import React, {useState} from 'react';
import './SearchBar.styles.css';
import searchYelp from '../utils/yelpInterface';

function SearchBar(props){
    const { setBusinesses } = props
    const [ foodFilter, setFoodFilter ] = useState('best_match');
    const [ foodType, setFoodType ] = useState('Food Type');
    const [ foodLocation, setFoodLocation ] = useState('Location');

    const foodFilterClickHandler = (filterName) => { 
        setFoodFilter(filterName);
    };

    const locationChangeHandler = (event) => {
        if (event.target.value === ''){
            setFoodLocation('Location');
        } else { 
            setFoodLocation(event.target.value);
        }        
    };

    const foodTypeChangeHandler = (event) => { 
        if (event.target.value === ''){
            setFoodType('Food Type');
        } else { 
            setFoodType(event.target.value);
        }
    };

    const searchSubmitHandler = async () => {
        console.log(`Searching Yelp with ${foodType}, ${foodLocation}, and ${foodFilter}`);
        try {
            searchYelp(foodType, foodLocation, foodFilter).then((response) => {
                console.log('the businesses found are');
                console.log(response.businesses);
                setBusinesses(response.businesses);
            });
        } catch(error){ 
            console.log(error);
        }
    };

    return (
        <div className="headerArea">
            <div className="SearchBar">
                <div className="Filters">
                    <div id="BestMatchSearch" 
                        className={ foodFilter === "best_match" ? 'activeClass' : 'notActive'}
                        onClick={() => foodFilterClickHandler('best_match')}
                        >Best Match</div>   
                    <div id="HighestRatedSearch" 
                        className={ foodFilter === "rating" ? 'activeClass' : 'notActive'}
                        onClick={() => foodFilterClickHandler('rating')}
                        >Highest Rated</div>    
                    <div id="MostReviewedSearch" 
                        className={ foodFilter === "review_count" ? 'activeClass' : 'notActive'}
                        onClick={() => foodFilterClickHandler('review_count')}
                    >Top Reviewed</div>
                </div>
                <div className="SearchInputs"> 
                    <input type="text" id="SearchByFoodTypeInput" onChange={(e) => foodTypeChangeHandler(e)}  placeholder={foodType} />
                    <input type="text" id="SearchByLocationInput" onChange={(e) => locationChangeHandler(e)} placeholder={foodLocation} />
                </div>
                <div className="SearchButtonArea">
                    <input type='button' value="Search" onClick={searchSubmitHandler} />
                </div>
            </div>
        </div>
    );
}

export default SearchBar;