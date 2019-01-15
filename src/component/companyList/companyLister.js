import React, { Component } from 'react'
import './companyList.css'
import { Card, CardHeader, Container, Col, Row, CardBody, Jumbotron, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

export default class CompanyLister extends Component {
  constructor(props){
    super(props)
  }



  handleClose(companyKey){
    this.props.closeCompany(companyKey)
  }

  render() {
    return(
      <Row>
        {console.log(this.props.company)}
        <div id="label-wrap"><h1 id="label-companies">Companies</h1></div>
        {this.props.company.length > 0 ?
          this.props.company.map((company, key) => (
              <Col key={key} xs="6">
                <Card>
                  <CardHeader tag="h1" key={key.name}>
                    <Link to={`/officeLister/${company.name}`}>{company.name}</Link>
                    <Button onClick={this.handleClose.bind(this, key)} close />
                  </CardHeader>
                  <CardBody>
                    <span>
                      <h3>Address:</h3>
                      <p key={key.address}>{company.address}</p>
                    </span>
                    <span>
                      <h3>Revenue:</h3>
                      <p key={key.revenue}>{company.revenue}</p>
                    </span>
                    <span>
                      <h3>phone No:</h3>
                      <p key={key.phoneNo}>{company.phoneNo}</p>
                    </span>
                  </CardBody>
                </Card>
              </Col> 
          )) :
          <div id="no-content">
              <Jumbotron fluid>
                <Container fluid>
                  <h1 className="display-3">There is no Company Added</h1>
                  <p className="lead">Please add your company on the form above</p>
                </Container>
              </Jumbotron>
          </div>
        }  
        
      </Row>
    )
  }
}