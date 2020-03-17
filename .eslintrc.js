module.exports = {
  globals: {
    __PATH_PREFIX__: true,
    window: true,
    document: true
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 0,
    'no-underscore-dangle': 0,
    'react/jsx-props-no-spreading': 0
  }
}
