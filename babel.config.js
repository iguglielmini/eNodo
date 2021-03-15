module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '~': './',
          '@': './src',
          '@mock': './src/mock',
          '@pages': './src/pages',
          '@assets': './src/assets',
          '@modules': './src/modules',
          '@redux': './src/redux-store',
          '@constants': './src/constants',
          '@components': './src/components'
        },
      },
    ],
  ],
};
