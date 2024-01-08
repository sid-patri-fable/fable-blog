import Header from "./.components/header/Header.jsx"

module.exports = {
  version: "1.0.0",
  urlMapping: {
    globalPrefix: "/",
    entries: {},
  },
  props: {
    header: {
      customComponent: Header,
      logo: {
        imageUrl: 'https://sharefable.com/fable-logo.svg',
        title: 'Fable Docs',
      },
      navLinks: {
        alignment: 'right',
        links: [
          { title: 'Product', url: 'https://sharefable.com' },
          {
            title: 'Solutions',
            subtitle: 'The ultimate demo platform for all your GTM needs',
            sublinks: [
              {
                title: 'Marketing',
                subtitle: 'Increase conversions from your existing funnel',
                logo: 'https://sharefable.com/logo/marketing-logo.svg',
                url: 'https://sharefable.com'
              },
              {
                title: 'Sales',
                subtitle: 'Create deal-winning demos every single time',
                logo: 'https://sharefable.com/logo/sales-logo.svg',
                url: 'https://sharefable.com'
              },
              {
                title: 'Presales',
                subtitle: 'Scale demo environments & personalize in minutes',
                logo: 'https://sharefable.com/logo/presales-logo.svg',
                url: 'https://sharefable.com'
              },
              {
                title: 'Partnerships',
                subtitle: 'Enable partners and skyrocket channel sales',
                logo: 'https://sharefable.com/logo/partnerships-logo.svg',
                url: 'https://sharefable.com'
              },
            ],
            banner: {
              title: 'You\'d not want to miss this!',
              heading: 'Create personalized demos to close more deals',
              description: 'Our CEO was feature in Tekpon\'s podcast where he shared valuable insights on... well... how to close more deals!',
              cta: {
                title: 'Give it a listen',
                url: 'https://sharefable.com'
              }
            }
          },
          {
            title: 'Resources',
            subtitle: 'Made with love, from Fable\'s stable',
            sublinks: [
              {
                title: 'Fable Champs',
                subtitle: 'How hotshot SaaS companies achieved hypergrowth',
                logo: 'https://sharefable.com/logo/fable-champs-logo.svg',
                url: 'https://sharefable.com'
              },
              {
                title: 'Fable Untold',
                subtitle: 'The small corner of the internet for inspiring growth stories',
                logo: 'https://sharefable.com/logo/fables-untold-logo.svg',
                url: 'https://sharefable.com'
              },
              {
                title: 'E-books',
                subtitle: 'Handy resources that all GTM teams will love',
                logo: 'https://sharefable.com/logo/e-books-logo.svg',
                url: 'https://sharefable.com'
              }
            ],
            banner: {
              title: 'You\'d not want to miss this!',
              heading: 'Create personalized demos to close more deals',
              description: 'Our CEO was feature in Tekpon\'s podcast where he shared valuable insights on... well... how to close more deals!',
              cta: {
                title: 'Give it a listen',
                url: 'https://sharefable.com'
              }
            }
          },
          { title: 'Pricing', url: 'https://sharefable.com' },
        ]
      },
      cta: {
        title: 'Hello world',
        link: '#somewhere'
      },
      ctas: [
        {
          type: 'secondary',
          title: 'Start 14 days free trial',
          url: 'https://sharefable.com',
        },
        {
          type: 'primary',
          title: 'Get a demo',
          url: 'https://sharefable.com',
        }
      ]
    },
    sidepanel: {
      showSidePanel: false
    },
    content: {},
    footer: {
      logo: 'https://sharefable.com/fable_footer-logo.svg',
      copyright: 'Fable © 2024',
      links: [
        {
          heading: 'Solutions',
          links: [
            { title: 'Marketing', url: 'https://sharefable.com/solutions/marketing' },
            { title: 'Sales', url: 'https://sharefable.com/solutions/sales' },
            { title: 'Presales', url: 'https://sharefable.com/solutions/presales' },
            { title: 'Partnerships', url: 'https://sharefable.com/solutions/partnerships' },
          ]
        },
        {
          heading: 'Resources',
          links: [
            { title: 'Fable Champs', url: 'https://sharefable.com/growth-stories' },
            { title: 'Fable Untold', url: 'https://sharefable.com/podcast/mastering-b2b-demand-generation' },
            { title: 'E-books', url: 'https://sharefable.com/ebooks' },
            { title: 'Privacy Policy', url: 'https://sharefable.com/privacy-policy' },
          ]
        },
        {
          heading: 'Company',
          links: [
            { title: 'LinkedIn', url: 'https://www.linkedin.com/company/sharefable/' },
            { title: 'Twitter', url: 'https://twitter.com/sharefable' },
          ]
        },
        {
          heading: 'Competitors',
          links: [
            { title: 'Fable vs Navattic', url: 'https://sharefable.com/comparison/fable-vs-navattic' },
            { title: 'Fable vs Demostack', url: 'https://sharefable.com/comparison/fable-vs-demostack' },
            { title: 'Fable vs Reprise', url: 'https://sharefable.com/comparison/fable-vs-reprise' },
            { title: 'Fable vs Walnut', url: 'https://sharefable.com/comparison/fable-vs-walnut' },
            { title: 'Fable vs Storylane', url: 'https://sharefable.com/comparison/fable-vs-storylane' },
            { title: 'Fable vs Testbox', url: 'https://sharefable.com/comparison/fable-vs-testbox' },
          ]
        },
      ]
    },
  },
  theme: {
    colors: {
      primary: "#16023e",
      textPrimary: "#1e293b",
      textSecondary: "#fff",
      textTertiary: "#713aff",
      backgroundPrimary: "#fff",
      backgroundSecondary: "#16023e",
      accent: "#ff5cc5",
      border: "#d1d5db",
    },
    typography: {
      fontSize: 16,
      fontFamily: "IBM Plex Sans",
      lineHeight: 1.5,
      h1: {
        margin: '0 0 1.5rem 0',
        padding: 0,
        fontSize: '3.62rem',
        fontWeight: 700,
        lineHeight: '4.25rem'
      },
      h2: {
        margin: '0 0 2rem 0',
        padding: 0,
        fontSize: '2rem',
        fontWeight: 600,
        lineHeight: '2.25rem'
      },
      h3: {
        margin: '2rem 0 2rem 0',
        padding: 0,
        fontSize: '1.25rem',
        fontWeight: 600,
        lineHeight: '1.625rem'
      },
      h4: {
        margin: '0 0 1.5rem 0',
        padding: 0,
        fontSize: '1rem',
        fontWeight: 600,
        lineHeight: '1.375rem'
      },
      h5: {
        margin: '0 0 1.5rem 0',
        padding: 0,
        fontSize: '1rem',
        fontWeight: 600,
        lineHeight: '1.375rem'
      },
      h6: {
        margin: '0 0 1.5rem 0',
        padding: 0,
        fontSize: '1rem',
        fontWeight: 600,
        lineHeight: '1.375rem'
      },
      p: {
        margin: '1.5rem 0 1.5rem 0',
        padding: 0,
        fontSize: '1.125rem',
        fontWeight: 400,
        lineHeight: '1.625rem'
      }
    },
  }
}
