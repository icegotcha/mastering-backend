import {BotContext} from './bot_context'
import {mockMenuResponse} from './mockMaidCafeResponse'

export function mockBotContext(): BotContext {
  return {
    bookPhurchasing: [],
    async getIP() {
      return '192.168.112.44'
    },
    async getCafeMenu() {
      const data = mockMenuResponse.data['best seller']['kuma dreamin'].name.th
      return data
    },
    async savePurchases(num: number) {
      this.bookPhurchasing.push(num)
    },
    async getTotalPurchases() {
      return this.bookPhurchasing.reduce(
        (totalPurchases, num) => totalPurchases + num,
      )
    },
  }
}
