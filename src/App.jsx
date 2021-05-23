import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Home, Login, Signup, Page404 } from './pages';
import { setLoading } from './action'
import './scss/App.scss';
import { Logo } from './assets/icons';
import { styles } from './config/ThemeColors';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { BasicContainer } from './container';
import { AlertContainer } from './components/Alert'
import Test from './pages/Test';

class App extends Component {
  componentDidMount() {
    setTimeout(() => this.props.setLoading(false), 10);
  }
  render() {
    return (
      <div className="App" style={styles()}>
        {this.props.overloading.loading && <div className="overloading">
          <div className="logo-spin">
            <Logo />
          </div>
        </div>
        }
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/test' component={Test} />
            <Route path='/404' exact component={Page404} />
            <Route path='/' component={BasicContainer} />
            <Route path='*' component={Page404} />
          </Switch>
        </BrowserRouter>
        <AlertContainer />
      </div>
    );
  }
}
const mapStateToProps = ({ overloading }) => ({
  overloading
})

export default connect(mapStateToProps, {
  setLoading
})(App)
