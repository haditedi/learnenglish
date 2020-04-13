import React from "react"

const Footer = () => {
  const currYear = new Date().getFullYear()

  return (
    <div className="footer">
      <p>&copy; {currYear} Learn English Digital</p>
    </div>
  )
}

export default Footer
