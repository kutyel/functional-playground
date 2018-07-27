export function cardTypeFromNumber(number) {
  // Diners - Carte Blanche
  let re = new RegExp('^30[0-5]')
  if (number.match(re) !== null) return 'Diners - Carte Blanche|diners'

  // Diners
  re = new RegExp('^(30[6-9]|36|38)')
  if (number.match(re) !== null) return 'Diners|diners'

  // JCB
  re = new RegExp('^35(2[89]|[3-8][0-9])')
  if (number.match(re) !== null) return 'JCB|jcb'

  // AMEX
  re = new RegExp('^3[47]')
  if (number.match(re) !== null) return 'AMEX|american-express'

  // Visa Electron
  re = new RegExp('^(4026|417500|4508|4844|491(3|7))')
  if (number.match(re) !== null) return 'Visa Electron|visa'

  // Visa
  re = new RegExp('^4')
  if (number.match(re) !== null) return 'Visa|visa'

  // Mastercard
  re = new RegExp('^5[1-5]')
  if (number.match(re) !== null) return 'Mastercard|master-card'

  // Discover
  re = new RegExp(
    '^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)'
  )
  if (number.match(re) !== null) return 'Discover|discover'

  return '  |  '
}
