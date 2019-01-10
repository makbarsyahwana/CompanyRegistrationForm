import React, { Component } from 'react'
import './companyList.css'
import { Card, CardHeader, CardFooter, CardBody, } from 'reactstrap'

export default class CompanyLister extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <div>
        {
          this.props.company.map((company, key) => (
            <div class="card">
                <Card>
                  <CardHeader tag="h3" key={key.name}>{company.name}</CardHeader>
                  <CardBody>
                    <span>
                      <h1>Address:</h1>
                      <p key={key.address}>{company.address}</p>
                    </span>
                    <span>
                      <h1>Revenue:</h1>
                      <p key={key.revenue}>{company.revenue}</p>
                    </span>
                    <span>
                      <h1>phone No:</h1>
                      <p key={key.phoneNo}>{company.phoneNo}</p>
                    </span>
                  </CardBody>
                </Card>
            </div>
          ))
        }
      </div>
    )
  }
}