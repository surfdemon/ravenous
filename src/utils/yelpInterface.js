// NOTE: To make this work, enable cors anywhere at https://cors-anywhere.herokuapp.com/corsdemo
import apiSecrets from './yelpApiKey.js';


const searchYelp = async (foodType, foodLocation, foodFilter) => {

    const foodTypeSearch = foodType;
    const foodLocationSearch = foodLocation; 
    const foodFilterSearch = foodFilter;

    const options = {
        method: 'GET', 
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + apiSecrets.yelpApiKey
        },
    };

    const baseUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?limit=20';
    const searchOptions = '&term=' + foodTypeSearch + '&location=' + foodLocationSearch + '&sort_by=' + foodFilterSearch;
    const urlToFetch = baseUrl + searchOptions; 

    try { 
        const response = await fetch(urlToFetch, options)
        const jsonResponse = response.json(); 
        return jsonResponse;
    } catch (error) {   
        console.log(error);
    }
};  

export default searchYelp;