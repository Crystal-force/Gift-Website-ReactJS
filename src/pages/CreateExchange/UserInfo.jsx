import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, MenuItem, Select } from '@material-ui/core'
import { Account, Email, Telephone, ToRight } from '../../assets/icons'
import { Avatar, SelectSex, TextFieldWithIcon } from '../../components'
import ReactCountryFlag from "react-country-flag"
import countries from './Country'
import { editUserInfo } from '../../action'
import Avatar001 from '../../assets/images/avatar001.jpg';
import { AlertAction } from '../../components/Alert'
import { EmailValidation, TelephoneValidation } from '../../utils/Validation'
class UserInfo extends Component {

  state = {
    name: '',
    email: '',
    telephone: '',
    country: 'none',
    sex: 'male'
  }

  componentDidMount() {
    let { name, email, telephone, country, sex } = this.props.exchange.userInfo;
    this.setState({ name, email, telephone, country, sex })
  }

  onChangeField = field => evt => {
    this.setState({ [field]: evt.target.value })
  }

  checkField = () => {
    let { name, email, telephone, country, sex } = this.state
    console.log(telephone)
    if (telephone && !TelephoneValidation(telephone)) throw new Error('Por favor ingresa un teléfono válido');
    if (!EmailValidation(email)) throw new Error('Por favor ingresa un email válido.');
    if (!name) throw new Error('Por favor ingresa tu nombre.');
    if (!country || country === 'none') throw new Error('Por favor selecciona tu país.');
    if (!sex) throw new Error('Por favor selecciona un género.');
  }

  createUser = async () => {
    try {
      this.checkField()
      this.props.editUserInfo(this.state);
    } catch (error) {
      console.log(error)
      AlertAction.openAlert('Gift2Gift', error.message, null)
    }

  }
  render() {
    const { name, email, telephone, country, sex } = this.state
    return (
      <div className="user-info">
        <Avatar avatar={Avatar001} />
        <div className="title">¡Eres el organizador de este evento!</div>
        <div className="sub-title">Por favor adjunta los siguientes datos y completa los pasos:</div>
        <div className="edit-info">
          <TextFieldWithIcon
            icon={<Account />}
            placeholder="Nombre"
            value={name}
            onChange={this.onChangeField('name')}
          />
          <TextFieldWithIcon
            icon={<Email />}
            placeholder="Email"
            value={email}
            onChange={this.onChangeField('email')}
          />
          <TextFieldWithIcon
            icon={<Telephone />}
            placeholder="Teléfono"
            value={telephone}
            onChange={this.onChangeField('telephone')}
          />
          <Select
            value={country || 'none'}
            onChange={this.onChangeField('country')}
            placeholder="Country"
            style={{ textAlign: 'left' }}
          >
            <MenuItem value='none' disabled>Selecciona tu país</MenuItem>
            {countries.map(country => (
              <MenuItem value={country.code} key={country.code}>
                <ReactCountryFlag
                  style={{
                    fontSize: '1em',
                    lineHeight: '1em',
                    marginRight: '1rem'
                  }}
                  countryCode={country.code}
                  svg />
                {country.name}
              </MenuItem>
            ))}
          </Select>
          <div className="sub-title">Género</div>
          <SelectSex value={sex} onChange={value => this.setState({ sex: value })} />
          <Button onClick={this.createUser}>Siguiente&nbsp;<ToRight /></Button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = ({ exchange }) => ({
  exchange
})

export default connect(mapStateToProps, {
  editUserInfo
})(UserInfo)