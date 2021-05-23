import React, { Component } from 'react'
import { Provider } from 'react-redux';
import Alert from './Alert'
import store from './store'
class AlertContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <Alert />
      </Provider>
    )
  }
}

export default AlertContainer 
