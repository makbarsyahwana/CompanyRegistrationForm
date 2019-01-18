import React, { Component } from 'react';
import { Button, Row, Col, Form, FormGroup, Alert, Label, Input } from 'reactstrap';
import './officeRegister.css';

const validate = (name, lat, long, startDate) => {
  // we are going to store errors for all fields
  // in a signle array
  const errors = [];

  if ((name.length && lat.length && long.length && startDate.length) === 0) {
    errors.push("Name can't be empty");
  }

  if (!lat.match(/^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/gm)) {
    errors.push("latitude must be a positive number")
  }

  if (!long.match(/^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/gm)) {
    errors.push("longitude must be a positive number");
  }

  return errors;
}


export default class OfficeForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      lat: '',
      long: '',
      startDate: new Date(),
      company:'',
      errors: []
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    e.preventDefault()
    const {name, value} = e.target
    this.setState({ [name]: value })
    this.setState({ startDate: Date})
  }

  handleSubmit(){
    const { name, lat, long, startDate, company } = this.state;
    const errors = validate(name, lat, long, startDate, company);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    } else {
      this.props.submitNewOffice(this.state)
      this.setState({
        name: '',
        lat: '',
        long: '',
        startDate: '',
        company:'',
        errors: []
      })
    }
  }

  

  render(){

    const { name, lat, long, startDate, errors } = this.state
    const isEnabled = (name.length && lat.length && long.length && startDate.length) > 0

    return(
      <div className="form">
        <h2>Create Office</h2>
        {
          errors.map(data => <Alert color="danger" key={data}>Error Message : {data}</Alert>)
        }
        <Form>
          <FormGroup>
            <Label>Name:</Label>
            <Input
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Input Your Office Name"
              onChange={this.handleChange}
              className="form-control"
            />
          </FormGroup>
          <FormGroup>
            <Label>Location:</Label>
            <Row>
              <Col md={6}>
                <Input
                  type="text"
                  name="lat"
                  value={this.state.lat}
                  placeholder="Latitude"
                  onChange={this.handleChange}
                  className="form-control"
                />
              </Col>
              <Col md={6}>  
                <Input
                  type="text"
                  name="long"
                  value={this.state.long}
                  placeholder="Longitude"
                  onChange={this.handleChange}
                  className="form-control"
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Label>Office Start Date:</Label>
            <Input
              type="date"
              name="startDate"
              value={this.state.startDate}
              placeholder="Input Office Start Date"
              onChange={this.handleChange}
              className="form-control"
            />
          </FormGroup>
          <FormGroup>
            <Label>Company:</Label>
            <Input
              type="select"
              name="company"
              placeholder="Input Company"
              onClick={this.handleChange}
              className="form-control"
            >
              {
                this.props.company.map((company, key) => (
                  <option key={key} value={company.name}>{company.name}</option>
                ))
              }
            </Input>
          </FormGroup>
        </Form>
        <Button disabled={!isEnabled} onClick={this.handleSubmit} color="primary">Submit</Button>{' '}
      </div>
    )
  }
}