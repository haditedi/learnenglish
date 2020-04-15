import React from "react"
import Layout from "../components/Layout"
import Class from "./blog.module.css"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

const blog = ({
  data: {
    mine: { nodes },
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Blog posts | Learn English online</title>
        <meta
          name="description"
          content="Blog posts from Learn English.digital - improve your english"
        />
      </Helmet>
      <div className="para">
        <h1>Blog Posts</h1>
        {nodes.map(item => {
          return (
            <div className={Class.background}>
              <a href={`blog/${item.slug}`}>
                <h1>{item.title}</h1>
                <p>Date posted: {item.date}</p>
              </a>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    mine: allContentfulBlog(sort: { fields: date, order: DESC }) {
      nodes {
        slug
        title
        date(formatString: "DD MMMM YYYY")
      }
    }
  }
`

export default blog
