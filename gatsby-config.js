/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content`,
      },
    },
    //`gatsby-transformer-remark`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 850,
            },
          },
          "gatsby-remark-copy-linked-files",
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              offsetY: "100",
              maintainCase: false,
              removeAccents: true,
            },
          },
          "gatsby-remark-prismjs",
        ],
      },
    },
  ],
}
