import React from 'react'
import "./index.css"

const BannerCTA = () => {
  return (
    <div className='banner-cta-con'>
      <div className='banner-cta-content'>
        <h3>
          Want to increase your conversions & close more deals?
        </h3>
        <p>
          Get your GTM team the partner they need. Let&apos;s unleash the Fables of your product.
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <a href="https://app.sharefable.com/login" className='btn-banner-cta'>Start 14 days free trial</a>
      </div>
    </div>
  )
}

export default BannerCTA
