const ICONS_ASSETS_PATH = '/icons/'

//Sustantivo
const iconMap = {
  arrowRight: 'arrow-right',
  angleDown: 'angle-down',
}

const iconSize = {
  sm: 15,
  md: 26,
  lg: 30,
  xl: 40,
}

//Acción
export const mapType = (type) => `${ICONS_ASSETS_PATH}/${iconMap[type]}.svg`

export const mapSize = (size) => iconSize[size] // TODO: Implement it
