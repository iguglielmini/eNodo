module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
    "browser": true,
  },
  'rules': {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'react/destructuring-assignment': 'off',
    'import/no-cycle': 'off',
    'class-methods-use-this': 'off',
    'import/no-unresolved': [2, { ignore: ['.png$', '.webp$', '.jpg$'] }],
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
  },
  'globals': {
    'fetch': false,
    'alert': true
  },
  'settings': {
    'import/resolver': {
      'babel-module': {}
    }
  }
}
