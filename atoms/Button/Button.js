import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Button.module.css'

const Button = ({ type, children, isBlock }) => (
  <button
    className={classNames(styles.button, {
      //Esta nueva sintaxis es Javascript puro
      [styles[`button-${type}`]]: type,
      [styles['is-block']]: isBlock && type !== 'tertiary',
    })}
  >
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf[('primary', 'secondary', 'tertiary')],
  isBlock: PropTypes.boolean,
}

Button.defaultProps = {
  type: 'primary',
  isBlock: true,
}

export default Button
