import React from 'react'
import styled from 'styled-components'

const Sponsor = props => {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        border: '4px solid #DFDFDF',
        width: props.tier === 'Platinum' ? '350px' : '280px',
        height: props.tier === 'Platinum' ? '150px' : '120px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '10px',
      }}
    >
      <a
        href={props.url}
        alt={props.name}
        style={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${props.image})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />
    </div>
  )
}

export default Sponsor
