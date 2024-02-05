import React from 'react';
import Banner from '../banner';
import CoverImg from '../CoverImg';
import Promotion from '../Promotion';
import PromotionBannerCta from '../PromotionBannerCta';

const rgxBlogRoute = /^\/blog\/?$/;

const CustomLayout = (props) => {
  const { headerComp: Header, sidepanelComp: Sidepanel, footerComp: Footer } = props;
  const isBlogRoute = rgxBlogRoute.test(window.location.pathname);
  
  return (
    <>
      <Header />
      <Sidepanel />
      {!isBlogRoute && (
        <Banner config={props.config}>
          <div style={{ maxWidth: '768px' }}>
            {props.frontmatter?.bannerDate || 'Date missing'}
            <h1 id='banner-title'>{props.frontmatter?.bannerTitle || 'Title missing'}</h1>
            {props.frontmatter?.bannerSubtitle || 'Subtitle missing'}
          </div>
          <CoverImg src={props.frontmatter?.bannerImg || 'https://github.com/sid-patri-fable/fable-blog/assets/155963795/94565b42-4e6e-49c7-9138-64bdd31baf6e'} />
        </Banner>
      )}
      {props.children}
      {!isBlogRoute && (
        <Promotion config={props.config}>
          <h2>Start your 14-day free trial today!</h2>
          <p>Want to get the right partner for your sales team and close more deals?</p>

          <PromotionBannerCta href="https://app.sharefable.com/login" cta='Get started' />
        </Promotion>
      )}
      <Footer />
    </>
  )
};

export default CustomLayout;
