import axios from 'axios'
import {BotContext} from './bot_context'

export const defaultBotContext: BotContext = {
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
}
