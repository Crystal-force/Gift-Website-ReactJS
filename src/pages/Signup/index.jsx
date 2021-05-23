import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './style.scss'
import { Button, TextField } from '@material-ui/core'
import { Logo } from '../../assets/icons'
import { signup } from '../../action'
import { AlertAction } from '../../components/Alert'
class Singup extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  }

  onChange = field => evt => {
    this.setState({ [field]: evt.target.value })
  }

  signup = async () => {
    try {
      let { username, email, password } = this.state;
      await this.props.signup(username, email, password);
      this.props.history.push('/login')
    } catch (error) {
      console.log(error)
      AlertAction.openAlert('error', error.message, null);
    }
  }
  render() {
    let { username, email, password } = this.state;
    return (
      <div className="signup">
        <div className="header">
          <div className="logo"><Logo /></div>
          <div className="title">Inicia sesión</div>
        </div>
        <div className="content">
          <div className="m-t-15">
            <TextField placeholder="user name" onChange={this.onChange('username')} value={username} />
          </div>
          <div className="m-t-15">
            <TextField placeholder="email" onChange={this.onChange('email')} value={email} />
          </div>
          <div className="m-t-15">
            <TextField placeholder="password" onChange={this.onChange('password')} value={password} type="password" />
          </div>
          <div className="action m-t-15">
            <Button onClick={this.signup}>Continuar</Button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

export default withRouter(connect(mapStateToProps, {
  signup
})(Singup))
