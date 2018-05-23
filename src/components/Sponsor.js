import React from 'react'
import styled from 'styled-components'

import SponsorPlaceholderPortraitPng from '../images/sponsor-placeholder-portrait.png'

const Sponsor = props => {
  let maxWidth = '150px'
  if (props.tier === 'Platinum') {
    maxWidth = '350px'
  }

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        border: '4px solid #DFDFDF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '10px',
        position: 'relative',
      }}
    >
      <img
        src={SponsorPlaceholderPortraitPng}
        style={{ width: '100%', maxWidth: maxWidth }}
      />
      <a
        href={props.url}
        alt={props.name}
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          position: 'absolute',
          padding: '10px',
          top: 10,
          left: 10,
          right: 10,
          bottom: 10,
        }}
      />
    </div>
  )
}

export default Sponsor
