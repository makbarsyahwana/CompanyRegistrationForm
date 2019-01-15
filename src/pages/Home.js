import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import AddCompany from '../container/addCompany/companyForm'
import AddOffice from '../container/addOffice/officeForm'
import CompanyList from '../container/addCompany/companyList'


export default class Home extends Component {
  render(){
    return(
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
          <Col><hr /></Col>
        </Row>
        <CompanyList />
      </Container>
    )
  }
}