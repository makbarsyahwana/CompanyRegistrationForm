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
    e.preventDefault()
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
      <div className="form">
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
              className="form-control"
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
              className="form-control"
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
              className="form-control"
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
              className="form-control"
            />
          </FormGroup>
        </Form>
        <Button onClick={this.handleSubmit} color="primary">Submit</Button>{' '}
      </div>
    )
  }
}