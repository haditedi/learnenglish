import React from "react"

import "../styles/global.css"
import layoutStyles from "./layout.module.css"
import Header from "./header"
import Footer from "./Footer"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
