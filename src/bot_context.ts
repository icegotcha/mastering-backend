export interface BotContext {
  bookPhurchasing: number[]
  getIP: () => Promise<string>
  getCafeMenu: () => Promise<string>
  savePurchases: (number: number) => Promise<void>
  getTotalPurchases: () => Promise<number>
}
