import React from 'react'
import { Row, Col } from 'reactstrap'

import Sponsor from './Sponsor.js'

const SponsorCardContent = props => {
  return (
    <div>
      <hr />
      <div className="row">
        <div className="col-sm-4">
          <div className="mt-3">
            <Sponsor
              name={props.name}
              url={props.url}
              image={props.image}
              tier={props.tier}
              portrait={props.portrait}
            />
          </div>
        </div>
        <div className="col-sm-8">
          <div className="mt-3">{props.children}</div>
        </div>
      </div>
    </div>
  )
}

export default SponsorCardContent
