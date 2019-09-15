import {Request, Response} from 'express'
import {WebhookRequestBody} from '@line/bot-sdk'

import {client} from './line'

const reply = (text: string, userId: string) => {
  if (/พระโทรศัพท์ได้วันไหน/.test(text)) {
    return client
      .pushMessage(userId, {
        type: 'text',
        text: 'วันพุธ',
      })
      .then(() =>
        client.pushMessage(userId, {
          type: 'text',
          text: 'พุทโธ พุทโธ',
        }),
      )
  }

  if (/ไม่ขำ/.test(text)) {
    return client
      .pushMessage(userId, {
        type: 'text',
        text: 'แง่ว ~',
      })
      .then(() =>
        client.pushMessage(userId, {
          type: 'text',
          text: 'ขอโทษฮับ ผมไม่เก่งด้านนี้เลย 😭',
        }),
      )
  }

  if (/ส่งจุ๊บ/.test(text)) {
    return client.pushMessage(userId, {
      type: 'sticker',
      packageId: '11537',
      stickerId: '52002736',
    })
  }

  return client.pushMessage(userId, {
    type: 'text',
    text: 'สวัสดีฮับ จุ๊บุ๊ จุ๊บุ๊',
  })
}

export async function webhookHandler(req: Request, _res: Response) {
  try {
    const {events} = req.body as WebhookRequestBody

    console.debug('Events Count:', events.length)

    for (let event of events) {
      const {userId} = event.source
      if (!userId) continue

      console.debug('>', event)

      if (event.type !== 'message') continue
      if (event.message.type !== 'text') continue

      const {text} = event.message
      console.log('💬:', text)

      await reply(text, userId)
    }
  } catch (error) {
    console.error(error.message)
  }
}
