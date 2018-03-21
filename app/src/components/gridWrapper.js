import React from 'react';
import { Grid, Panel, ListGroup } from 'react-bootstrap';
import { GridList } from './gridList';

class GridWrapper extends React.Component {
  render () {
    // {data.map(([key, course]) =>
    //   <Form key={key} itemID={key} object={value} {...this.props} />
    // )}
    let data = this.props.listGroupData;
    // console.log({GRID: this.props})
    return (
      <Grid fluid id={this.props.container + "-grid"}>
        <GridList {...this.props} />

        <Panel id={this.props.header + '-form'}>
          <ListGroup fill>

          </ListGroup>
        </Panel>

      </Grid>
    )
  }
}
export { GridWrapper };
