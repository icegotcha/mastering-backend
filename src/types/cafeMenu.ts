export interface MaidCafeMenuResponse {
  success: boolean
  data: MaidCafeMenu
}

export interface MaidCafeMenu {
  [category: string]: {
    [menuName: string]: MenuItem
  }
}

export interface MenuItem {
  price: number
  name: {
    jp: string
    en: string
    th: string
  }
}
