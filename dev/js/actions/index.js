export const selectRecipe = (recipe) => {
    console.log("You clicked on recipe: ", recipe.title);
    return {
        type: 'RECIPE_SELECTED',
        payload: recipe
    }
};
