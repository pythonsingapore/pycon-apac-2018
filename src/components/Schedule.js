import React, { Component } from 'react'
import { Col, Row, Table } from 'reactstrap'
import Link from 'gatsby-link'

class Schedule extends Component {
  renderSchedule(talks) {
    return talks.map(element => {
      if (element.type === 'break') {
        return (
          <tr key={element.title}>
            <td>
              <Row>
                <Col xs="12" sm="3">
                  {element.time}
                </Col>
                <Col xs="12" sm="9">
                  <b>{element.title}</b>
                  {element.url && (
                    <p>
                      <Link to={element.url}>{element.urlText}</Link>
                    </p>
                  )}
                  {element.subtitle && (
                    <p>
                      <i>{element.subtitle}</i>
                    </p>
                  )}
                </Col>
              </Row>
            </td>
          </tr>
        )
      }

      return (
        <tr key={element.title}>
          <td>
            <Row>
              <Col xs="12" sm="3">
                <p>{element.time}</p>
              </Col>
              <Col xs="12" sm="9">
                <b>{element.title}</b>
                <br />
                <i>by {element.speaker}</i>
              </Col>
            </Row>
          </td>
        </tr>
      )
    })
  }

  render() {
    const { talks } = this.props
    return (
      <Table striped>
        <tbody>{this.renderSchedule(talks)}</tbody>
      </Table>
    )
  }
}

export default Schedule
