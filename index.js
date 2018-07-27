import log from './log'
import { cardTypeFromNumber } from './refactor/imperative'

// 3096-xxxx-xxx-xxxx -> Diners
// 49173-xxxx-xxx-xxxx -> Visa Electron
// 5500-xxxx-xxxxx-xxxx -> Mastercard

log(cardTypeFromNumber('5555-xxxx-xxx-xxxx'))
