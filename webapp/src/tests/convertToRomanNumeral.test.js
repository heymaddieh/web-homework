import { convertToRomanNumeral } from '../utils/convertToRomanNumeral'

describe('convertToRomanNumeral', () => {
  test('Handles invalid params', () => {
    expect(convertToRomanNumeral('')).toBe(0)
    expect(convertToRomanNumeral(null)).toBe(0)
    expect(convertToRomanNumeral(undefined)).toBe(0)
    expect(convertToRomanNumeral()).toBe(0)
  })

  test('If roman numeral setting is turned off', () => {
    expect(convertToRomanNumeral(2000, false)).toBe(2000)
    expect(convertToRomanNumeral(2865, false)).toBe(2865)
    expect(convertToRomanNumeral(28, false)).toBe(28)
    expect(convertToRomanNumeral(7, false)).toBe(7)
  })

  test('Correctly converts to Roman numerals', () => {
    expect(convertToRomanNumeral(2000, true)).toBe('MM')
    expect(convertToRomanNumeral(2865, true)).toBe('MMDCCCLXV')
    expect(convertToRomanNumeral(28, true)).toBe('XXVIII')
    expect(convertToRomanNumeral(7, true)).toBe('VII')
  })
})
