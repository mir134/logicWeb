module.exports = {
  'parserOptions': {
    'sourceType': 'module',
    'parser': 'babel-eslint',
  },
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    'airbnb-base',
    'plugin:vue/recommended',
  ],
  'rules': {
    'semi': ['error', 'never'],
    'no-bitwise': ['error', { 'allow': ['~'] }],
    'no-debugger': 'warn',
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'radix': 'off',
    'prefer-template': 'off',
    'object-curly-newline': 'off',
    'no-alert': 'off',
    'max-len': 'off',
    'no-restricted-syntax': 'off',
    'prefer-destructuring': 'off',

    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/script-indent': 'off',
    'vue/html-indent': 'off',
    'vue/no-parsing-error': 'off',
  }
}