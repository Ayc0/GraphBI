module.exports = {
  extends: ['airbnb', 'prettier'],
  installedESLint: true,
  'no-unused-vars': 0,
  plugins: ['react'],
  env: {
    browser: true,
    jest: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: 'babel-eslint',
  rules: {
    'react/jsx-filename-extension': 'off',
    'no-underscore-dangle': 'off',
  },
};
