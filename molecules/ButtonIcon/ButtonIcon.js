import React from 'react'
import PropTypes from 'prop-types'
import Spacer from '../../layout/Spacer'
import Button from '../../atoms/Button'

import Icon from '../../atoms/Icon'
//Ofrece una manera dinamica de verificar los componentes
// npm i --save prop-types

const ButtonIcon = ({ children, type, icon }) => (
  <Button type={type} isBlock={false}>
    {children}
    <Spacer.Vertical size="xs"></Spacer.Vertical>
    {/*FIXME: The vertical space */}
    <Icon type={icon} />
  </Button>
)

ButtonIcon.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  icon: PropTypes.string.isRequired,
}
/*
Si se invoca el componente sinusar children o si children fuera un valor que no es un objeto,
mostraría un warning y no se estaría usando como tal los PropTypes. 
PropTypes.shape() permite describir estructuras anidadas
*/

ButtonIcon.defaultProps = {
  type: 'secondary',
}

export default ButtonIcon
