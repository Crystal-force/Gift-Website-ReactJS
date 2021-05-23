import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Avatar } from '../../components'
import { IconButton, Menu, MenuItem, Tooltip } from '@material-ui/core'
import { Check, Information, Tridot } from '../../assets/icons'
/**
 * @augments {Component<Props, State>}
 */

class UserItem extends Component {
  static propTypes = {
    avatar: PropTypes.any,
    name: PropTypes.string,
    checked: PropTypes.bool,
    onEditAction: PropTypes.func,
    onResendAction: PropTypes.func,
    editable: PropTypes.bool
  }
  state = {
    anchorEl: null
  }
  handleClose = () => {
    this.setState({ anchorEl: null })
  }
  openEditMenu = evt => {
    this.setState({ anchorEl: evt.currentTarget })
  }
  onEditAction = () => {
    let { onEditAction } = this.props;
    onEditAction && onEditAction();
    this.handleClose();
  }
  onResendAction = () => {
    let { onResendAction } = this.props;
    onResendAction && onResendAction();
    this.handleClose();
  }
  render() {
    let { avatar, name, checked, editable } = this.props;
    let { anchorEl } = this.state;
    return (
      <div className="confirm-exchange-user-item">
        <div className="avatar-container">
          <Avatar size={58} avatar={avatar} />
        </div>
        <div className="name">
          <div>{name}</div>
          {checked ?
            <div className="check-container"><Check /></div>
            : <div className="infomation-container">
              <Tooltip arrow title="Pendiente confirmar" placement="top">
                <IconButton size="small" color="secondary"><Information /></IconButton>
              </Tooltip>
            </div>}
        </div>
        <div className="menu-action">
          {editable &&
            <IconButton
              size="small"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={this.openEditMenu}
            >
              <Tridot />
            </IconButton>
          }
        </div>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.onEditAction}>Editar</MenuItem>
          <MenuItem onClick={this.onResendAction}>Reenviar</MenuItem>
        </Menu>
      </div>
    )
  }
}

export default UserItem