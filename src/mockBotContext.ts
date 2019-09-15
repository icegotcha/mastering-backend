import {BotContext} from './botContext'
import {mockMenuResponse} from './mockMaidCafeResponse'

export function mockBotContext(): BotContext {
  return {
    bookPhurchasing: [],
    async getIP() {
      return '192.168.112.44'
    },
    async getCafeMenu() {
      const data = mockMenuResponse
      return data
    },
    async savePurchases(num: number) {
      this.bookPhurchasing.push(num)
    },
    async getTotalPurchases() {
      return this.bookPhurchasing.reduce((total, num) => total + num)
    },
  }
}
