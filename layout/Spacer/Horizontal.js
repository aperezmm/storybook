import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Spacer.module.css'

//FIXME: Use token.css intead
import { choices } from '../../tokens'
//TODO: Move to helper.js

const getSize = (size) => choices.spacing[size]

//Creamos otra propiedad para poder visualizarlo
const Horizontal = ({ size, isVisible }) => (
  <div
    className={classNames(styles.horizontal, {
      [styles['is-visible']]: isVisible,
    })}
    style={{
      display: 'block',
      width: '100%',
      height: getSize(size),
    }}
  ></div>
)

Horizontal.propTypes = {
  size: PropTypes.number.isRequired,
  isVisible: PropTypes.bool,
}

export default Horizontal
