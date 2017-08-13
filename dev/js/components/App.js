import React from 'react';
import RecipeList from '../containers/recipe-list';
import RecipeDetails from '../containers/recipe-detail';
require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>recipe List</h2>
        <RecipeList />
        <hr />
        <h2>recipe Details</h2>
        <RecipeDetails />
    </div>
);

export default App;
