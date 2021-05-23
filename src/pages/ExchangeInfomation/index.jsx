import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Account, Date, Gift, Paricient } from '../../assets/icons'
import ThemeColors from '../../config/ThemeColors'
import './style.scss'
import Exchange001 from '../../assets/svg/Exchange001.svg'
import Exchange002 from '../../assets/svg/Exchange002.svg'
import Exchange003 from '../../assets/svg/Exchange003.svg'
import Exchange004 from '../../assets/svg/Exchange004.svg'
import backgroundImage005 from '../../assets/images/1369.jpg'

import { setHeader, getAllExchange } from '../../action'
import { Button } from '@material-ui/core'
const photos = [Exchange001, Exchange002, Exchange003, Exchange004]
class ExchangeInformation extends Component {
  state = {
    upcoming: [],
    past: [],
    canceled: []
  }

  async componentDidMount() {
    this.props.setHeader(
      <div>Mis intercambios</div>,
      backgroundImage005
    )
    console.log(this.props.authUser);
    if (this.props.authUser.user.email) {
      let result = await this.props.getAllExchange(this.props.authUser.user.email)
      this.setState({ ...result })
    } else {
      this.props.history.push('/login')
    }
  }
  renderExchange = (title, data, iconColor, bgColor) => (
    <div className="exchange-lists">
      <div className="title">{title}</div>
      {data.map((item, index) => (
        <div className="exchange-item" key={index} style={{ backgroundColor: bgColor }} onClick={() => this.props.history.push(item.url)}>
          <div className="photo" style={{ backgroundImage: `url(${photos[index % photos.length]})` }} />
          <div className="details">
            <div className="list">
              <div className="icon" style={{ color: iconColor }}><Account /></div>
              <div className="content">{item.exchange.group_name}</div>
            </div>
            <div className="list">
              <div className="icon" style={{ color: iconColor }}><Gift /></div>
              <div className="content">{item.type}</div>
            </div>
            <div className="list">
              <div className="icon" style={{ color: iconColor }}><Date /></div>
              <div className="content">{moment(item.exchange.date).format('DD/MM/YYYY')}</div>
            </div>
          </div>
          <div className="paticients">
            <div className="icon" style={{ color: iconColor }}><Paricient /></div>
            <div className="content">{item.userCount}</div>
          </div>
        </div>
      ))}
    </div>
  )

  render() {
    let { upcoming, past, canceled } = this.state
    return (
      <div className="exchange-information">
        {this.renderExchange('Próximos', upcoming, ThemeColors.primary.main, 'var(--panda-third-color)')}
        {this.renderExchange('Pasados', past, '#ACACAC', 'var(--panda-third-color)')}
        {this.renderExchange('Anulados', canceled, '#ACACAC', 'var(--panda-gray-color)')}
        <div className="actions">
          <Button>Crear nuevo Intercambio</Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ authUser }) => ({
  authUser
})

export default withRouter(connect(mapStateToProps, {
  setHeader, getAllExchange
})(ExchangeInformation))
