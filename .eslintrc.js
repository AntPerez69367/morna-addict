module.exports = {
  "extends": 'airbnb',
  "parser": 'babel-eslint',
  "rules": {
    "indent": ["warn", 4],
    "react/jsx-indent": ["warn", 4, { "checkAttributes": true}],
    "react/react-in-jsx-scope": "off",
    "react/destructuring-assignment": "off",
    "no-nested-ternary": "warn",
    "react/prop-types": "warn"
};