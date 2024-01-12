import React from 'react'
import './index.css'

export default function Promotion(props) {
  return (
    <div
      className='promotion-con'
      style={{
        maxWidth: '1200px',
        backgroundColor: props.config.theme.colors.primary,
        color: '#fff',
        padding: '5rem 2rem',
        borderRadius: '10px',
        textAlign: 'center'
      }}
    >
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {props.children}
      </div>
    </div>
  )
}
