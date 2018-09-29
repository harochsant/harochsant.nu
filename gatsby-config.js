module.exports = {
  siteMetadata: {
    title: 'Hår & Sånt',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'harochsant',
        short_name: 'harochsant',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
  ],
}
