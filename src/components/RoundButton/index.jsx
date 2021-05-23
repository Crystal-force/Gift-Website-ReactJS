import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import './style.scss'
class RoundButton extends Component {

  render() {
    return (
      <Button variant="outlined" {...this.props} className={`round-button${this.props.className ? ` ${this.props.className}` : ''}`}>
        {this.props.children}
      </Button>
    )
  }
}

export default RoundButton