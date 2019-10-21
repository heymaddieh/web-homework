export const index = (num, isRoman) => {
  // If the number is falsey including invalid values, just return 0
  if (!num || typeof num !== 'number') return 0
  // if the roman numeral setting is turned on
  if (isRoman) {
    const romanNumeral = []
    const numerals = ['M', 'D', 'C', 'L', 'X', 'V', 'I']
    const amounts = [1000, 500, 100, 50, 10, 5, 1]

    // Recursive function for converting number to roman numeral
    const convert = (amountLeft) => {
      if (amountLeft === 0) {
        return null
      } else {
        for (let i = 0; i < amounts.length; i += 1) {
          const v = amounts[i]
          if (amountLeft >= v) {
            romanNumeral.push(numerals[i])
            return convert(amountLeft - v)
          }
        }
      }
    }

    convert(num)

    return romanNumeral.join('')
  }
  // if the roman numeral setting is turned off, just return the number
  return num
}

export default index
