import React from 'react'
import './index.css'

const Footer = (props) => {
  console.log(">>> props", props)
  return (
    <footer className={"footer-con"}>
      <div className={"conFooter"}>
        <div className={"footerMain"}>
          <div className={"footerLeft"}>
            <div className={"logo"}>
              <img
                src={props.props.logo}
                alt={'Fable logo'}
                layout={'fill'}
                style={{
                  objectFit: "contain",
                  width: "100%",
                }}
              />
            </div>
            <p>Create stunning interactive demos in 5 minutes</p>

            <div className={"g2BadgeCon"}>
              {props.props.g2Badges.map((badge, idx) => (
                <img
                  className={"g2Badge"}
                  key={idx}
                  src={badge.source}
                  alt={badge.name}
                />
              ))}
            </div>

          </div>
          <div className={"conRight"}>
            {props.props.links.map(({ heading, links }, idx) => (
              <div className={"category"} key={idx}>
                <p className={"categoryTitle"}>{heading}</p>
                <ul className={"categoryLinks"}>
                  {links.map(({title, url, openInNewPage }, idx) => (
                    <li key={idx}>
                      <a href={url} target={openInNewPage ? '_blank' : '_self'} rel="noreferrer">
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className={"copyrightText"} style={{ marginTop: '4rem' }}>
          <span style={{ color: '#FBF6FF', opacity: '0.2' }}>
            {' '}
            {props.props.copyright}
          </span>
        </div>
        <div className={"mobileFooter"}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
            <div className={"logo"}>
              <img
                src={props.props.logo}
                alt={'Fable logo'}
                layout={'fill'}
                style={{
                  objectFit: "contain",
                  width: "100%",
                }}
              />
            </div>
            <span style={{ color: '#FBF6FF', opacity: '0.2' }}>
              {' '}
              {props.props.copyright}
            </span>
          </div>
          <div className={"g2BadgeConMobile"}>
            {props.props.g2Badges.map((badge, idx) => (
              <img
                className={"g2Badge"}
                key={idx}
                src={badge.source}
                alt={badge.name}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
