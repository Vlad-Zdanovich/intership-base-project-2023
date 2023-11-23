import { DefaultTheme, Theme } from "@react-navigation/native"

export const NavigationContainerTheme: Theme = {
    dark: true,
    colors: {
        primary: DefaultTheme.colors.primary,
        background: "#352F3D",
        card: DefaultTheme.colors.card,
        text: DefaultTheme.colors.text,
        border: DefaultTheme.colors.border,
        notification: DefaultTheme.colors.notification,
    }
}