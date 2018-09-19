import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', lang: 'sv', content: 'Frisörsalong' },
            { name: 'description', lang: 'en', content: 'Hair salon' },
            { name: 'keywords', lang: 'sv', content: 'frisör, frisörsalong, salong, linköping' },
            { name: 'keywords', lang: 'en', content: 'hair, salon, linkoping' },
          ]}
        >
          <html lang="sv" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
