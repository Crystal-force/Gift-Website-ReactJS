import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.scss'
/**
 * @augments {Component<Props, State>}
 */
class CardFunction extends Component {
  static propTypes = {
    icon: PropTypes.element,
    title: PropTypes.string,
    descrption: PropTypes.string
  }

  render() {
    const { icon, title, descrption } = this.props
    return (
      <div className="card-function">
        <div className="card-function-icon">{icon}</div>
        <div className="card-function-contents">
          <div className="card-function-title">{title}</div>
          <div className="card-function-description">{descrption}</div>
        </div>
      </div>
    )
  }
}

export default CardFunction