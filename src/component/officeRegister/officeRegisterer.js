import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './officeRegister.css';


export default class OfficeForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      location: '',
      startDate: '',
      company:''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    const {name, value} = e.target
    this.setState({ [name]: value })
  }

  handleSubmit(){
    this.props.submitNewOffice(this.state)
    this.setState({
      name: '',
      location: '',
      startDate: '',
      company:''
    })
  }

  render(){
    return(
      <div class="form">
        <h2>Create Office</h2>
        <Form>
          <FormGroup>
            <Label>Name:</Label>
            <Input
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Enter text"
              onChange={this.handleChange}
              class="form-control"
            />
          </FormGroup>
          <FormGroup>
            <Label>Location:</Label>
              <Input
                type="text"
                name="location"
                value={this.state.location}
                placeholder="Enter text"
                onChange={this.handleChange}
                class="form-control"
              />
          </FormGroup>
          <FormGroup>
            <Label>Office Start Date:</Label>
              <Input
                type="text"
                name="startDate"
                value={this.state.startDate}
                placeholder="Enter text"
                onChange={this.handleChange}
                class="form-control"
              />
          </FormGroup>
          <FormGroup>
            <Label>Company:</Label>
              <Input
                type="text"
                name="company"
                value={this.state.company}
                placeholder="Enter text"
                onChange={this.handleChange}
                class="form-control"
              />
          </FormGroup>
        </Form>
        <Button onClick={this.handleSubmit} color="primary">Submit</Button>{' '}
        {this.props.office.map((data, key) => (<ul>
          <li key={key.name}>{data.name}</li>
          <li key={key.location}>{data.location}</li>
          <li key={key.startDate}>{data.startDate}</li>
          <li key={key.company}>{data.company}</li>
        </ul>)
        )}
      </div>
    )
  }
}