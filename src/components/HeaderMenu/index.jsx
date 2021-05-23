import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Logo } from '../../assets/icons'
import { loginWithFirebase } from '../../action'
import './style.scss'
const menus = [
  { label: 'Gift2Gift', location: 'Gift2Gift' },
  { label: '¿Cómo funciona?', location: '¿Cómo funciona?' },
  { label: 'Otras funciones', location: 'Otras funciones' },
]
class HeaderMenu extends Component {
  componentDidMount() {
    // if (!this.props.authUser.user.email) this.props.loginWithFirebase();
  }
  gotoMenu = id => {
    try {
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
      })
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    return (
      <div className="header-menu">
        <div className="logo"><Logo /></div>
        <div className="menus">
          <ul>
            {menus.map((menu, index) => <li key={index} onClick={() => this.gotoMenu(menu.location)}>{menu.label} </li>)}
          </ul>
          <div className="user-info">
            {
              this.props.authUser.user.email ?
                <div className="user-name">{this.props.authUser.user.displayName || this.props.authUser.user.email}</div>
                : <Button onClick={() => this.props.history.push('/login')}>Iniciar sesión</Button>
            }

          </div>
        </div>
      </div >
    )
  }
}

const mapStateToProps = ({ authUser }) => ({
  authUser
})

export default withRouter(connect(mapStateToProps, {
  loginWithFirebase
})(HeaderMenu))
