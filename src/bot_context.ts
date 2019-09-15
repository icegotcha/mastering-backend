export interface BotContext {
    getIP: () => Promise<string>,
    getMaidreaminCafeMenu: () => Promise<string>,
}

