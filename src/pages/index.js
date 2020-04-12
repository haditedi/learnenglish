import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/Layout"

export const query = graphql`
  {
    file(relativePath: { eq: "students.png" }) {
      img: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const IndexPage = ({
  data: {
    file: {
      img: { fluid },
    },
  },
}) => {
  return (
    <Layout>
      <section className="main">
        <article className="img-container">
          <Image
            fluid={fluid}
            alt="student"
            // imgStyle={{ objectFit: "cover" }}
          />
        </article>
        <article className="para">
          <p>
            Hi, my name is Santi, a fully qualified{" "}
            <a href="https://www.teachaway.com/tefl-certification/what-is-teflTEFL">
              TEFL
            </a>{" "}
            English teacher. Learning English online is fun! You can undertake
            lessons and make progress, in your own time, wherever you want. I am
            offering one-to-one English tuition online to children and adults
            whose first language is not English. If you would like to further
            your progress in English, I can offer support to equip students to
            become proficient in the most popular and widely used language in
            the world.
          </p>
        </article>
      </section>
    </Layout>
  )
}

export default IndexPage
