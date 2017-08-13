import {combineReducers} from 'redux';
import RecipeReducer from './reducer-recipes';
import ActiveRecipeReducer from './reducer-active-recipe';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    recipes: RecipeReducer,
    activeRecipe: ActiveRecipeReducer
});

export default allReducers
