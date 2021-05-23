import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Dialog, DialogActions, DialogContent, IconButton, TextField } from '@material-ui/core'
import { Avatar, SelectAvatar, SelectSex } from '../../components'
import { Close } from '../../assets/icons'
import { styles } from '../../config/ThemeColors'
import { AlertAction } from '../../components/Alert'
import { EmailValidation, TelephoneValidation } from '../../utils/Validation'
import avatars from '../../utils'
/**
 * @augments {Component<Props, State>}
 */
class EditMember extends Component {
  static propTypes = {
    title: PropTypes.string,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func,
    data: PropTypes.object
  }

  state = {
    selectAvatar: false,
    data: {}
  }
  componentDidMount() {

  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    const { data } = nextProps
    this.setState({ data });
  }
  onClose = () => this.setState({ selectAvatar: false })
  onSelectAvatar = avatar => {
    const { data } = this.state;
    this.setState({
      data: {
        ...data,
        icon: avatar
      }
    })
  }
  onChangeData = (field, evt) => {
    const { data } = this.state;
    this.setState({
      data: {
        ...data,
        [field]: evt.target.value
      }
    })
  }
  checkField = () => {
    const { data } = this.state;
    if (!data.name) throw new Error('Por favor ingresa un nombre válido')
    if (!EmailValidation(data.email)) throw new Error('Por favor ingresa un email válido')
    if (data.telephone && !TelephoneValidation(data.telephone)) throw new Error('Por favor ingresa un teléfono válido')
  }
  onConfirm = () => {
    try {
      this.checkField();
      this.props.onConfirm && this.props.onConfirm(this.state.data)
      this.props.onClose();
    } catch (error) {
      AlertAction.openAlert('Gift2Gift', error.message, null)
    }
  }
  render() {
    let { data } = this.state;
    if (!data) data = {}
    return (
      <Dialog open={this.props.open} style={styles()} fullWidth>
        <DialogActions className="d-flex justify-center">
          <IconButton size="small" onClick={this.props.onClose}><Close /></IconButton>
        </DialogActions>
        <DialogContent>
          <div className="d-flex justify-center">
            <Avatar
              avatar={data.icon ? avatars[data.icon] : avatars[0]}
              onClick={() => this.setState({ selectAvatar: true })}
            />
          </div>
          <div className="d-flex justify-center fs-28">
            {
              data.email ? 'Editar participante' : 'Añadir nuevo integrante'
            }
          </div>
          <div className="m-t-20">
            <TextField placeholder="Nombre" value={data.name || ''} onChange={evt => this.onChangeData('name', evt)} />
          </div>
          <div className="m-t-20">
            <TextField placeholder="Correo" value={data.email || ''} onChange={evt => this.onChangeData('email', evt)} />
          </div>
          <div className="m-t-20">
            <TextField placeholder="Teléfono" value={data.telephone || ''} onChange={evt => this.onChangeData('telephone', evt)} />
          </div>
          <div className="d-flex justify-center m-t-15 m-b-15">Género</div>
          <div className="d-flex justify-center">
            <SelectSex value={data.sex || 'male'} onChange={value => this.setState({ data: { ...data, sex: value } })} />
          </div>
        </DialogContent>
        <DialogActions style={{ justifyContent: 'center' }}>
          <Button onClick={this.onConfirm}>{(this.props.data && this.props.data.email) ? 'Aceptar y enviar invitación' : 'Añadir'}</Button>
        </DialogActions>
        <SelectAvatar
          open={this.state.selectAvatar}
          onClose={this.onClose}
          onSelect={this.onSelectAvatar} />
      </Dialog>
    )
  }
}

export default EditMember