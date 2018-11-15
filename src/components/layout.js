import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import Footer from './Footer'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            keyword
          }
        }
        allContentfulLink(sort: { fields: [createdAt], order: ASC }) {
          edges {
            node {
              title
              url
              createdAt
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            { name: 'keyword', content: data.site.siteMetadata.keyword },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header />
        {children}

        <Footer data={data}>
          Background made in Cinema 4D, 105 app in Swift, site in React.{' '}
          <a href="mailto:supppport@LOL-lol.com">Email us</a> to ask anything.
          @LOL
        </Footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
