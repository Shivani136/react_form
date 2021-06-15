import React, { Component } from 'react'
import Date from './Date';
import DatePicker from 'react-date-picker';

import { Button} from 'react-bootstrap';

 class Form extends Component {
     constructor(props){
         super(props)

         this.onChangeName=this.onChangeName.bind(this);
         this.onChangeStudentId=this.onChangeStudentId.bind(this);
         this.onChangeStandard=this.onChangeStandard.bind(this);
         this.onChangeAddress=this.onChangeAddress.bind(this);
         this.onChangeDob=this.onChangeDob.bind(this);
         this.onChangeSportsActivity=this.onChangeSportsActivity.bind(this);
         this.onChangeEventsDateSlots=this.onChangeEventsDateSlots.bind(this);

         this.state={
             name:'',
             studentid:'',
             standard:'',
             address:'',
             dob:'',
             sportsActivity:'',
             eventsDateSlots:''
         }
        
     }
     onChangeName(e) {
        this.setState({
          name: e.target.value
        });
      }
      onChangeStudentId(e) {
        this.setState({
          studentId: e.target.value
        });
      }
      onChangeStandard(e) {
        this.setState({
          standard: e.target.value
        });
      }
      onChangeAddress(e) {
        this.setState({
          address: e.target.value
        });
      }
      onChangeDob(e) {
        this.setState({
          dob: e.target.value
        });
      }
      onChangeSportsActivity(e) {
        this.setState({
          sportsActivity: e.target.value
        });
      }
      onChangeEventsDateSlots(e) {
        this.setState({
          eventsDateSlots: e.target.value
        });
      }
   
      handleButtonClicked(e) {
        e.preventDefault();
        var name = this.state.name;
        var studentId = this.state.studentId;
        var standard = this.state.standard;
        var address = this.state.address;
        var dob = this.state.dob;
        var sportsActivity = this.state.sportsActivity;
        var eventsDateSlots = this.state.eventsDateSlots;
        console.log('button', this.state.name)
        console.log('button', this.state.studentId)
        console.log('button', this.state.standard)
        console.log('button', this.state.address)
        console.log('button', this.state.dob)
        console.log('button', this.state.sportsActivity)
        console.log('button', this.state.eventsDateSlots)
      }

    render() {
        return (
           
            <div className="container">
           <h2> Sports School Competition.</h2>
          
  <form onSubmit={this.onSubmit}>
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" 
      class="form-control"
       placeholder="Enter Name"
       value={this.state.name}
      onChange={this.onChangeName} />
  
  </div>
  <div class="form-group">
      <label for="student-id">Student id:</label>
      <input type="text" 
      class="form-control"
       placeholder="Enter Student-Id"
       value={this.state.studentId}
      onChange={this.onChangeStudentId} />
  
  </div>
  <div class="form-group">
      <label for="standard">Standard:</label>
      <input type="text" 
      class="form-control"
       placeholder="Enter Standard "
       value={this.state.standard}
      onChange={this.onChangeStandard} />
  
  </div>
  <div class="form-group">
      <label for="address">Address:</label>
      <input type="text" 
      class="form-control"
       placeholder="Enter Address "
       value={this.state.address}
      onChange={this.onChangeAddress} />
  
  </div>
  <div class="form-group">
      <label for="dob">DOB:</label>
     
       <input type='date' class="form-control" 
        placeholder="Enter DOB" 
        value={this.state.dob}
        onChange={this.onChangeDob} 
         />
        
 </div>
  <div class="form-group">
      <label for="sport-activity">Sport Acitivity:</label>
      <select class="form-select" aria-label="Default select example"
         value={this.state.sportsActivity}
         onChange={this.onChangeSportsActivity}>
  <option selected>Open this select sports</option>
  <option value="1">Basketball</option>
  <option value="2">Tennis</option>
  <option value="3">Baseball</option>
  <option value="4">Badminton</option>
  <option value="5">Cricket</option>
</select>
     
  </div>
  <div class="form-group">
      <label for="event-date-slot">Event Date Slots:</label>
      <input type="text" 
      class="form-control"
       placeholder="Enter Event Date Slots "
       value={this.state.eventsDateSlots}
      onChange={this.onChangeEventsDateSlots} />
  
  </div>
  <button type="submit" onClick={this.handleButtonClicked.bind(this)} 

  class="btn btn-primary">Submit</button>
  <button class="btn btn-success ml-5">View Data</button>
  </form>
  </div>
     )
    }
}
export default Form;