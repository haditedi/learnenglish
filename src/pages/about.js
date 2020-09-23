import React from "react"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"
import classes from "./about.module.css"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: {
    backgroundColor: "#fde2e2",
    backgroundImage: "url('../images/back-about.svg')",
    color: "white",
  },
})

const AboutPage = () => {
  const myclass = useStyles()
  return (
    <Layout>
      <Helmet>
        <title>About me | Learn English online</title>
        <meta name="description" content="Info about me" />
      </Helmet>
      <div className={`${classes.aboutPara} ${classes.back}`}>
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
        <ExpansionPanel classes={{ root: myclass.root }}>
          <ExpansionPanelSummary
            className={`${classes.aboutPara} ${classes.exp}`}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h2>Professional Experience</h2>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails
            className={`${classes.aboutPara} ${classes.back}`}
          >
            <ul className={classes.bullet}>
              <li>
                <p>
                  13 years of Hospitality Industry, mentoring and providing
                  support to my teams to achieve their targets.
                </p>
              </li>
              <li>
                <p>
                  5 years of banking industry experience, improving
                  communication within teams and achieving the company's
                  targets.
                </p>
              </li>
              <li>
                <p>
                  Over one year of teaching English as a Foreign language
                  online, encouraging students to learn effectively and helping
                  them build confidence.
                </p>
              </li>
            </ul>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel classes={{ root: myclass.root }}>
          <ExpansionPanelSummary
            className={`${classes.aboutPara} ${classes.exp}`}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h2>Education</h2>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails
            className={`${classes.aboutPara} ${classes.back}`}
          >
            <ul className={classes.bullet}>
              <li>
                <p>High National Diploma in Hospitality Management.</p>
              </li>
              <li>
                <p>BA Degree in Hospitality Management.</p>
              </li>
              <li>
                <p>
                  Associate Member, Chartered Institute of Management
                  Accountants (CIMA).
                </p>
              </li>
              <li>
                <p>TELF ( Teaching English as Foreign Language ).</p>
              </li>
            </ul>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </Layout>
  )
}

export default AboutPage
