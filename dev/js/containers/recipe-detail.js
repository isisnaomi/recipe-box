import React, {Component} from 'react';
import {connect} from 'react-redux';

/*
 * We need "if(!this.props.recipe)" because we set state to null by default
 * */

class recipeDetail extends Component {
    render() {
        if (!this.props.recipe) {
            return (<div>Select a recipe...</div>);
        }
        return (
            <div>
                <img src={this.props.recipe.image_url} />
                <h2>{this.props.recipe.title}</h2>
                <h3>Rank: {this.props.recipe.social_rank}</h3>
                <h3>Url: {this.props.recipe.publisher_url}</h3>
            </div>
        );
    }
}

// "state.activerecipe" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        recipe: state.activeRecipe
    };
}

export default connect(mapStateToProps)(recipeDetail);
