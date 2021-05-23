import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.scss'
/**
 * @augments {Component<Props, State>}
 */
class IconCircle extends Component {
  static propTypes = {
    icon: PropTypes.element
  }

  render() {
    return (
      <div className="icon-circle">
        {this.props.icon}
      </div>
    )
  }
}

export default IconCircle