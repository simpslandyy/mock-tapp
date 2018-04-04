import React from 'react';
import { Grid, Panel, ListGroup } from 'react-bootstrap';
import { GridList } from './gridList';
import { CourseForm } from './courseForm';

class GridWrapper extends React.Component {
  render () {

    let data = this.props.listGroupData;
    // console.log({GRID: this.props})
    return (
      <Grid fluid id={this.props.container + "-grid"}>
        <GridList {...this.props} />

        <Panel id={this.props.header + '-form'}>
          <ListGroup fill>
            {data.map((value, key) =>
              <CourseForm
                key={key}
                dataID={value.id}
                data={value}
                {...this.props} />
            )}
          </ListGroup>
        </Panel>

      </Grid>
    )
  }
}
export { GridWrapper };
