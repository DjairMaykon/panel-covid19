import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

import { GlobalStyle } from './commons/styles/global-style'

const theme = createTheme()

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      <div>teste</div>
    </ThemeProvider>
  )
}

export default App
