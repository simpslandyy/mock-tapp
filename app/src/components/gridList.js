import React from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

class GridList extends React.Component {
  render() {
    let data  = this.props.gridListData;
    return (
      <Panel className={this.props.container + "-list-panel"} header={this.props.header}>
        <ListGroup className={this.props.container + "-list-group"} fill>
        {data.map((item,key) =>
                       <ListGroupItem key={key} title={item.name} className={this.props.header + "-list-item"}>
                           <a className={this.props.container} href={'#' + key}>
                             {item.name}
                           </a>
                           <a id={"email-"+key}
                             title={this.props.email_hover}
                             className="email-icon"
                             onClick={() => this.props.onEmailClick(item.name, item.id, key)}>
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
