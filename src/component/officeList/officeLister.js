import React, { Component } from 'react';
import { Card, CardHeader, Col, Row, CardBody, Container, Button, Jumbotron } from 'reactstrap'
import { Link } from 'react-router-dom'

import './officeList.css'

export default class OfficeLister extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const findOne = this.props.company.filter((company) => {
      return company.name === this.props.match.params.name
    })
    return(
      <Container>
        <Row>
              {
                findOne.map((data, key) => (
                <Col key={key}>
                  <div className="office-list">
                    <span>
                      <h1 key={key.name}><b>{data.name}</b></h1>
                    </span>
                    <hr id="name-line"/>
                    <span>
                      <h3><b>Address:</b></h3>
                      <h3 key={key.address}>{data.address}</h3>
                    </span>
                    <span>
                      <h3><b>Revenue:</b></h3>
                      <h3 key={key.revenue}>{data.revenue}</h3>
                    </span>
                    <span>
                      <h3><b>Phone No:</b></h3>
                      <h3 key={key.phoneNo}>{data.phoneNo}</h3>
                    </span>
                      <Link className="back-to-overview" to={`/`}>
                          <Button color="secondary">Back to Overview</Button>
                      </Link>
                    <hr />
                    <span>
                      <ListofOffice office={this.props.office} companyName={this.props.match.params.name} closeOffice={this.props.closeOffice.bind(this)} />
                    </span>
                  </div>
                </Col>
                ))
              }
        </Row>
      </Container>
    )
  }
}

function ListofOffice({office, companyName, closeOffice}){
  
  const filterOfficeCompany = office.filter((office) => {
    return office.company === companyName
  })

  const handleDeleteItem = (officeKey) => {
    closeOffice(officeKey)
    document.getElementById('officesModal').style.display = "none"
  }

  const openModal = () => {
    document.getElementById('officesModal').style.display = "flex"
  }

  const closeModal = () => {
    document.getElementById('officesModal').style.display = "none"

  }

  return(
    <Row>
      <div id="label-wrap"><h1 id="label-offices">Offices</h1></div>
      {filterOfficeCompany.length > 0 ?
        filterOfficeCompany.map((offices, key) => (
          <Col key={key} xs="6">
            <Card key={key}>
                  <CardHeader tag="h1" key={key.name}>
                    {offices.name}
                    <div id="officesModal" class="modal">
                      <div class="modal-content">
                        <p>Are You Sure Want to Delete This Office</p>
                        <span class="close-button"><Button color="success" onClick={handleDeleteItem.bind(this, key)}>I am Sure</Button></span>
                        <span class="close-button"><Button color="danger"onClick={closeModal.bind(this)}>Not Sure</Button></span>
                      </div>
                    </div>
                    <Button onClick={openModal.bind(this)} close />
                  </CardHeader>
                  <CardBody>
                    <span>
                      <h3>Location:</h3>
                      <p key={key.lat}>{offices.lat}</p>
                      <p key={key.long}>{offices.long}</p>
                    </span>
                    <span>
                      <h3>Office Start Date:</h3>
                      <p key={key.startDate}>{offices.startDate}</p>
                    </span>
                  </CardBody>
              </Card>
          </Col>
        )) :
        <div id="no-content">
              <Jumbotron fluid>
                <Container fluid>
                  <h1 className="display-3">There is No Office Added</h1>
                  <p className="lead">Please add your office on the company overview page</p>
                </Container>
              </Jumbotron>
        </div>
      }
    </Row>
  )
}