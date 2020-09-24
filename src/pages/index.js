import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"
import rocket from "../images/rocket2.svg"

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
      <Helmet>
        <title>Freelance online English Teacher</title>
        <meta
          name="description"
          content="Learn English online by a qualified TEFL teacher. My name is Santi Tedi. I am an Edinburgh based teacher. Learn and improve your English from the comfort of your home, as long as you have motivation, you will increase your ability in English."
        />
        <meta name="author" content="Santi Tedi" />
        <html lang="en" />
      </Helmet>
      <section className="main">
        <article className="img-container">
          <Image
            fluid={fluid}
            style={{ width: "100%" }}
            alt="student"
            imgStyle={{ objectFit: "contain" }}
          />
        </article>
        <article className="para">
          <p>
            Hi, my name is Santi, a fully qualified{" "}
            <a href="https://www.teachaway.com/tefl-certification/what-is-teflTEFL">
              TEFL
            </a>{" "}
            English teacher. Learning English online is fun!
          </p>
          <p>
            You can undertake lessons and make progress, in your own time,
            wherever you want. I am offering one-to-one English tuition online
            to children and adults whose first language is not English.
          </p>
          <p>
            If you would like to further your progress in English, I can offer
            support to equip students to become proficient in the most popular
            and widely used language in the world.
          </p>
        </article>
      </section>
      <section className="contentBackground">
        <div className="content">
          <h2>Teaching English as A Foreign Language</h2>
          <p>
            I am experienced in tutoring children and adults whose first
            language is not English. I am fluent in Bahasa Indonesia and can
            understand some Chinese Mandarin so if it helps I will use these
            languages to help you in our lessons.{" "}
          </p>
          <p>
            We can use Skype, Google Docs, WhatsApp, Zoom and FaceTime, and my
            past experience of teaching online to over 2500 students have been
            very successful.
          </p>
          <p>
            We can cover all aspects of English in :
            <ul className="bullet">
              <li>CV proof-reading</li>
              <li>Job interview role plays</li>
              <li>Speaking to improve your pronunciation</li>
              <li>Writing to improve grammar and sentence structures</li>
              <li>Listening and Reading to improve your comprehension</li>
              <li>Improving your confidence in English and your study</li>
              <li>British culture lessons and life in the UK</li>
              <li>Hospitality and Finance (background in these fields)</li>
            </ul>{" "}
          </p>
          <p>
            I do provide the lesson materials tailored made to suit your needs
            and requirements.
          </p>
          <img src={rocket} alt="rocket" className="rocket" />
        </div>
      </section>

      <section>
        <div className="content">
          <p>
            My rates are: <br />
            £15 per 55 mins one to one online lessons.
            <br />
            £10 per 55 mins for group online lessons (per person). <br />
            £7.5 per 25 minute one to one online lessons per person. <br />I can
            offer a discount for booking over 10 hours!
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
