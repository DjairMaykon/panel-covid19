import BrazilFlag from '@assets/images/brazil.png'
import ChinaFlag from '@assets/images/china.png'
import GermanyFlag from '@assets/images/germany.png'
import ItalyFlag from '@assets/images/italy.png'
import UsaFlag from '@assets/images/usa.png'

export const Countries = {
  germany: {
    label: 'Alemanha',
    flag: GermanyFlag,
  },
  brazil: {
    label: 'Brasil',
    flag: BrazilFlag,
  },
  china: {
    label: 'China',
    flag: ChinaFlag,
  },
  usa: {
    label: 'Estados Unidos',
    flag: UsaFlag,
  },
  italy: {
    label: 'Itália',
    flag: ItalyFlag,
  },
}

export type CountryType = keyof typeof Countries
