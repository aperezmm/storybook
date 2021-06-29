import React from 'react'
//import rightArrow from '../../assets/icons/right-arrow.svg';
import PropTypes from 'prop-types'
import { mapSize, mapType } from './helpers'
import classNames from 'classnames'
import Picture from '../Picture'

import styles from './Icon.module.css'

//TODO: Use the Atom Picture
const Icon = ({ type, size, hasBackground }) => (
  <div
    className={classNames(styles.icon, {
      [styles['has-background']]: hasBackground, //ClassNames permite varias clases, cuando isSolid es true si el icono tiene esa clase
    })}
    style={{ width: mapSize(size), height: mapSize(size) }}
  >
    <Picture src={mapType(type)} width={mapSize(size)}></Picture>
  </div>
)

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  hasBackground: PropTypes.bool,
}

Icon.defaultProps = {
  size: 'md',
  hasBackground: false,
}
//Cuando algo no es requerido debería tener value por defecto

export default Icon
