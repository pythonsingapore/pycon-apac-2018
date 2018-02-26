import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Col, Row } from 'reactstrap'

import ContentCard from './ContentCard'

class KeynoteSpeakerCard extends Component {
  static propTypes = {
    speakerImage: PropTypes.string.isRequired,
    speakerName: PropTypes.string.isRequired,
  }

  render() {
    const { children, speakerImage, speakerName } = this.props
    return (
      <ContentCard>
        <Row>
          <Col xs="12" sm="4" className="text-center mt-3">
            <img
              src={speakerImage}
              style={{ maxWidth: '200px', width: '100%' }}
            />
          </Col>
          <Col className="mt-3">
            <h1>{speakerName}</h1>
            {children}
          </Col>
        </Row>
      </ContentCard>
    )
  }
}

export default KeynoteSpeakerCard
