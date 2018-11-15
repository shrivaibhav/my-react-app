module.exports = {
  siteMetadata: {
    title: 'TITLE',
    description:
      'This is my first-gatsby-react site. And so this is my description',
    keyword: 'key-word, KeyWord, keeeeyyyyyWooooord, keywords, dammmmn',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '8ovud8wxjrfs',
        accessToken:
          'bcd9088ce86a75d4f152562f594d5c7da9f8be65f167c1a849f074e393406d5e',
      },
    },

    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
