import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.scss'
/**
 * @augments {Component<Props, State>}
 */
class CardWorking extends Component {
  static propTypes = {
    icon: PropTypes.element,
    title: PropTypes.string,
    descrption: PropTypes.string
  }

  render() {
    const { icon, title, descrption } = this.props
    return (
      <div className="card-working">
        <div className="card-working-icon">{icon}</div>
        <div className="card-working-title">{title}</div>
        <div className="card-working-description">{descrption}</div>
      </div>
    )
  }
}

export default CardWorking