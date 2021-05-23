import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ReCAPTCHA from "react-google-recaptcha";
import './style.scss'
import { Button, TextField } from '@material-ui/core'
import { Logo } from '../../assets/icons'
import { loginFirebase, authenticationCode } from '../../action'
import { AlertAction } from '../../components/Alert';
import ReactCodeInput from 'react-verification-code-input';
import { EmailValidation } from '../../utils/Validation';
class ExchangeInformation extends Component {

  state = {
    email: '',
    password: '',
    authenticate: false,
    authenticateCode: 0
  }

  onChangeField = field => evt => {
    this.setState({ [field]: evt.target.value })
  }

  onChangeRecaptcha = data => {
    console.log(data);
  }

  onChangeCode = authenticateCode => {
    this.setState({ authenticateCode })
  }
  loginFirebase = async () => {
    try {
      let { email, password } = this.state
      if (!EmailValidation(email)) {
        AlertAction.openAlert('Gift2Gift', 'Por favor ingresa un correo válido', null);
        return;
      }
      let result = await this.props.loginFirebase(email, password);
      console.log(result);
      this.setState({ authenticate: true })
      // this.props.history.push('/')
    } catch (error) {
      AlertAction.openAlert('Gift2Gift', error.message, null);
    }
  }
  checkAuthenticate = async () => {
    let { email, authenticateCode } = this.state;
    let result = await this.props.authenticationCode(email, authenticateCode);
    if (result === true) {
      this.props.history.push('/exchange-information');
    } else {
      AlertAction.openAlert('Gift2Gift', "Código inválido. Por favor ingresa el código enviado a tu correo.", null);
    }
  }
  render() {
    let { email, authenticate } = this.state
    return (
      <div className="login">
        <div className="header">
          <div className="logo"><Logo /></div>
          <div className="title">Inicia sesión</div>
        </div>
        <div className="content">
          {authenticate ?
            <React.Fragment>
              <ReactCodeInput onChange={this.onChangeCode} fields={5} className="input-code"/>
              <div className="description">
                <span>Ingresa el código de verificación enviado a tu correo para continuar</span>
              </div>
              <div className="action m-t-15">
                <Button onClick={this.checkAuthenticate}>Confirmar código</Button>
              </div>
            </React.Fragment>
            : <React.Fragment>
              <div className="m-t-15">
                <TextField placeholder="email" onChange={this.onChangeField('email')} value={email} />
              </div>
              <div className="description">
                <span>Se enviará un código de inicio de sesión a tu correo electrónico</span>
              </div>
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={this.onChangeRecaptcha}
              />
              <div className="action m-t-15">
                <Button onClick={this.loginFirebase}>Continuar</Button>
              </div>
            </React.Fragment>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

export default withRouter(connect(mapStateToProps, {
  loginFirebase, authenticationCode
})(ExchangeInformation))
