import React from 'react'

export default function Banner(props) {
  return (
    <div
      style={{
        padding: '0rem 2rem',
        maxWidth: '1024px',
        margin: '0 auto'
      }}
    >
      {props.children}
    </div>
  )
}