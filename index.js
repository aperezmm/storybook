//Archivo para leer cualquier proyecto cuando este publicado
//Atoms
export { default as Button } from './atoms/Button'
export { default as Heading } from './atoms/Heading'
import Icon from './atoms/Icon'
export { default as Input } from './atoms/Input'
import Picture from './atoms/Picture'

//Layout
export { default as Spacer } from './layout/Spacer'

//Molecules
import ButtonIcon from './molecules/ButtonIcon'
import Dropdown from './molecules/Dropdown'

export default {
  Icon,
  Picture,
  ButtonIcon,
  Dropdown,
}
