import {BotContext} from './bot_context'
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

  if (/[IP|ไอพี]/.test(text)) {
    const ip = await botContext.getIP()
    return `IP คือ ${ip}`
  }

  const bookRegex = /b(\d+)/
  if (bookRegex.test(text)) {
    const match = bookRegex.exec(text)
    if (!match) return 'ขอโทษฮํบ จำนวนไม่ถูกต้องนะฮับ'

    const amount = match[1]
    return `ซื้อหนังสือจำนวน ${amount} บาทแล้วฮับ`
  }

  if (/cafe|คาเฟ่/.test(text)) {
      const random = await botContext.getCafeMenu();
      return `${random} ดีไหมฮับ?`
  }

  return 'สวัสดีฮับ จุ๊บบุ จุ๊บบุ'
}
