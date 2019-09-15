import {bot} from '../src/bot'
import {mockBotContext} from '../src/mockBotContext';

describe('chatbot', () => {
  it('should say hello to me', async () => {
    const response = await bot('Hello', mockBotContext)
    expect(response).toBe('สวัสดีฮับ จุ๊บบุ จุ๊บบุ')
  })

  it('should give IP to me', async () => {
    const response = await bot('IP', mockBotContext)
    expect(response).toBe('IP คือ 192.168.112.44');
  })
})
