import {MaidCafeMenuResponse} from './types/cafeMenu'

export const mockMenuResponse: MaidCafeMenuResponse = {
  success: true,
  data: {
    'best seller': {
      'kuma dreamin': {
        price: 320,
        name: {
          jp: 'くまドりーミン',
          th: 'คุมะดรีมมิน',
          en: 'Kuma dreamin',
        },
      },
    },
  },
}
