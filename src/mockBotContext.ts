import { BotContext } from './bot_context'

export const mockBotContext: BotContext = {
    async getIP() {
        return '192.168.112.44';
    },
    async getMaidreaminCafeMenu() {
        return '..';
    },
}
