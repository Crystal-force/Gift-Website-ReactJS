import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Female, Male } from '../../assets/icons';
import './style.scss'
/**
 * @augments {Component<Props, State>}
 */
class SelectSex extends Component {
  static propTypes = {
    value: PropTypes.oneOf(['male', 'female']),
    onChange: PropTypes.func
  }

  onChange = sex => {
    const { onChange } = this.props;
    onChange && onChange(sex)
  }

  render() {
    let { value } = this.props;
    return (
      <div className="select-sex">
        <div className="sex" onClick={() => this.onChange('male')}>
          <div className={`icon${value === 'male' ? ' selected' : ''}`}>
            <Male />
          </div>
          <div className="label">Hombre</div>
        </div>
        <div className="sex" onClick={() => this.onChange('female')}>
          <div className={`icon${value === 'female' ? ' selected' : ''}`}>
            <Female />
          </div>
          <div className="label">Mujer</div>
        </div>
      </div>
    )
  }
}

export default SelectSex