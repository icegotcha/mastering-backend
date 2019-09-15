import {BotContext} from './bot_context'
import {mockMenuResponse} from './mockMaidCafeResponse'

export const mockBotContext: BotContext = {
  async getIP() {
    return '192.168.112.44'
  },
  async getCafeMenu() {
    const data = mockMenuResponse.data['best seller']['kuma dreamin'].name.th
    return data
  },
}
