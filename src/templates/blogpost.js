import React from "react"
import Layout from "../components/Layout"
import Class from "./blogpost.module.css"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Helmet } from "react-helmet"

const blogpost = ({ data }) => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img className="img-container" alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout>
      <Helmet>
        <title>{data.mine.title}</title>
      </Helmet>
      <div className={Class.align}>
        <h1>{data.mine.title}</h1>
        <p>{data.mine.date}</p>
        {documentToReactComponents(data.mine.body.json, options)}
      </div>
    </Layout>
  )
}

export default blogpost

export const query = graphql`
  query($slug: String!) {
    mine: contentfulBlog(slug: { eq: $slug }) {
      title
      date(formatString: "DD MMMM YYYY")
      body {
        json
      }
    }
  }
`
