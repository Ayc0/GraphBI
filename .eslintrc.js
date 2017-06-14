module.exports = {
  extends: ['airbnb'],
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
    'react/prop-types': 'off',
    'no-underscore-dangle': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-confusing-arrow': 'off',
    'no-mixed-operators': 'off',
  },
};
