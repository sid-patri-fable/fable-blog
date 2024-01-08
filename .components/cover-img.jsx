import React from 'react'

export default function CoverImg(props) {
  return (
    <img
      src={props.src}
      alt="banner img"
      style={{
        objectFit: props?.objectFit ? props.objectFit : 'cover',
        verticalAlign: 'middle',
        width: '100%',
        height: '100%',
        maxHeight: '727px',
        maxWidth: '1164px',
        borderRadius: '10px'
      }}
    />
  )
}
