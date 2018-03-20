import React from 'react';
import { connect } from 'react-redux';
import { Grid, Panel, ListGroup } from 'react-bootstrap';
import { changeCourseProperties, deleteInstructor } from '../store/app/action';
import { GridList } from './gridList';

class GridWrapper extends React.Component {
  render () {
    // console.log({GRID: this.props})
    return (
      <Grid fluid id={this.props.container + "-grid"}>
        <GridList {...this.props} />

      </Grid>
    )
  }
}
export { GridWrapper };
