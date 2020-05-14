import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerStyles from "./header.module.css"
import Home from "@material-ui/icons/HomeTwoTone"
import Person from "@material-ui/icons/PersonTwoTone"
import Contact from "@material-ui/icons/DraftsTwoTone"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <nav>
        <h1 style={{ marginBottom: "10px" }}>{data.site.siteMetadata.title}</h1>
      </nav>

      <nav className={headerStyles.bar}>
        <ul className={headerStyles.navList}>
          <li>
            {" "}
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              {" "}
              <Home style={{ verticalAlign: "bottom" }} /> Home
            </Link>
          </li>

          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/about"
            >
              <Person style={{ verticalAlign: "bottom" }} /> About
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact"
            >
              <Contact style={{ verticalAlign: "bottom" }} /> Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
