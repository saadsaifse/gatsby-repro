## Steps to reproduce the error

This repo is created for an issue [here](https://github.com/gatsbyjs/gatsby/issues/20799)

1. Run `npm uninstall prismjs`
1. Run `gatsby develop`
1. Browse to `localhost:{port}/___graphql` and enter the following query

```
query MyQuery {
  allMarkdownRemark {
    edges {
      node {
        html
      }
    }
  }
}
```

It should give the following error

```
"message": "Cannot query field \"html\" on type \"MarkdownRemark\"."
```

If you install `prismjs` again, then that bug will be gone.

In my opinion, if `prismjs` is not installed, `gatsby-remark-prismjs` should throw an error to avoid this dependency confusion.
