import axios from 'axios';

export const FETCH_RECIPES= 'FETCH_RECIPES';
const ROOT_URL = 'http://food2fork.com/api/search?key=56b9375e08a56fa4fa8b3e488cd8adee';

export function fetchRecipes() {
    var query = 'shredded%20chicken';
    const url = `${ROOT_URL}&q=${query}`;
    const request = axios.get(url, {
  	headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
  	  'Access-Control-Allow-Origin': 'http://food2fork.com/api/',
  	},
    timeout: 10000
	}).then(function (response) {
		console.log('response is : ' + response.data);
	}).catch(function (error) {
		if (error.response) {
		  console.log(error.response.headers);
		} 
		else if (error.request) {
	      console.log(error.request);
		} 
		else {
		  console.log(error.message);
		}
	console.log(error.config);
});
    return {
        type: FETCH_RECIPES,
        payload: request
    };
}
export const selectRecipe = (recipe) => {
    console.log("You clicked on recipe: ", recipe.title);
    return {
        type: 'RECIPE_SELECTED',
        payload: recipe
    }
};

