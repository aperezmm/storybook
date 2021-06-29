import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Spacer.module.css'
import Horizontal from './Horizontal'
import Vertical from './Vertical'

//FIXME: Use token.css intead
import { choices } from '../../tokens'
//TODO: Move to helper.js

const getSize = (size) => choices.spacing[size]

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
  ></div>
)

Spacer.propTypes = {
  size: PropTypes.number.isRequired,
  isVisible: PropTypes.bool,
}

Spacer.Horizontal = Horizontal
Spacer.Vertical = Vertical

export default Spacer
