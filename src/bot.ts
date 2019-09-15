import {BotContext} from './botContext'
import {defaultBotContext} from './defaultBotContext'

export const bot = async (
  text: string,
  botContext: BotContext = defaultBotContext,
): Promise<string> => {
  if (/พระโทรศัพท์ได้วันไหน/.test(text)) {
    return 'วันพุธ พุทโธ พุทโธ'
  }
  if (/ไม่ขำ/.test(text)) {
    return 'แง่ว~ ขอโทษฮับ ผมไม่เก่งด้านนี้เลย 😭'
  }

  if (/(IP|ไอพี)/.test(text)) {
    const ip = await botContext.getIP()
    return `IP คือ ${ip}`
  }

  const bookRegex = /b(\d+)/

  if (bookRegex.test(text)) {
    const match = bookRegex.exec(text)
    if (!match) return 'ขอโทษฮับ จำนวนไม่ถูกต้องนะฮับ'
    const amount = match[1]
    await botContext.savePurchases(Number(amount))
    return `ซื้อหนังสือจำนวน ${amount} บาทแล้วฮับ`
  }

  if (/ซื้อหนังสือเท่าไหร่/.test(text)) {
    const totalAmount = await botContext.getTotalPurchases()
    console.log(totalAmount);
    return `ซื้อหนังสือรวมทั้งหมด ${totalAmount} บาทแล้วฮับ`
  }

  if (/cafe|คาเฟ่/.test(text)) {
    const menu = await botContext.getCafeMenu();
    const keys = Object.keys(menu.data['best seller'])
    const randomIndex = Math.floor(Math.random() * keys.length)
    const random =   menu.data['best seller'][keys[randomIndex]].name.th;
    return `${random} ดีไหมฮับ?`
  }

  return 'สวัสดีฮับ จุ๊บบุ จุ๊บบุ'
}
