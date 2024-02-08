import React from 'react'
import TOC from './toc'
import BannerCTA from './banner-cta/BannerCTA'

export default function Content(props) {
  return (
    <div className='content-con'>
      <TOC toc={props.toc} />
      <div className='content'>
        {props.children}
      </div>
      <BannerCTA show={props.showBanner} />
    </div>
  )
}
