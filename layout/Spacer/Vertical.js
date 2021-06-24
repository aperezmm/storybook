import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Spacer.css'

//FIXME: Use token.css intead
import { choices } from '../../tokens'
//TODO: Move to helper.js

const getSize = (size) => choices.spacing[size]

//Creamos otra propiedad para poder visualizarlo
const Vertical = ({ size, isVisible, maxHeight }) => (
  <div
    className={classNames('spacer', {
      'is-visible': isVisible,
    })}
    style={{
      display: 'block',
      width: getSize(size),
      maxHeight,
      height: '100vh',
    }}
  ></div>
)
Vertical.defaultProps = {
  maxHeight: '100%',
}

Vertical.propTypes = {
  size: PropTypes.number.isRequired,
  isVisible: PropTypes.bool,
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default Vertical
