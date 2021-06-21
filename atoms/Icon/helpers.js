const ICONS_ASSETS_PATH = '/icons/';

//Sustantivo
const iconMap = {
    rightArrow: 'right-arrow',
    home : 'home-outline.svg', // FIXME: Add
};

//Acción
export const mapType = (type) =>  `${ICONS_ASSETS_PATH}/${iconMap[type]}.svg`;

export const mapSize = (size) => null; // TODO: 
