//Configuración para integar CSS Modules con storybook!
const cssModules = () => async (config) => {
  config.module.rules.find(
    (rule) => rule.test.toString() === '/\\.css$/'
  ).exclude = /\.module\.css$/

  config.module.rules.push({
    test: /\.module\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
        },
      },
    ],
  })

  return config
}

module.exports = {

  stories: ['../stories/**/*.stories.@(js|mdx)', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addnos: ['@storybook/addon-essentials', '@storybook/addnon-links'],
  webpackFinal: cssModules(), //Se incluye la configuración en los module.exports
}