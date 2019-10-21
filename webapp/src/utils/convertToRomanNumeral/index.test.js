import { index } from './index'

describe('convertToRomanNumeral', () => {
  test('Handles invalid params', () => {
    expect(index('')).toBe(0)
    expect(index(null)).toBe(0)
    expect(index(undefined)).toBe(0)
    expect(index()).toBe(0)
  })

  test('If roman numeral setting is turned off', () => {
    expect(index(2000, false)).toBe(2000)
    expect(index(2865, false)).toBe(2865)
    expect(index(28, false)).toBe(28)
    expect(index(7, false)).toBe(7)
  })

  test('Correctly converts to Roman numerals', () => {
    expect(index(2000, true)).toBe('MM')
    expect(index(2865, true)).toBe('MMDCCCLXV')
    expect(index(28, true)).toBe('XXVIII')
    expect(index(7, true)).toBe('VII')
  })
})
