import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import AddCompany from './container/addCompany/companyForm';
import AddOffice from './container/addOffice/officeForm';
import CompanyList from './container/addCompany/companyList'

class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs="6">
            <AddCompany />
          </Col>
          <Col xs="6">
            <AddOffice />
          </Col>
        </Row>
        <Row>
          <Col>
            <CompanyList />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
