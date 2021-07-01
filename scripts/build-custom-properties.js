const { choices, decisions } = require('../tokens')
const fs = require('fs')

const toKebabCase = (
  string //Separar los CamelCase
) => string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()

function transformTokens(parentKey, object) {
  //Obtenemos los keys
  const objectKeys = Object.keys(object)
  return objectKeys.reduce((tokenTransformed, objectKey) => {
    //Es como si fuese un for (se repite)
    const value = object[objectKey]

    if (Array.isArray(value)) {
      const customProperty = parentKey
        ? `${parentKey}-${objectKey}`
        : `${objectKey}`

      return `${tokenTransformed}\n\t--${toKebabCase(
        customProperty
      )}: ${value.join(', ')};`
    } else if (typeof value === 'object') {
      const customProperty = parentKey
        ? `${parentKey}-${objectKey}`
        : `${objectKey}`

      return `${tokenTransformed}\n\t${transformTokens(
        `${toKebabCase(customProperty)}`,
        value
      )}`
    }
    //Camino feliz que el valor no fuera un objeto.
    //const customProperty = parentKey ? `--${parentKey}-${objectKey}` : `${parentKey}-${objectKey}`

    return `${tokenTransformed}
    --${parentKey}-${toKebabCase(objectKey)}: ${value};`
  }, '') //Valor inicial es un string
}

function buildCustomProperties() {
  // const choicesKeys = Object.keys(choices); //Me pone los choices en un array, ahora podemos iterar
  // const choicesCustomProperties = choicesKeys.reduce((prev, curr) => {
  //     choices[curr]
  // }, '') //Prev = ''

  //   const choicesStr = transformTokens(null, choices);
  //   const decisionsStr = transformTokens(null, decisions);

  // if(typeof choices['colors'] === 'object'){ //Mira si colors es un objeto
  //     const colorsKeys = Object.keys(choices['colors']) //Obtiene las keys de colors y guarda en colorsKeys
  //     choicesStr = colorsKeys.reduce((prev, curr) =>{ //Baja otro escalon más
  //         if(typeof choices['colors'][curr] === 'object'){ //Verifica si la rama que sigue es un objeto
  //             const brandKeys = Object.keys(choices['colors'][curr])
  //             //Como sabemos que solo la rama de brand será un objeto saca las Keys
  //             const colorsStr = brandKeys.reduce((prevBrandKeys, currBrandKeys) => {
  //                 const value = choices['colors'][curr][currBrandKeys]; //Valor de la key
  //                 return `
  //                     ${prevBrandKeys}
  //                     --colors-${curr}-${currBrandKeys}: ${value};

  //                     `;
  //             }, '')
  //             return `
  //                 ${prev}
  //                 ${colorsStr}

  //                 `
  //         }
  //         else{
  //             return `
  //                 ${prev}
  //                 --colors-${curr}: ${choices['colors'][curr]}
  //             `
  //         }
  //     }, '')
  // }
  //Transformamos los tokens
  const customProperties = `${transformTokens(null, choices)}${transformTokens(
    null,
    decisions
  )}`

  const data = [':root {', customProperties.trim(), '}'].join('\n')

  fs.writeFile('./styles/globals.css', data, 'utf8', function (err) {
    if (err) {
      return console.error(err)
    }
  })
}

buildCustomProperties()
