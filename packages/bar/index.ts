import { name } from 'Env'
import { version } from '@foo'

export const isValidVersion = () => version().startsWith(name())

console.log('isValidVersion', isValidVersion())
