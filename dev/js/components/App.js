import React from 'react';
import RecipeList from '../containers/recipe-list';
import RecipeDetails from '../containers/recipe-detail';
require('../../scss/style.scss');
import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
const App = () => (
  <Grid>
    <Row>
      <Col className="recipebox--header" xs={12}><h1>recipebox</h1></Col>
    </Row>
          <RecipeList />
          <hr />
          <h2>recipe Details</h2>
          <RecipeDetails />
  </Grid>
    
);
export default App;
