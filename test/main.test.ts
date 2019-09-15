import {bot} from '../src/bot'
import {mockBotContext} from '../src/mockBotContext'

describe('chatbot', () => {
  it('should say hello to me', async () => {
    const response = await bot('Hello', mockBotContext())
    expect(response).toBe('สวัสดีฮับ จุ๊บบุ จุ๊บบุ')
  })

  it('should give me the IP', async () => {
    const response = await bot('IP', mockBotContext())
    expect(response).toBe('IP คือ 192.168.112.44')
  })

  it('should can buy book 9000 baht', async () => {
    const response = await bot('b9000', mockBotContext())
    expect(response).toBe('ซื้อหนังสือจำนวน 9000 บาทแล้วฮับ')
  })

  it('should can help me choose cafe menu best seller', async () => {
    const response = await bot('cafe', mockBotContext())
    expect(response).toBe('คุมะดรีมมิน ดีไหมฮับ?')
  })

  it('should can plus total amount of books', async () => {
    const botContext = mockBotContext()
    await bot('b9000', botContext)
    await bot('b1000', botContext)
    const response = await bot('ซื้อหนังสือเท่าไหร่', botContext)
    expect(response).toBe('ซื้อหนังสือรวมทั้งหมด 10000 บาทแล้วฮับ')
  })
})
