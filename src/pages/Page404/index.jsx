import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import './style.scss'
class PageNotFind extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="page-not-find">
        <div className="title">4<span>0</span>4</div>
        <div className="icon" />
        <div className="description"><span>Ops...</span>Ha ocurrido un error</div>
        <Button>Ir a la página Principal</Button>
      </div>
    )
  }
}

export default PageNotFind