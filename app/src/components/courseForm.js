import React from 'react';
import { ListGroupItem, FormGroup, FormControl } from 'react-bootstrap';


class CourseForm extends React.Component {
  render() {
    // console.log("HERE:" + this.props)
    return (
      <ListGroupItem key={this.props.dataID}>
        <a name={this.props.dataID} />
        <table className="form_table">
          <tbody>
            <tr>
              <td className="col-1">
                <p>
                  <FormControl
                    type="text"
                    value={this.props.data.position}
                    className="course"
                    readOnly
                    diasbled />
                </p>
                <p>
                   <FormControl
                       type="text"
                       value={this.props.data.course_name}
                       readOnly
                       disabled />
                </p>
                <p>
                   <FormControl
                       type="text"
                       value={this.props.data.campus_code}
                       readOnly
                       disabled />
                </p>
              </td>
              <td className="col-2">
                  <p>
                      <b>Est./Curr. Enrol.: </b>
                  </p>
                  <p>
                      <b>Enrol. Cap: </b>
                  </p>
                  <p>
                      <b>Waitlist: </b>
                  </p>
               </td>
               <td className="col-3">
                 <Form
                     formid={'estimatedEnrol-' + this.props.dataID}
                     type="number"
                     defaultVal={this.props.data.current_enrolment}
                     update={val => {
                         if (val != this.props.data.current_enrolment) {
                             this.props.updateData(
                                 this.props.dataID,
                                 val,
                                 'estimatedEnrol'
                             );
                         }
                     }}/>
                     <Form
                          formid={'cap-' + this.props.dataID}
                          type="number"
                          defaultVal={this.props.data.cap_enrolment}
                          update={val => {
                              if (val != this.props.data.cap_enrolment) {
                                  this.props.updateData(
                                      this.props.dataID,
                                      val,
                                      'cap'
                                  );
                              }
                          }}
                      />
                      <Form
                          formid={'waitlist-' + this.props.dataID}
                          type="number"
                          defaultVal={this.props.data.num_waitlisted}
                          update={val => {
                              if (val != this.props.data.num_waitlisted) {
                                  this.props.updateData(
                                      this.props.dataID,
                                      val,
                                      'waitlist'
                                  );
                              }
                          }}
                      />
                </td>
                <td className="col-4">
                   <p>
                       <b>Positions: </b>
                   </p>
                   <p>
                       <b>Hours/Pos.: </b>
                   </p>
               </td>
               <td className="col-5">
                   <Form
                       formid={'estimatedPositions-' + this.props.dataID}
                       type="number"
                       defaultVal={this.props.data.estimated_count}
                       update={val => {
                           if (val != this.props.data.estimated_count) {
                               this.props.updateData(
                                   this.props.dataID,
                                   val,
                                   'estimatedPositions'
                               );
                           }
                       }}
                   />
                   <Form
                       formid={'positionHours-' + this.props.dataID}
                       type="number"
                       defaultVal={this.props.data.hours}
                       update={val => {
                           if (val != this.props.data.hours) {
                               this.props.updateData(
                                   this.props.dataID,
                                   val,
                                   'positionHours'
                               );
                           }
                       }}
                   />
               </td>
               <td className="col-6">
                   <p>
                       <b>Start Date: </b>
                   </p>
                   <Form
                       formid={'startDate-' + this.props.dataID}
                       type="date"
                       defaultVal={
                           this.props.data.start_date
                               ? this.props.data.start_date.split('T')[0]
                               : "hello"
                       }
                       update={val => {
                           if (val != this.props.data.start_date) {
                               this.props.updateData(
                                   this.props.dataID,
                                   val,
                                   'startDate'
                               );
                           }
                       }}
                   />
                   <p>
                       <b>End Date: </b>
                   </p>
                   <Form
                       formid={'endDate-' + this.props.dataID}
                       type="date"
                       defaultVal={
                           this.props.data.end_date
                               ? this.props.data.end_date.split('T')[0]
                               : undefined
                       }
                       update={val => {
                           if (val != this.props.course.end_date) {
                               this.props.updateData(
                                   this.props.dataID,
                                   val,
                                   'endDate'
                               );
                           }
                       }}
                   />
               </td>
            </tr>
          </tbody>
        </table>
      </ListGroupItem>
    )
  }
}


// input that allows form submission
const Form = props =>
    <form
        onSubmit={event => {
            event.preventDefault();
            props.update(event.target.elements[0].value);
        }}>
        <FormGroup id={props.formid} controlId={props.formid} validationState={null}>
        <FormControl
            type={props.type}
            defaultValue={props.defaultVal != undefined ? props.defaultVal : ''}
            onBlur={event => props.update(event.target.value)}
        />
        </FormGroup>
</form>;


export { CourseForm };
