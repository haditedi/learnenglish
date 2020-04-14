import React from "react"
import Layout from "../components/Layout"
import bunny from "../images/bunny.png"

const contact = () => {
  return (
    <Layout>
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
