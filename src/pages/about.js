import React from "react"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"
import classes from "./about.module.css"

const AboutPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>About me | Learn English online</title>
        <meta name="description" content="Info about me" />
      </Helmet>
      <div className={classes.back}></div>
      <div className="content">
        <h1>About Me</h1>

        <ul className={classes.bullet}>
          <li>
            <p>
              My vision is to facilitate your advancement in English, which may
              be instrumental to your career, future and way of life.
            </p>
          </li>
          <li>
            <p>
              I am a fully qualified TEFL teacher (Teaching English as a Foreign
              Language) and have been living and working in the UK for over 20
              years.
            </p>
          </li>
          <li>
            <p>
              I have enjoyed a successful career in both the hospitality and
              banking industries and now wish to devote more time to making a
              direct difference to adults and children in the field of English
              language.
            </p>
          </li>
        </ul>

        <h1 className={classes.mTop}>Professional Experience</h1>

        <ul className={classes.bullet}>
          <li>
            <p>
              13 years of Hospitality Industry, mentoring and providing support
              to my teams to achieve their targets.
            </p>
          </li>
          <li>
            <p>
              5 years of banking industry experience, improving communication
              within teams and achieving the company's targets.
            </p>
          </li>
          <li>
            <p>
              Over one year of teaching English as a Foreign language online,
              encouraging students to learn effectively and helping them build
              confidence.
            </p>
          </li>
        </ul>

        <h1 className={classes.mTop}>Education</h1>

        <ul className={classes.bullet}>
          <li>
            <p>High National Diploma in Hospitality Management.</p>
          </li>
          <li>
            <p>BA Honors Degree in Hospitality Management.</p>
          </li>
          <li>
            <p>
              Associate Member, Chartered Institute of Management Accountants
              (CIMA).
            </p>
          </li>
          <li>
            <p>TELF ( Teaching English as Foreign Language ).</p>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default AboutPage
