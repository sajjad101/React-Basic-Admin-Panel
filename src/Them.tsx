import { createTheme, ThemeProvider } from '@mui/material/styles'
import rtlPlugin from 'stylis-plugin-rtl'
import { ReactNode } from 'react'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { prefixer } from 'stylis';

const theme = createTheme({
    palette: {
      mode: 'dark', // Enables dark mode
      primary: {
        main: '#6200ea', // Vibrant purple (Material Design primary color)
        contrastText: '#ffffff', // White text on primary buttons, etc.
      },
      secondary: {
        main: '#03dac6', // Teal (Material Design secondary color)
        contrastText: '#000000', // Black text for contrast
      },
      background: {
        default: '#121212', // Main app background
        paper: '#1e1e1e', // Background for cards and modals
      },
      text: {
        primary: '#ffffff', // Main text color
        secondary: '#b0bec5', // Subtle secondary text color
      },
      error: {
        main: '#cf6679', // Red for errors (Material Design standard)
      },
      warning: {
        main: '#ffa000', // Amber for warnings
      },
      info: {
        main: '#2196f3', // Blue for informational messages
      },
      success: {
        main: '#4caf50', // Green for success messages
      },
    },
    typography: {
      fontFamily: 'Vazir FD, sans-serif',
    },
    shape: {
      borderRadius: 8, // Default border radius for buttons, cards, etc.
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none', // Disable uppercase for buttons
          },
          contained: {
            boxShadow: 'none', // Minimal shadows for a clean design
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: '#1e1e1e',
          },
        },
      },
    },
  });

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin]
})

export interface ProvidersProps {
  children: ReactNode
}

export default function DefaultProps({ children }: ProvidersProps) {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  )
}