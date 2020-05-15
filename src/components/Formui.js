import React from "react"
import TextField from "@material-ui/core/TextField"
import classes from "./Formui.module.css"
import Button from "@material-ui/core/Button"
import SendIcon from "@material-ui/icons/Send"

const formui = () => {
  return (
    <form
      className={classes.formui}
      name="contact"
      action="/success"
      method="POST"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact"></input>
      <TextField
        required
        id="outlined-required"
        label="Name"
        name="name"
        variant="outlined"
      />
      <TextField
        id="outlined-number"
        label="Phone Number"
        name="number"
        variant="outlined"
      />
      <TextField
        id="email"
        label="Email"
        type="email"
        name="email"
        variant="outlined"
      />
      <TextField
        id="message"
        label="Message"
        name="message"
        multiline
        rows={4}
        variant="outlined"
      />
      <Button
        style={{ marginTop: "10px", backgroundColor: "black" }}
        variant="contained"
        color="primary"
        type="submit"
        endIcon={<SendIcon />}
      >
        SEND
      </Button>
    </form>
  )
}

export default formui
