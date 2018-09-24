import React, { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components'
import Layout from '../components/layout'


const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    height: 100%;
  }
`
const IndexPage = () => (
  <Fragment>
    <Layout>
      <h1>Hello World</h1>
    </Layout>
    <GlobalStyle/>
  </Fragment>
)

export default IndexPage
