import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.scss'
/**
 * @augments {Component<Props, State>}
 */
class Avatar extends Component {
  static propTypes = {
    avatar: PropTypes.any,
    size: PropTypes.number,
    onClick: PropTypes.func
  }
  render() {
    const { avatar, size, onClick } = this.props
    return (
      <div className="avatar"
        onClick={() => onClick && onClick()}
        style={{
          backgroundImage: `url(${avatar})`,
          width: size ? `${size}px` : '100px',
          height: size ? `${size}px` : '100px',
          borderRadius: size ? `${size / 2}px` : '50px'
        }} />
    )
  }
}

export default Avatar