import 'date-fns';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Checkbox, FormControlLabel, MenuItem, Select } from '@material-ui/core'
import { Account, Clock, Coin, Comment, Events, Gift, Information, Location, ToRight } from '../../assets/icons'
import { IconCircle, TextFieldWithIcon } from '../../components'
import { setExchangeInfo, createStep } from '../../action'

import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { AlertAction } from '../../components/Alert';
import { DoubleValidation } from '../../utils/Validation';

class ExchangeInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      group: '',
      exchangeType: 'Presencial',
      location: '',
      date: Date.now(),
      time: '20:00',
      message: '',
      range: '',
      types: []
    }
  }

  componentDidMount() {
    let { group, exchangeType, location, date, time, message, range, types } = this.props.exchange.exchangeInfo
    this.setState({ group, exchangeType: exchangeType || 'Presencial', location, date: date || Date.now(), time: time || '20:00', message, range, types: types || [] })
  }


  onChangeField = field => evt => {
    this.setState({ [field]: evt.target.value })
  }

  onChangeType = value => {
    let { types } = this.state;
    if (types.includes(value)) {
      types.splice(types.indexOf(value), 1)
    } else {
      types.push(value);
    }
    this.setState({ types })
  }

  checkField = () => {
    let { group, exchangeType, location, message, time, date, range, types } = this.state;
    if (!group) throw new Error('Por favor ingresa un nombre para tu intercambio');
    if (!exchangeType) throw new Error('Please select tipo');
    if (!location) throw new Error('Por favor ingresa dónde será el intercambio');
    if (!date) throw new Error('Por favor selecciona la fecha del intercambio');
    if (!time) throw new Error('Por favor ingresa el monto del intercambio');
    if (!message) throw new Error('Por favor ingresa un mensaje para el grupo');
    if (!DoubleValidation(range)) throw new Error('Por favor ingresa el monto del intercambio');
    if (!types.length) throw new Error('Por favor selecciona las categorías de regalos permitidos');
  }

  addExcangeInfo = () => {
    try {
      this.checkField()
      this.props.setExchangeInfo(this.state)
    } catch (error) {
      AlertAction.openAlert('Gift2Gift', error.message, null);
    }
  }

  handleDateChange = evt => {
    this.setState({ date: evt })
  }

  checkedType = value => this.state.types.includes(value) || this.state.types.includes('Libre')
  render() {
    let { group, exchangeType, location, date, time, message, range } = this.state;
    return (
      <div className="exchange-info">
        <IconCircle icon={<Events />} />
        <div className="title">¡Ahora queremos conocer mas sobre el intercambio!</div>
        <div className="sub-title m-t-15 d-flex align-center"><Information />&nbsp;El administrador cuenta como participante del grupo </div>
        <div className="edit-info">
          <div>
            <TextFieldWithIcon
              icon={<Account />}
              placeholder="Nombre del grupo (Familia, Amigos, Oficina, etc)"
              value={group}
              onChange={this.onChangeField('group')}
            />
          </div>
          <div>
            <Select
              value={exchangeType}
              onChange={this.onChangeField('exchangeType')}
              style={{ textAlign: 'left' }}
              className="labeled-select"
            >
              <MenuItem value={'Presencial'} className="d-flex align-center">
                <Account />&nbsp;Presencial
            </MenuItem>
              <MenuItem value={'Remoto'} className="d-flex align-center">
                <Account />&nbsp;Remoto
            </MenuItem>
            </Select>
          </div>
          <div>
            <TextFieldWithIcon
              icon={<Location />}
              placeholder="Lugar"
              value={location}
              onChange={this.onChangeField('location')}
            />
          </div>
          <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                value={date}
                onChange={this.handleDateChange}
                disablePast
              // KeyboardButtonProps={{
              //   'aria-label': 'change date',
              // }}
              />
            </MuiPickersUtilsProvider>
            {/* <Date
            icon={<Date />}
            placeholder="Fecha"
            type="date"
            value={date}
            onChange={this.onChangeField('date')}
          /> */}
          </div>
          <div>
            <TextFieldWithIcon
              icon={<Clock />}
              placeholder="Fecha"
              type="time"
              value={time}
              onChange={this.onChangeField('time')}
            />
          </div>
          <div>
            <TextFieldWithIcon
              icon={<Comment />}
              placeholder="Mensaje para el grupo"
              multiline
              value={message}
              onChange={this.onChangeField('message')}
              rowsMax={2}
            />
          </div>
          <div>
            <TextFieldWithIcon
              icon={<Coin />}
              value={range}
              onChange={this.onChangeField('range')}
              placeholder="Monto del regalo"
            />
          </div>
          <div className="gift-types">
            <div className="title"><Gift />&nbsp;Tipos de Regalo</div>
            <div className="types">
              <div className="checkboxes">
                <div className="row">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.checkedType('Libre')}
                        onChange={() => this.onChangeType('Libre')}
                      />
                    }
                    label="Libre"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.checkedType('Libros')}
                        onChange={() => this.onChangeType('Libros')}
                      />
                    }
                    label="Libros "
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.checkedType('Tarjetas de regalo')}
                        onChange={() => this.onChangeType('Tarjetas de regalo')}
                      />
                    }
                    label="Tarjetas de regalo"
                  />
                </div>
                <div className="row">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.checkedType('Ropa')}
                        onChange={() => this.onChangeType('Ropa')}
                      />
                    }
                    label="Ropa"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.checkedType('Tecnología')}
                        onChange={() => this.onChangeType('Tecnología')}
                      />
                    }
                    label="Tecnología"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.checkedType('Tazas')}
                        onChange={() => this.onChangeType('Tazas')}
                      />
                    }
                    label="Tazas"
                  />

                </div>
              </div>
              {/* <div className="add-action">
                <IconButton ><AddCircle color={ThemeColors.primary.main} /></IconButton>
              </div> */}
            </div>
          </div>
          {/* <div className="row write-gift-type">
            <TextFieldWithIcon
              icon={<Gift />}
              placeholder="Escribe tipo de Regalo"
            />
            <div className="actions">
              <RoundButton variant="outlined">Añadir a la lista</RoundButton>
            </div>
          </div> */}
          <div className="row actions">
            <Button variant="outlined" onClick={() => this.props.createStep(1)}>&lt;Atras</Button>
            <Button onClick={this.addExcangeInfo}>Siguiente&nbsp;<ToRight /></Button>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = ({ authUser, exchange }) => ({
  authUser, exchange
})

export default connect(mapStateToProps, {
  setExchangeInfo, createStep
})(ExchangeInfo)