import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import { connect } from 'react-redux'
class Test extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  test = () => {
  }

  render() {
    return (
      <div>
        <Button onClick={this.test}>sdfsdfsdf</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {
})(Test)
