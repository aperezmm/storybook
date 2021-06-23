import React from 'react'
import PropTypes from 'prop-types'
import './Dropdown.css'
import Icon from '../../atoms/Icon'

const Dropdown = () => (
  <div className="dropdown">
    <Icon type="angleDown" hasBackground />
    <select className="dropdown-select">
      <option>8:00 AM</option>
      <option>9:00 AM</option>
    </select>
  </div>
)

//Hacemos el propTypes
Dropdown.propTypes = {
  value: PropTypes.string,
}

export default Dropdown
