import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { InputAdornment, TextField } from '@material-ui/core'
/**
 * @augments {Component<Props, State>}
 */
class TextFieldWithIcon extends Component {
  static propTypes = {
    icon: PropTypes.element,
  }
  render() {
    return (
      <TextField
        {...this.props}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {this.props.icon}
            </InputAdornment>
          ),
        }}
      />

    )
  }
}

export default TextFieldWithIcon