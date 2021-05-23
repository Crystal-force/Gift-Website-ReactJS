import React, { Component } from 'react'
import { connect } from 'react-redux'
import { closeAlert } from './action'

import './style.scss'
import AppLogo from '../../assets/icons/Logo'
import { Button } from '@material-ui/core'
class Alert extends Component {

  onAction = () => {
    this.props.alert.onAction && this.props.alert.onAction();
    this.props.closeAlert();
  }

  render() {
    const { title, content, open } = this.props.alert
    return (
      <div className={`panda-alert-dialog${open ? ' active' : ''}`}>
        <div className="dialog-content">
          <div className="title">{title || "Easy in Easy Out"}</div>
          <div className="main-content">
            <div className="logo"><AppLogo /></div>
            <div className="content">
              <pre>
                {content}
              </pre>
            </div>
          </div>
          <div className="actions">
            <Button color="default" onClick={() => this.props.closeAlert()}>Close</Button>
            {this.props.alert.onAction && <Button onClick={this.onAction}>Yes</Button>}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ alert }) => ({
  alert
})

export default connect(mapStateToProps, {
  closeAlert
})(Alert)
