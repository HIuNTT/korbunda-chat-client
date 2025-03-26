import { HeroUIPluginConfig, ThemeColors } from "@heroui/react"

const colors: Partial<ThemeColors> = {
  secondary: {
    50: "#fff1f0",
    100: "#ffcdc9",
    200: "#f79f9c",
    300: "#eb6e6e",
    400: "#de454a",
    500: "#d1202b",
    600: "#ab1120",
    700: "#850717",
    800: "#5e0010",
    900: "#38000b",
    DEFAULT: "#d1202b",
  },
  primary: {
    50: "#e8f9ff",
    100: "#bfecff",
    200: "#96dcff",
    300: "#6ecaff",
    400: "#45b5ff",
    500: "#1c98f7",
    600: "#0d75d1",
    700: "#0256ab",
    800: "#003e85",
    900: "#00295e",
    DEFAULT: "#1c98f7",
  },
}

export const theme: HeroUIPluginConfig = {
  themes: {
    light: {
      colors,
    },
  },
}
