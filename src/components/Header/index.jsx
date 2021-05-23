import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { HeaderMenu } from '..'
import './style.scss'
/**
 * @augments {Component<Props, State>}
 */
class Header extends Component {
  render() {
    let { header: { label, background } } = this.props;
    return (
      <header className="header">
        <div className="background" style={{ backgroundImage: `url(${background})` }} />
        <HeaderMenu />
        <div className='title'>{label}</div>
      </header>
    )
  }
}
const mapStateToProps = ({ header }) => ({
  header
})

export default withRouter(connect(mapStateToProps, {
})(Header))
