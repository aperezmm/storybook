import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { getSize } from './helpers'

import styles from './Spacer.module.css'

//Creamos otra propiedad para poder visualizarlo
const Vertical = ({ size, isVisible, maxHeight }) => (
  <div
    className={classNames(styles.spacer, {
      [styles['is-visible']]: isVisible,
    })}
    style={{
      display: 'block',
      maxHeight,
      height: '100vh',
      width: getSize(size),
    }}
  />
)
Vertical.defaultProps = {
  maxHeight: '100%',
  size: 'none',
}

Vertical.propTypes = {
  size: PropTypes.string,
  isVisible: PropTypes.bool,
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default Vertical
