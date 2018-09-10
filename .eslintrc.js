module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'max-len': [1, 120, 2],
    'no-param-reassign': 0,
    'import/prefer-default-export': 0,
    'no-alert': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
