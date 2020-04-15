const path = require(`path`)

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blogpost.js`)
  const result = await graphql(
    `
      query {
        mine: allContentfulBlog(sort: { fields: date, order: DESC }) {
          nodes {
            slug
          }
        }
      }
    `
  )

  result.data.mine.nodes.forEach(item => {
    createPage({
      // Path for this page — required
      path: `/blog/${item.slug}`,
      component: blogPostTemplate,
      context: {
        slug: item.slug,
      },
    })
  })
}
