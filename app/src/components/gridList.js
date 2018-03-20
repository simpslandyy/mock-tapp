import React from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

class GridList extends React.Component {
  render() {
    let { data } = this.props
    return (
      <Panel className={this.props.container + "-list-panel"} header={this.props.header}>
        <ListGroup className={this.props.container + "-list-group"} fill>
        {data.map((item,key) =>
                       <ListGroupItem key={key} title={item.position} className={this.props.header + "-list-item"}>
                           <a className={this.props.container} href={'#' + key}>
                             {item.position}
                           </a>
                           <a id={"email-"+key}
                             title={this.props.title}
                             className="email-icon"
                             onClick={() => this.props.pendingRequest(item.position, item.round_id, key)}>
                             <i className="fa fa-envelope-o"></i>
                           </a>
                           <a id={"spinner-"+key}
                             className="spinning-icon">
                             <i className="fa fa-spinner fa-spin"></i>
                           </a>
                       </ListGroupItem>
                   )}
        </ListGroup>
    </Panel>
  )}
}


export { GridList };
