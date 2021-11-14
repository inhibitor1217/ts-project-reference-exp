import { name } from 'Env'

import { add } from '~/util/number'

export const version = () => name() + add(1, 2).toString()
