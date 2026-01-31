import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './routes.tsx'
import { ThemeProvider } from './hooks/useTheme.tsx'
import { ToastProvider } from './components/Toast.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <ToastProvider>
        <AppRouter />
      </ToastProvider>
    </ThemeProvider>
  </StrictMode>,
)
