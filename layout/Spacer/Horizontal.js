import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { getSize } from './helpers'

import styles from './Spacer.module.css'

//Creamos otra propiedad para poder visualizarlo
const Horizontal = ({ size, isVisible }) => (
  <div
    className={classNames(styles.spacer, {
      [styles['is-visible']]: isVisible,
    })}
    style={{
      display: 'block',
      width: '100%',
      height: getSize(size),
    }}
  />
)

Horizontal.propTypes = {
  size: PropTypes.string.isRequired,
  isVisible: PropTypes.bool,
}

Horizontal.defaultProps = {
  size: 'none',
}

export default Horizontal
