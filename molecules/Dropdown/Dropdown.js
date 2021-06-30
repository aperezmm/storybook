import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Icon from '../../atoms/Icon'

import styles from './Dropdown.module.css'

const Dropdown = ({ className, options, onChange, value }) => (
  <div className={classNames(className, styles.dropdown)}>
    <Icon className={styles['dropdown-icon']} type="angleDown" hasBackground />
    <select
      className={styles['dropdown-select']}
      onChange={onChange}
      value={value}
    >
      {options.map(({ text, value }) => (
        <option key={value} value={value}>
          {text}
        </option>
      ))}
    </select>
  </div>
)

//Hacemos el propTypes
Dropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
  value: PropTypes.string,
  className: PropTypes.string,
}

Dropdown.defaultProps = {
  value: '',
}

export default Dropdown
