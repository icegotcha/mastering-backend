import axios from 'axios'
import {BotContext} from './botContext'

export const defaultBotContext: BotContext = {
  bookPhurchasing: [],
  async getIP() {
    const {data} = await axios.get('https://icanhazip.com/')
    return data
  },
  async getCafeMenu() {
    const {data} = await axios.get('https://maidreamin.now.sh/menu')
    return data
  },
  async savePurchases(num: number) {
    this.bookPhurchasing.push(num)
  },
  async getTotalPurchases() {
    return this.bookPhurchasing.reduce((total, num) => total + num)
  },
}
