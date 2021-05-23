import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import moment from 'moment'
import { Account, AccountQuestion, Calander, Clock, Coin, Comment, Confirm, Date, Facebook, Gift, Instagram, Invitation, Location, Whatsapp, WishList } from '../../assets/icons'
import { Avatar } from '../../components'
import avatars from '../../utils'
import './style.scss'
import { Button, IconButton } from '@material-ui/core'
import UserItem from './UserItem'
import ThemeColors from '../../config/ThemeColors'
import { setHeader, setLoading, getExchange } from '../../action'
import backgroundImage002 from '../../assets/images/14644.jpg'
import EditMember from '../CreateExchange/EditMember'

class ConfirmExchange extends Component {
  state = {
    editFriend: false,
    editIndex: -1,
    exchange: {},
    uid: '',
    eid: ''
  }
  async componentDidMount() {
    let { uid, eid } = this.props.match.params
    let exchange = await this.props.getExchange(uid, eid);
    this.props.setHeader(
      <div>
        <div className="d-flex justify-center">
          <Confirm />
        </div>
        <div>
          {exchange.isAdmin ? '¡Felicidades ya creaste el intercambio!' : `${exchange.adminName} han invitado al intercambio`}
        </div>
      </div>,
      backgroundImage002
    )
    this.setState({ exchange, uid, eid })
  }

  renderDetail = (icon, name, value, key) => (
    <div className="detail" key={key}>
      <div className="icon">{icon}</div>
      <div className="name">{name}</div>
      <div className="value">{value}</div>
    </div>
  )

  renderAddAction = (icon, label, onClick) => (
    <div className="add-action-button" onClick={onClick}>
      <div className="icon">{icon}</div>
      <div className="label">{label}</div>
    </div>
  )
  onConfirm = (data) => {
    const { editIndex } = this.state;
    const { exchange: { userList } } = this.state;
    if (editIndex === -1) {
      userList.push(data);
    } else {
      userList.splice(editIndex, 1, data)
    }
    this.setState({
      exchagne: {
        ...this.state.exchange,
        userList
      }
    })
  }

  editFriend = index => {
    console.log(index);
    this.setState({
      editIndex: index,
      editFriend: true
    })
  }
  resendMail = async (index, sendMailFunction) => {
    this.props.setLoading(true);
    const { exchange: { userList } } = this.state;
    await sendMailFunction(userList[index].email)
    this.props.setLoading(false);
  }

  render() {
    let { editFriend, editIndex, uid, eid } = this.state;
    let { exchange: { exchangeInfo = {}, userList = [], isAdmin = false, adminName='' } } = this.state;
    if (!exchangeInfo) exchangeInfo = {}

    let details = [{
      icon: <Account />,
      name: 'Nombre del Grupo',
      value: exchangeInfo.group_name
    }, {
      icon: <Invitation />,
      name: 'Tipo de Intercambio ',
      value: exchangeInfo.venue
    }, {
      icon: <Location />,
      name: 'Lugar',
      value: exchangeInfo.location
    }, {
      icon: <Date />,
      name: 'Fecha',
      value: moment(exchangeInfo.date).format('MM/DD/YYYY')
    }, {
      icon: <Clock />,
      name: 'Hora',
      value: exchangeInfo.hour
    }, {
      icon: <Comment />,
      name: 'Mensaje',
      value: exchangeInfo.message
    }, {
      icon: <Gift />,
      name: 'Tipos de regalo',
      value: exchangeInfo.type
    }, {
      icon: <Coin />,
      name: 'Monto del regalo',
      value: exchangeInfo.amount
    }]
    return (
      <div className="confirm-exchange">
        <div className="title">Detalles de tu intercambio</div>
        <div className="user-info">
          <Avatar avatar={avatars[0]} />
          <div>{adminName}</div>
          <div className="primary-color">(organizador)</div>
        </div>
        <div className="sub-title">Integrantes</div>
        <div className="user-list">
          {userList.map((user, index) => (
            <UserItem
              avatar={user.icon ? avatars[user.icon] : avatars[0]}
              checked={user.checked}
              editable={isAdmin}
              name={user.name}
              key={index}
              onEditAction={() => this.editFriend(index)}
              onResendAction={() => this.resendMail(index, user.resendMail)}
            />
          ))}
        </div>
        <div className="sub-title">Detalles</div>
        <div className="details">
          {details.map((detail, index) => this.renderDetail(detail.icon, detail.name, detail.value, index))}
        </div>
        <div className="action">
          <Button onClick={() => this.props.history.push(`/touched-exchange/${uid}/${eid}`)}><AccountQuestion questionColor={ThemeColors.primary.main} />¿Quién me toco en el intercabio?</Button>
        </div>
        <div className="add-action">
          {this.renderAddAction(<WishList />, 'Agregar o editar la wishlist ', () => this.props.history.push(`/wishlist/${uid}/${eid}`))}
          {this.renderAddAction(<Calander />, 'Agregar calendario ')}
        </div>
        <div className="make-exchange">
          <div className="before" />
          <div className="main">
            <div className="title m-t-15 m-b-15">Realiza todos los intercambios que desees</div>
            <Button onClick={() => window.open('/home')}>Realizar nuevo intercambio</Button>
            <div className="title m-t-15 m-b-15">Y comparte con tus amigos</div>
            <div className="actions">
              <IconButton color="primary"><Whatsapp /></IconButton>
              <IconButton color="primary"><Facebook /></IconButton>
              <IconButton color="primary"><Instagram /></IconButton>
            </div>
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

const mapStateToProps = ({ exchange }) => ({
  exchange
})

export default withRouter(connect(mapStateToProps, {
  setHeader, getExchange, setLoading
})(ConfirmExchange))