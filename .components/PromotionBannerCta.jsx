import React from 'react'

export default function PromotionBannerCta(props) {
  return (
    <a
      style={{
        fontWeight: '600',
        fontSize: '1rem',
        background: '#713aff',
        border: 'none',
        padding: '12px 10px',
        color: '#fff',
        borderRadius: '6px',
        cursor: 'pointer',
        marginTop: '12px'
      }}
      href={props.href}
    >
      {props.cta}
    </a>
  )
}