import React, { useState, useEffect } from 'react'
import "./index.css"

const Header = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);

    document.body.classList.toggle('no-scroll');
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992 && menuOpen) {
        setMenuOpen(false)
        document.body.classList.toggle('no-scroll');
      }
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    };
  }, [menuOpen]);

  return (
    <>
      <div
        style={{
          backgroundColor: '#fbf6ff',
          position: 'sticky',
          top: '0',
          zIndex: '4',
          borderBottom: menuOpen ? '' : '1px solid #d0d0ff'
        }}
        className='header-con'
      >
        <div
          style={{
            maxWidth: '1500px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <h1 style={{ margin: '0', lineHeight: 1, display: 'inline', maxHeight: 'contain' }}>
            <a href='/' style={{ backgroundColor: 'transparent', lineHeight: 1 }}>
              <img
                src={props.props.logo.imageUrl}
                alt="fable logo"
                style={{
                  height: '48px',
                  width: '112px'
                }}
              />
            </a>
          </h1>
          <div className='menu-screen'>
            <ul
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.7rem',
                fontSize: '0.9rem',
                listStyleType: 'none',
                padding: 0,
                margin: 0
              }}
            >
              {props.props.navLinks.links.map((link, idx) => {
                if (link?.sublinks) {
                  return (
                    <li key={`${link.title}-${idx}`} className='header-link-con'>
                      <Menu
                        title={link.title}
                        subTitle={link.subtitle}
                        subLinks={link.sublinks}
                        banner={link.banner}
                      />
                    </li>
                  )
                }
                return (
                  <li className='header-link-con' key={`${link.title}-${idx}`}>
                    <a
                      className='header-link'
                      href={link.url}
                    >
                      {link.title}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={handleToggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div
            className='cta-con'
            style={{
              alignItems: 'center',
              gap: '1.2rem'
            }}
          >
            {props.props.ctas.map((cta, idx) => {
              return (
                <a
                  style={{
                    border: '2px solid #7567ff',
                    transition: 'all .2s ease-out',
                    padding: '1rem 2rem',
                    font: 'inherit',
                    borderRadius: '4rem',
                    fontSize: '1rem',
                    fontWeight: 500,
                    lineHeight: '1',
                  }}
                  className={`${cta.type === 'secondary' ? 'cta-secondary' : 'cta-primary'}`}
                  href={cta.url}
                  key={`${cta.url}-${idx}`}
                >
                  {cta.title}
                </a>
              )
            })}
          </div>
        </div>
      </div>
      <div className={`overlay ${menuOpen ? 'open' : ''}`} onClick={handleToggleMenu}></div>
      <div className={`menu-content ${menuOpen ? 'open' : ''}`}>
        <div style={{ height: '100%', padding: '1rem' }}>
          <div className="menu-content-mobile" style={{ overflowY: 'auto' }}>
            {props.props.navLinks.links.map((link) => (
              <MenuItemMobile key={link.title} item={link} />
            ))}
          </div>
          <div
            className=''
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row-reverse',
              width: '100%',
              gap: '1rem',
            }}
          >
            {props.props.ctas.map((cta, idx) => {
              return (
                <a
                  style={{
                    border: '2px solid #7567ff',
                    transition: 'all .2s ease-out',
                    padding: '1rem 2rem',
                    font: 'inherit',
                    borderRadius: '4rem',
                    fontSize: '1rem',
                    fontWeight: 500,
                    lineHeight: '1',
                    display: 'block',
                    flex: '1',
                    textAlign: 'center'
                  }}
                  className={`${cta.type === 'secondary' ? 'cta-secondary' : 'cta-primary'}`}
                  href={cta.url}
                  key={`${cta.url}-${idx}`}
                >
                  {cta.title}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

const MenuItemMobile = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  const hasSublinks = props.item.sublinks && props.item.sublinks.length > 0;

  return (
    <div
      className={`menu-item ${hasSublinks ? 'collapsible' : ''} ${isOpen ? 'open' : ''}`}
    >
      {hasSublinks ? (
        <div
          className="menu-item-header"
          onClick={handleToggleCollapsible}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <span>
            {props.item.title}
          </span>
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/arrow-thin-chevron-bottom-icon.png"
            style={{
              height: '8px',
              marginLeft: '5px',
              transform: `${isOpen ? 'rotate(360deg)' : 'rotate(270deg)'}`,
              transition: 'all 0.3s ease-out'
            }}
            alt="icon"
          />
        </div>
      ) : (
        <a
          className="menu-item-header"
          href={props.item.url}
          style={{
            width: '100%',
            color: 'inherit',
            display: 'block',
            background: 'inherit'
          }}
        >
          {props.item.title}
        </a>
      )}
      {hasSublinks && (
        <div className="menu-item-content">
          {props.item.sublinks.map((sublink, idx) => (
            <a href={sublink.url} key={`${sublink.title}-${idx}`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <img src={sublink.logo} alt="logo" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }} key={sublink.title}>
                <p style={{ margin: '0', lineHeight: '1', fontSize: '14px', fontWeight: 500 }}>
                  {sublink.title}
                </p>
                <p style={{ margin: '0', lineHeight: '1', fontSize: '14px' }}>
                  {sublink.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

function Menu(props) {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <span
        className='header-link'
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
        style={{
          cursor: 'pointer',
        }}
      >
        {props.title}
        <img
          src="https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/arrow-thin-chevron-bottom-icon.png"
          style={{
            height: '8px',
            marginLeft: '5px',
            transform: `${showMenu ? 'rotate(180deg)' : 'rotate(0)'}`,
            transition: 'all 0.3s ease-out'
          }}
          alt="icon"
        />
      </span>
      <div
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
        className={`menu ${showMenu ? 'menu-visible' : 'menu-hidden'}`}
        style={{
          width: '100%',
          maxWidth: '1500px',
          height: 'fit-content',
          backgroundColor: 'transparent',
          position: 'absolute',
          top: '100px',
          left: '50%',
          zIndex: -1,
        }}
      >
        <div
          style={{
            margin: '1rem 1rem 0 1rem',
            width: 'calc(100% - 4rem)',
            height: '100%',
            backgroundColor: '#fff',
            borderRadius: '0.6rem',
            display: 'flex',
            padding: '1rem',
            gap: '1rem',
            alignItems: 'stretch'
          }}
        >
          <div
            style={{
              flex: '0.6',
              padding: '1rem 1.2rem'
            }}
          >
            <div
              style={{
                borderBottom: '1px solid black',
              }}
            >
              <p
                style={{
                  lineHeight: '1',
                  margin: '0',
                  paddingBottom: '0.4rem'
                }}
              >
                {props.subTitle}
              </p>
            </div>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.4rem',
                marginTop: '1rem'
              }}
            >
              {props.subLinks.map((link, idx) => {
                return (
                  <li
                    key={idx}
                    style={{
                      margin: '0'
                    }}
                  >
                    <a
                      href={link.url}
                      style={{
                        color: 'inherit',
                        fontSize: '0.9rem',
                        display: 'flex',
                        gap: '0.6rem',
                        alignItems: 'center',
                        padding: '0.5rem',
                        width: 'calc(100% - 1rem)',
                        borderRadius: '8px'
                      }}
                      className='menu-links'
                    >
                      <img src={link.logo} alt="logo" />
                      <div
                      >
                        <p
                          style={{
                            fontSize: '0.9rem',
                            margin: 0,
                            fontWeight: '600',
                            lineHeight: '1'
                          }}
                        >
                          {link.title}
                        </p>
                        <p
                          style={{
                            fontSize: '0.9rem',
                            margin: 0,
                            lineHeight: '1',
                            marginTop: '4px'
                          }}
                        >
                          {link.subtitle}
                        </p>
                      </div>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
          <div
            style={{
              flex: '0.4',
              background: 'linear-gradient(90deg,#fedf64,#ff7450,#7567ff)',
              borderRadius: '6px',
              padding: '1px',
              height: 'fit-content'
            }}
          >
            <div
              style={{
                backgroundColor: '#fff',
                borderRadius: '6px',
                padding: '1rem 2rem',
                height: 'fit-content'
              }}
            >

              <div
                style={{
                  borderBottom: '1px solid black',
                }}
              >
                <p
                  style={{
                    lineHeight: '1',
                    margin: '0',
                    fontSize: '0.9rem',
                    paddingBottom: '0.4rem'
                  }}
                >
                  {props.banner.title}
                </p>
              </div>
              <div
                style={{
                  marginTop: '1rem'
                }}
              >
                <p
                  style={{
                    lineHeight: '1',
                    margin: '0',
                    fontWeight: '600',
                    fontSize: '0.9rem'
                  }}
                >
                  {props.banner.heading}
                </p>
                <p
                  style={{
                    lineHeight: '1',
                    margin: '0',
                    marginTop: '0.5rem',
                    fontWeight: '300',
                    fontSize: '0.9rem'
                  }}
                >
                  {props.banner.description}
                </p>
                <div
                  style={{
                    marginTop: '1rem'
                  }}
                >
                  <a href={props.banner.cta.url} className='banner-title'>
                    {props.banner.cta.title}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
