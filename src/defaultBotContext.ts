import axios from 'axios'
import { BotContext } from './bot_context'


export const defaultBotContext: BotContext = {
    async getIP() {
        const { data } = await axios.get('https://icanhazip.com/');
        return data;
    },
    async getMaidreaminCafeMenu() {
        return '..';
    },
}
