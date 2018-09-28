import React, { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components'
import Layout from '../components/layout'
import { Flex, Box } from '../components/grid'

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
      <Flex>
        <Box xs="12" sm="6" md="6" lg="4">
          <h1>Hello World! this is awesome</h1>
        </Box>
        <Box xs="12" sm="6" md="6" lg="8">
          <h1>Hello World! this is not awesome</h1>
        </Box>
      </Flex>
    </Layout>
    <GlobalStyle />
  </Fragment>
)

export default IndexPage
