import React from 'react'; // ✅ This line is missing in your case!
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from './context/ThemeContext.jsx';
import AuthProvider from './context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
    <App />
    </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
