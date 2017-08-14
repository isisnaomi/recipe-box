import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectRecipe} from '../actions/index'
import {fetchRecipes} from '../actions/index'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class recipeList extends Component {

    renderList() {
      console.log(this.props.fetchRecipes());
        return this.props.recipes.map((recipe) => {
            return (
              <Col xs={6} sm={4}> 
                <div className="recipe--box"
                    key={recipe.id}
                    onClick={() => this.props.selectRecipe(recipe)}
                >
                <img src={recipe.image_url} />
                    <h5>{recipe.title}</h5>
                </div>
              </Col>
            );
        });
    }

    render() {
        return (
            <Row>
                {this.renderList()}
            </Row>
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
    return bindActionCreators({fetchRecipes: fetchRecipes}, dispatch);
}

// We don't want to return the plain recipeList (component) anymore, we want to return the smart Container
//      > recipeList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(recipeList);
