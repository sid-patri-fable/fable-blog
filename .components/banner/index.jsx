import React from 'react'
import "./index.css"

export default function Banner(props) {
  return (
    <div
      className='banner'
      style={{
        width: '100%',
        textAlign: 'center',
        margin: '0 auto',
        paddingTop: '80px',
        paddingBottom: '80px',
        display: 'flex',
        flexDirection: 'column',
        gap: '80px',
        alignItems: 'center',
        position: 'relative',
        color: '#fff'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: props.height ? props.height : '95vh',
          backgroundColor: props.config.theme.colors.primary,
          zIndex: -10,
          borderBottomLeftRadius: '10px',
          borderBottomRightRadius: '10px'
        }}
      />
      {props.children}
    </div>
  )
}
