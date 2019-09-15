import {MaidCafeMenuResponse} from '../src/types/cafeMenu'

export interface BotContext {
  bookPhurchasing: number[]
  getIP: () => Promise<string>
  getCafeMenu: () => Promise<MaidCafeMenuResponse>
  savePurchases: (number: number) => Promise<void>
  getTotalPurchases: () => Promise<number>
}
