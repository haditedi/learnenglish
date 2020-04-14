import React from "react"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"

const blog = () => {
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
        <h1>This is blog</h1>
      </div>
    </Layout>
  )
}

export default blog
