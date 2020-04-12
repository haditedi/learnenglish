import React from "react"
import Layout from "../components/Layout"

const AboutPage = () => {
  return (
    <Layout>
      <div className="para">
        <h1>About Me</h1>

        <p>
          My vision is to facilitate your advancement in English, which may be
          instrumental to your career, future and way of life. I am a fully
          qualified TEFL teacher (Teaching English as a Foreign Language) and
          have been living and working in the UK for over 20 years. I have
          enjoyed a successful career in both the hospitality and banking
          industries and now wish to devote more time to making a direct
          difference to adults and children in the field of English language.
        </p>
        <h2>Professional Experience</h2>
        <ul>
          <li>
            13 years of Hospitality Industry, mentoring and providing support to
            my teams to achieve their targets.
          </li>
          <li>
            5 years of banking industry experience, improving communication
            within teams and achieving the company's targets.
          </li>
          <li>
            One year of teaching English as a Foreign language online,
            encouraging students to learn effectively and helping them build
            confidence.
          </li>
        </ul>
        <h2>Education</h2>
        <ul>
          <li>High National Diploma in Hospitality Management.</li>
          <li>
            Associate Member, Chartered Institute of Management Accountants
            (CIMA).
          </li>
          <li>TELF ( Teaching English as Foreign Language ).</li>
        </ul>
      </div>
    </Layout>
  )
}

export default AboutPage
