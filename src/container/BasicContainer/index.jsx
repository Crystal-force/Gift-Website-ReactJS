import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom';
import { Footer } from '../../components'
import Header from '../../components/Header'
import router from '../../routers';
import './style.scss'
class BasicContainer extends Component {

  render() {
    return (
      // this.props.authUser.user.email ?
      <div className="basic-container">
        <Header />
        <div className="main">
          <Switch>
            {router.map(element =>
              <Route key={element.path}
                path={element.path}
                component={element.component}
              />
            )}
            <Redirect to="/404" />
          </Switch>
        </div>
        <Footer />
      </div>
      // : <Redirect to="/login" />
    )
  }
}
const mapStateToProps = ({ authUser }) => ({
  authUser
})

export default withRouter(connect(mapStateToProps, {
})(BasicContainer))