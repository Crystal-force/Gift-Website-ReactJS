import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { AlertAction } from '../../components/Alert';

import { Button, Checkbox, Divider, FormControlLabel, IconButton } from '@material-ui/core';
import { AddAccount, Delete, Edit, Events } from '../../assets/icons'
import { Avatar, IconCircle, RoundButton } from '../../components'
import avatars from '../../utils';
import EditMember from './EditMember';
import {
  setUserList,
  createExchange,
  createStep
} from '../../action'


/**
 * @augments {Component<Props, State>}
 */
class EditFriends extends Component {

  state = {
    editFriend: false,
    confirmed: false,
    userList: [{
      icon: 1,
      name: '',
    }, {
      icon: 2,
      name: '',
    }, {
      icon: 3,
      name: '',
    }]
  }
  onConfirm = data => {
    const { userList, editIndex } = this.state;
    if (editIndex === -1) {
      userList.push(data);
    } else {
      userList.splice(editIndex, 1, data)
    }
  }
  addNewFriend = () => {
    this.setState({
      editIndex: -1,
      editFriend: true
    })
  }

  editFriend = index => {
    this.setState({
      editIndex: index,
      editFriend: true
    })
  }

  removeFriend = index => {
    const { userList } = this.state;
    userList.splice(index, 1);
    this.setState({ userList })
  }

  checkField = () => {
    const { userList } = this.state;
    for (let friend of userList) {
      if (!friend.name) throw new Error('Por favor llenar todos los participantes')
    }
    if (userList.length < 2) throw new Error('El intercambio debe tener al menos 3 participantes')
    if (userList.length >49) throw new Error('El intercambio debe tener un máximo de 50 participantes.')
  }

  realizar = async () => {
    try {
      this.checkField();
      this.props.setUserList(this.state.userList);
      let toPath = await this.props.createExchange()
      this.props.history.push(toPath);
    } catch (error) {
      console.log(error);
      AlertAction.openAlert('Gift2Gift', error.message, null);
    }
  }
  render() {
    const { userList, editFriend, editIndex, confirmed } = this.state;
    const { exchange: { userInfo: { name, email } } } = this.props;
    let showLists = [{
      icon: 0,
      name, email
    }].concat(userList)
    return (
      <div className="edit-friends">
        <IconCircle icon={<Events />} />
        <div className="title">¡Estas a punto de finalizar tu intercambio!</div>
        <div className="sub-title">Agrega los participantes del intercambio, mínimo (3) máximo (50) incluyendo al organizador </div>
        <div className="edit-info">
          {
            showLists.map((user, index) => (
              <div className="user-list-item" key={`${index}-${user.name}`}>
                <Avatar avatar={user.icon ? avatars[user.icon] : avatars[0]} size={50} />
                <div className="name">
                  {user.name || <div className="placeholder" onClick={() => this.editFriend(index - 1)}>Ingresa participante</div>}{!index && <span>(organizador)</span>}
                </div>
                {index ?
                  <div className="action">
                    <IconButton size="small" onClick={() => this.editFriend(index - 1)}><Edit /></IconButton>
                    <Divider orientation="vertical" flexItem style={{ margin: '0 1rem' }} />
                    <IconButton size="small" onClick={() => this.removeFriend(index - 1)} disabled={index < 3}><Delete /></IconButton>
                  </div>
                  : null
                }
              </div>
            ))
          }
          <div className="m-t-40">
            <RoundButton onClick={this.addNewFriend}><AddAccount />&nbsp;Añadir Nuevo integrante</RoundButton>
          </div>
          <div className="m-t-20">
            <FormControlLabel
              className="fs-16"
              control={
                <Checkbox checked={confirmed} onClick={() => this.setState({ confirmed: !confirmed })}
                />
              }
              label="Desea confirmar el intercambio"
            />
          </div>
          <div className="d-flex justify-evenly m-t-20">
            <Button variant="outlined" onClick={() => this.props.createStep(2)}>&lt;Atras</Button>
            <Button onClick={this.realizar} disabled={!confirmed}>Realizar sorteo</Button>
          </div>
        </div>
        <EditMember
          open={editFriend}
          onClose={() => this.setState({ editFriend: false })}
          onConfirm={this.onConfirm}
          data={editIndex === -1 ? {} : userList[editIndex]}
        />
      </div>
    )
  }
}
const mapStateToProps = ({ authUser, exchange }) => ({
  authUser, exchange
})

export default withRouter(connect(mapStateToProps, {
  setUserList,
  createStep,
  createExchange
})(EditFriends))
