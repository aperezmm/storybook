import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Horizontal from './Horizontal'
import Vertical from './Vertical'
import { getSize } from './helpers'

import styles from './Spacer.module.css'

//Creamos otra propiedad para poder visualizarlo
const Spacer = ({ size, isVisible }) => (
  <div
    className={classNames(styles.spacer, {
      [styles['is-visible']]: isVisible,
    })}
    style={{
      display: 'inline-block',
      width: getSize(size),
      height: getSize(size),
    }}
  />
)

Spacer.propTypes = {
  size: PropTypes.string,
  isVisible: PropTypes.bool,
}

Spacer.defaultProps = {
  size: 'none',
}

Spacer.Horizontal = Horizontal
Spacer.Vertical = Vertical

export default Spacer
