import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ContextProvider } from './components/Context/context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>

    <App />
    </ContextProvider>
  </StrictMode>,
)
