import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.scss'
/**
 * @augments {Component<Props, State>}
 */
class StepProgress extends Component {
  static propTypes = {
    steps: PropTypes.number.isRequired,
    current: PropTypes.number,
    onChangeStep: PropTypes.func
  }


  render() {
    let { steps, current, onChangeStep } = this.props
    if (!current) current = 1;
    return (
      <div className="step-progress">
        {
          Array(steps).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              <div
                className={`step-button${index < current ? ' active' : ''}`}
                onClick={evt => onChangeStep && onChangeStep(index + 1)}
              >
                {index + 1}
              </div>
              {index < steps - 1 &&
                <div className={`connector${index + 1 < current ? ' active' : ''}`} />
              }

            </React.Fragment>
          ))

        }

      </div>
    )
  }
}

export default StepProgress