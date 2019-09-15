import {MaidCafeMenuResponse} from './types/cafeMenu'
export interface BotContext {
  getIP: () => Promise<string>
  getCafeMenu: () => Promise<string>
}
