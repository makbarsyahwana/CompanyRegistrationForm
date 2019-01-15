import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Row, Col, Input, Alert } from 'reactstrap';
import './companyRegister.css';

const validate = (name, address, revenue, code, phoneNo) => {
  // we are going to store errors for all fields
  // in a signle array
  const errors = [];

  if ((name.length && address.length && revenue.length && code.length && phoneNo.length) === 0) {
    errors.push("Name can't be empty");
  }

  if (!revenue.match(/^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/gm)) {
    errors.push("revenue must be a positive")
  }

  if (!code.match(/\d+(\.\d{0,9})?/gm)) {
    errors.push("Your Phone Code Is Invalid")
  }

  if (!phoneNo.match(/\d+(\.\d{0,9})?/gm)) {
    errors.push("Your Phone Number Is Invalid")
  }

  return errors;
}

export default class RegistrationForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      address: '',
      revenue: '',
      code: '',
      phoneNo:'',
      errors: []
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
    const { name, address, revenue, code,  phoneNo } = this.state;
    const errors = validate(name, address, revenue, code, phoneNo);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    } else {
      this.props.submitNewCompany(this.state)
      this.setState({
        name: '',
        address: '',
        revenue: '',
        code: '',
        phoneNo:'',
        errors: []
      })
    }
  }

  render(){

    const { name, address, revenue, code, phoneNo, errors } = this.state
    const isEnabled = (name.length && address.length && revenue.length && code.length && phoneNo.length) > 0
    return(

      <div className="form">
        <h2>Create Company</h2>

        {
          errors.map(data => <Alert color="danger" key={data}>Error: {data}</Alert>)
        }
        <Form>
          <FormGroup>
            <Label>Name:</Label>
            <Input
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Input Your Name"
              onChange={this.handleChange}
              className="form-control"
            />
          </FormGroup>
          <FormGroup>
            <Label>Address:</Label>
              <Input
                type="text"
                name="address"
                value={this.state.address}
                placeholder="Input Your Address"
                onChange={this.handleChange}
                className="form-control"
              />
          </FormGroup>
          <FormGroup>
            <Label>Revenue:</Label>
              <Input
                type="text"
                name="revenue"
                value={this.state.revenue}
                placeholder="Input Positive Number"
                onChange={this.handleChange}
                className="form-control"
              />
          </FormGroup>
          <FormGroup>
            <Label>Phone No:</Label>
              <Row>
                <Col md={2}>
                  <Input
                    type="text"
                    name="code"
                    value={this.state.code}
                    placeholder="Code"
                    onChange={this.handleChange}
                    className="form-control"
                  />
                </Col>
                <Col md={10}>
                  <Input
                    type="text"
                    name="phoneNo"
                    value={this.state.phoneNo}
                    placeholder="Input Your Phone Number"
                    onChange={this.handleChange}
                    className="form-control"
                  />
                </Col>
              </Row>
          </FormGroup>
        </Form>
        
        <Button disabled={!isEnabled} onClick={this.handleSubmit} color="primary">Submit</Button>
      </div>
    )
  }
}