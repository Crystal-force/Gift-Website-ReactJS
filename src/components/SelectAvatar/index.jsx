import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Dialog, DialogContent } from '@material-ui/core'
import './style.scss'
import avatars from '../../utils'
/**
 * @augments {Component<Props, State>}
 */
class SelectAvatar extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
  }

  onSelect = avatar => {
    this.props.onSelect && this.props.onSelect(avatar);
    this.props.onClose();
  }

  render() {
    return (
      <Dialog open={this.props.open} onClose={this.props.onClose} className="select-avatar">
        <DialogContent>
          <div className="row">
            <div className="items" style={{ backgroundImage: `url(${avatars[0]})` }} onClick={() => this.onSelect(0)} />
            <div className="items" style={{ backgroundImage: `url(${avatars[1]})` }} onClick={() => this.onSelect(1)} />
            <div className="items" style={{ backgroundImage: `url(${avatars[2]})` }} onClick={() => this.onSelect(2)} />
          </div>
          <div className="row">
            <div className="items" style={{ backgroundImage: `url(${avatars[3]})` }} onClick={() => this.onSelect(3)} />
            <div className="items" style={{ backgroundImage: `url(${avatars[0]})` }} onClick={() => this.onSelect(0)} />
            <div className="items" style={{ backgroundImage: `url(${avatars[1]})` }} onClick={() => this.onSelect(1)} />
          </div>
        </DialogContent>
      </Dialog>
    )
  }
}

export default SelectAvatar