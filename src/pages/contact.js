import React from "react"
import Layout from "../components/Layout"

import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Formui from "../components/Formui"

const Contact = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "bunny.png" }) {
        img: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Helmet>
        <title>Contact me | Learn English online</title>
        <meta name="description" content="Contact me page" />
      </Helmet>
      <div className="toCenter">
        <Img
          className="contact-bunny"
          fluid={data.file.img.fluid}
          alt="bunny"
        />
      </div>
      <div className="para toCenter">
        <h1>Contact Me</h1>
        <Formui />
        {/* <h1 style={{ textAlign: "center" }}>Contact Me</h1>
        <p style={{ marginBottom: "0" }}>Call me at +44 (0) 7886 242540</p>
        <p>Email : santi.tedi@gmail.com</p> */}
      </div>
    </Layout>
  )
}

export default Contact
