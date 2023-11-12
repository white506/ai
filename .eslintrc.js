module.exports = {
  env: {
    "jest": true,
    "browser": true
  },
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'google',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: [ 'tsconfig.json', 'tsconfig.dev.json' ],
    sourceType: 'module'
  },
  ignorePatterns: [
    '/lib/**/*',
    '/build/**/*'
  ],
  plugins: [
    '@typescript-eslint',
    'import'
  ],
  rules: {
    'quotes': [ 2, 'single' ],
    'object-curly-spacing': [ 0, true, { toFixed: true } ],
    'semi': [ 'error', 'never' ],
    'comma-dangle': 'off',
    'array-bracket-spacing': [ 'error', 'always' ],
    'quote-props': [ 'error', 'consistent-as-needed' ],
    'indent': 'off',
    'no-tabs': [ 'error', { allowIndentationTabs: true } ],
    'require-jsdoc': 0,
    'spaced-comment': [ 'error', 'always', { 'exceptions': [ '-', '+' ] } ],
    'max-len': [ 'error', { 'code': 1200, 'tabWidth': 2 } ],
    'no-mixed-spaces-and-tabs': [ 'error', 'smart-tabs' ],
    'no-extend-native': [ 'error', { 'exceptions': [ 'Object', 'Date', 'String', 'Array', 'Number' ] } ],
    'import/export': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'consistent-return': [ 'error', { 'treatUndefinedAsUnspecified': false } ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'operator-linebreak': [ 'error', 'before' ]
  }
}
