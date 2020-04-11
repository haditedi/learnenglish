import React from "react"

import "../styles/global.scss"
import layoutStyles from "./layout.module.scss"
import Header from "./header"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      {/* <div className={layoutStyles.content}> */}
      <Header />
      {props.children}
      {/* </div> */}
    </div>
  )
}

export default Layout
