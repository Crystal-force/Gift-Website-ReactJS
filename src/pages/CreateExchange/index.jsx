import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StepProgress } from '../../components'
import EditFriends from './EditFriends'
import ExchangeInfo from './ExchangeInfo'
import UserInfo from './UserInfo'
import { setHeader } from '../../action'
import backgroundImage001 from '../../assets/images/40950.jpg'
import './style.scss'

class CreateExchange extends Component {

  state = {
    steps: 3,
    current: 1,
  }

  componentDidMount() {
    this.props.setHeader(
      <React.Fragment><span>{'Crea '}</span> el intercambio</React.Fragment>,
      backgroundImage001
    )
  }



  render() {
    const { steps } = this.state;
    const { exchange } = this.props
    const children = [<UserInfo />, <ExchangeInfo />, <EditFriends history={this.props.history} />]
    return (
      <div className="create-exchange">
        <StepProgress steps={steps} current={exchange.createStep} />
        {children[exchange.createStep - 1]}
      </div>
    )
  }
}

const mapStateToProps = ({ exchange }) => ({
  exchange
})

export default connect(mapStateToProps, {
  setHeader
})(CreateExchange)
