import axios from 'axios'
import {BotContext} from './bot_context'

export const defaultBotContext: BotContext = {
  bookPhurchasing: [],
  async getIP() {
    const {data} = await axios.get('https://icanhazip.com/')
    return data
  },
  async getCafeMenu() {
    const {data: menu} = await axios.get('https://maidreamin.now.sh/menu')
    const keys = Object.keys(menu.data['best seller'])
    const random = Math.floor(Math.random() * keys.length)
    return menu.data['best seller'][keys[random]].name.th
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
