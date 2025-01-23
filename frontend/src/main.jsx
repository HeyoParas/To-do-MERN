import { createRoot } from 'react-dom/client'
import './index.css'
import { AuthProvider } from './AuthContext/authcontext';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
     <AuthProvider>
    <App />
  </AuthProvider>
)