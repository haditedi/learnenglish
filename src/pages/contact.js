import React from "react"
import Layout from "../components/Layout"
import bunny from "../images/bunny.png"
import { Helmet } from "react-helmet"

const contact = () => {
  return (
    <Layout>
      <Helmet>
        <title>Contact me | Learn English online</title>
        <meta name="description" content="Contact me page" />
      </Helmet>
      <div className="toCenter">
        <img className="contact-bunny" src={bunny} alt={bunny} />
      </div>
      <div className="para toCenter">
        <h1>Contact Me</h1>
        <p>Call me at +44 (0) 7886 242540</p>
        <p>Email : santi.tedi@gmail.com</p>
      </div>
    </Layout>
  )
}

export default contact
