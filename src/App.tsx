import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { Main } from '@pages/Main'

import { GlobalStyle } from './commons/styles/global-style'

const theme = createTheme()

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  )
}

export default App
