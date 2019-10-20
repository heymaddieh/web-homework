module.exports = {
  roots: ['./src'],
  transform: {
    '.jsx?$': 'babel-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.js?$',
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  globals: {},
  modulePaths: ['./src']
}
