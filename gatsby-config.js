module.exports = {
  siteMetadata: {
    title: `Daniel Duarte`,
    description: `My name is Daniel Duarte, a peoples person Web Developer passionate about new technologies, startup, and outdoors. I have a very diverse background, and I use that to offer a unique perspective on the development of any type of project. I enjoy help to build teams and create the bond necessary to bring life to things that lives on the internet, whether that be websites, applications, or anything in between. My goal is to build products that users love and provide results to investors.`,
    author: `@danielduartego`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
