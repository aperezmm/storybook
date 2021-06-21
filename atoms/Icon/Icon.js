import React from 'react'
//import rightArrow from '../../assets/icons/right-arrow.svg';
import PropTypes from 'prop-types'
import { mapType } from './helpers'

//TODO: Use the Atom Picture
const Icon = ({ type }) => (
  <div>
    <img src={mapType(type)}></img>
  </div>
)

Icon.propTypes = {
  type: PropTypes.string.isRequired,
}

export default Icon
