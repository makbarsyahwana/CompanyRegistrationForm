import React, { Component } from 'react'
import './companyList.css'
import { Card, CardHeader, Container, Col, Row, CardBody, Jumbotron, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

export default class CompanyLister extends Component {
  constructor(props){
    super(props)
  }



  openModal(){
    document.getElementById('companiesModal').style.display = "flex"
  }

  closeModal(){
    document.getElementById('companiesModal').style.display = "none"

  }

  handleDeleteItem(companyKey){
    this.props.closeCompany(companyKey)
    document.getElementById('companiesModal').style.display = "none"
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
                    <div id="companiesModal" class="modal">
                      <div class="modal-content">
                        <p>Are You Sure Want to Delete This Company</p>
                        <span class="close-button"><Button color="success" onClick={this.handleDeleteItem.bind(this, key)}>I'm Sure</Button></span>
                        <span class="close-button"><Button color="danger" onClick={this.closeModal.bind(this)}>Not Sure</Button></span>
                      </div>
                    </div>
                    <Button onClick={this.openModal.bind(this)} close />
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