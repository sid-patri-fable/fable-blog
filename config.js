import Header from "./.components/header/Header.jsx";
import TOC from "./.components/toc/index.jsx";
import CustomLayout from "./.components/custom-layout/CustomLayout.jsx";

module.exports = {
  version: "1.0.0",
  urlMapping: {
    globalPrefix: "/blog",
    entries: {},
    baseUrl: "https://sharefable.com/",
  },
  layout: CustomLayout,
  props: {
    header: {
      customComponent: Header,
      logo: {
        imageUrl: "https://sharefable.com/fable-logo.svg",
        title: "Fable Docs",
      },
      navLinks: {
        alignment: "right",
        links: [
          { title: "Product", url: "https://sharefable.com/products" },
          {
            title: "Solutions",
            subtitle: "The ultimate demo platform for all your GTM needs",
            sublinks: [
              {
                title: "Marketing",
                subtitle: "Increase conversions from your existing funnel",
                logo: "https://sharefable.com/logo/marketing-logo.svg",
                url: "https://sharefable.com/solutions/marketing",
              },
              {
                title: "Sales",
                subtitle: "Create deal-winning demos every single time",
                logo: "https://sharefable.com/logo/sales-logo.svg",
                url: "https://sharefable.com/solutions/sales",
              },
              {
                title: "Customer Success",
                subtitle: "Reduce support tickets with step-by-step guides",
                logo: "https://sharefable.com/logo/learning-and-development-logo.svg",
                url: "https://sharefable.com/solutions/customer-success",
              },
              {
                title: "Partnerships",
                subtitle: "Enable partners and skyrocket channel sales",
                logo: "https://sharefable.com/logo/partnerships-logo.svg",
                url: "https://sharefable.com/solutions/partnerships",
              },
            ],
            banner: {
              title: "You'd not want to miss this!",
              heading: "Create personalized demos to close more deals",
              description:
                "Our CEO was feature in Tekpon's podcast where he shared valuable insights on... well... how to close more deals!",
              cta: {
                title: "Give it a listen",
                url: "https://tekpon.com/podcasts/create-personalized-product-demos-to-close-more-deals/",
              },
            },
          },
          {
            title: "Testimonials",
            url: "https://sharefable.com/customer-love",
          },
          {
            title: "Resources",
            subtitle: "Made with love, from Fable's stable",
            sublinks: [
              {
                title: "Fable Champs",
                subtitle: "How hotshot SaaS companies achieved hypergrowth",
                logo: "https://sharefable.com/logo/fable-champs-logo.svg",
                url: "https://sharefable.com/growth-stories",
              },
              {
                title: "Fable Untold",
                subtitle:
                  "The small corner of the internet for inspiring growth stories",
                logo: "https://sharefable.com/logo/fables-untold-logo.svg",
                url: "https://sharefable.com/podcast/mastering-b2b-demand-generation",
              },
              {
                title: "Knowledge Base",
                subtitle: "Help you create compelling interactive demos",
                logo: "https://sharefable.com/logo/knowledge-base.svg",
                url: "https://help.sharefable.com/",
              },
              {
                title: "E-Books",
                subtitle: "Handy resources that all GTM teams will love",
                logo: "https://sharefable.com/logo/e-books-logo.svg",
                url: "https://sharefable.com/ebooks",
              },
              {
                title: "Fable Blog",
                subtitle:
                  "Marketing & sales folks - you do not want to miss this!",
                logo: "https://sharefable.com/logo/blog-logo.svg",
                url: "https://sharefable.com/blog",
              },
              {
                title: "Demo Showcase",
                subtitle: "Examples of interactive demos created using Fable",
                logo: "https://sharefable.com/logo/demo-showcase-logo.svg",
                url: "https://sharefable.com/demo-showcase",
              },
            ],
            banner: {
              title: "You'd not want to miss this!",
              heading: "Create personalized demos to close more deals",
              description:
                "Our CEO was feature in Tekpon's podcast where he shared valuable insights on... well... how to close more deals!",
              cta: {
                title: "Give it a listen",
                url: "https://tekpon.com/podcasts/create-personalized-product-demos-to-close-more-deals/",
              },
            },
          },
          { title: "Pricing", url: "https://sharefable.com/pricing" },
        ],
      },
      cta: {
        title: "Hello world",
        link: "#somewhere",
      },
      ctas: [
        {
          type: "primary",
          title: "Start for free",
          url: "https://www.sharefable.com/start-for-free?ref=nav_bar",
        },
        {
          type: "secondary",
          title: "Book a demo",
          url: "https://www.sharefable.com/get-a-demo",
        },
      ],
    },
    sidepanel: {
      showSidePanel: false,
    },
    content: {},
    footer: {
      logo: "https://sharefable.com/fable_footer-logo.svg",
      copyright: "Fable © 2024",
      links: [
        {
          heading: "Solutions",
          links: [
            {
              title: "Marketing",
              url: "https://sharefable.com/solutions/marketing",
            },
            { title: "Sales", url: "https://sharefable.com/solutions/sales" },
            {
              title: "Customer Success",
              url: "https://sharefable.com/solutions/customer-success",
            },
            {
              title: "Partnerships",
              url: "https://sharefable.com/solutions/partnerships",
            },
          ],
        },
        {
          heading: "Resources",
          links: [
            {
              title: "Fable Champs",
              url: "https://sharefable.com/growth-stories",
            },
            {
              title: "Fable Untold",
              url: "https://sharefable.com/podcast/mastering-b2b-demand-generation",
            },
            { title: "Knowledge Base", url: "https://help.sharefable.com/" },
            { title: "E-Books", url: "https://sharefable.com/ebooks" },
            { title: "Fable Blog", url: "https://sharefable.com/blog" },
            {
              title: "Demo Showcase",
              url: "https://sharefable.com/demo-showcase",
            },
          ],
        },
        {
          heading: "Company",
          links: [
            {
              title: "Testimonials",
              url: "https://sharefable.com/customer-love",
            },
            {
              title: "LinkedIn",
              url: "https://www.linkedin.com/company/sharefable/",
            },
            { title: "Twitter", url: "https://twitter.com/sharefable" },
            {
              title: "Privacy Policy",
              url: "https://sharefable.com/privacy-policy",
            },
            {
              title: "Affiliate Program",
              url: "https://www.sharefable.com/affiliate-program",
            },
          ],
        },
        {
          heading: "Competitors",
          links: [
            {
              title: "Fable vs Storylane",
              url: "https://sharefable.com/comparison/fable-vs-storylane",
            },
            {
              title: "Fable vs Navattic",
              url: "https://sharefable.com/comparison/fable-vs-navattic",
            },
            {
              title: "Fable vs Supademo",
              url: "https://sharefable.com/comparison/fable-vs-supademo",
            },
            {
              title: "Fable vs Tourial",
              url: "https://sharefable.com/comparison/fable-vs-tourial",
            },
            {
              title: "Fable vs Walnut",
              url: "https://sharefable.com/comparison/fable-vs-walnut",
            },
            {
              title: "Fable vs Reprise",
              url: "https://sharefable.com/comparison/fable-vs-reprise",
            },
          ],
        },
      ],
    },
    toc: {
      show: false,
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
        margin: "0 0 1.5rem 0",
        padding: 0,
        fontSize: "3.62rem",
        fontWeight: 700,
        lineHeight: "4.25rem",
      },
      h2: {
        margin: "0 0 2rem 0",
        padding: 0,
        fontSize: "2rem",
        fontWeight: 600,
        lineHeight: "2.25rem",
      },
      h3: {
        margin: "2rem 0 2rem 0",
        padding: 0,
        fontSize: "1.25rem",
        fontWeight: 600,
        lineHeight: "1.625rem",
      },
      h4: {
        margin: "0 0 1.5rem 0",
        padding: 0,
        fontSize: "1rem",
        fontWeight: 600,
        lineHeight: "1.375rem",
      },
      h5: {
        margin: "0 0 1.5rem 0",
        padding: 0,
        fontSize: "1rem",
        fontWeight: 600,
        lineHeight: "1.375rem",
      },
      h6: {
        margin: "0 0 1.5rem 0",
        padding: 0,
        fontSize: "1rem",
        fontWeight: 600,
        lineHeight: "1.375rem",
      },
      p: {
        margin: "1.5rem 0 1.5rem 0",
        padding: 0,
        fontSize: "1.125rem",
        fontWeight: 400,
        lineHeight: "1.625rem",
      },
    },
  },
};
