import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectRecipe} from '../actions/index'


class recipeList extends Component {

    renderList() {
        return this.props.recipes.map((recipe) => {
            return (
                <li
                    key={recipe.id}
                    onClick={() => this.props.selectRecipe(recipe)}
                >
                    {recipe.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }

}

// Get apps state and pass it as props to recipeList
//      > whenever state changes, the recipeList will automatically re-render
function mapStateToProps(state) {
    return {
        recipes: state.recipes
    };
}

// Get actions and pass them as props to to recipeList
//      > now recipeList has this.props.selectrecipe
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectRecipe: selectRecipe}, dispatch);
}

// We don't want to return the plain recipeList (component) anymore, we want to return the smart Container
//      > recipeList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(recipeList);
