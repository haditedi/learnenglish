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
      <div className="toCenter">
        <h1>Contact Me</h1>
        <Formui />
      </div>
      <div className="toCenter">
        <p style={{ marginTop: "20px" }}>
          or <b>email: fmstedi@gmail.com </b>
        </p>
        <p>
          <b>Mobile: +44 (0) 788 624 2540</b>
        </p>
      </div>
    </Layout>
  )
}

export default Contact
