import { ReactNode } from "react"

export type TKeyboardButtonType = "default" | "cancel" | "delete" | "timer"

export type TKeyboardButton = {
    value?: string | ReactNode,
    type?: TKeyboardButtonType
}

export type TKeyboardPress = (keyboardButton: TKeyboardButton) => void