/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: `Yadunand Prem`,
        siteUrl: `https://yadunut.com`,
        twitter: `@yadunut`,
    },
    plugins: [
        `gatsby-plugin-emotion`,
        `gatsby-plugin-catch-links`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/posts`,
                name: `posts`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [`gatsby-remark-prismjs`],
            },
        },
    ],
};