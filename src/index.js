import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { AppRoutes } from './pages/routes';
import { ThemeProvider } from './contexts/theme-context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <ThemeProvider>
    <AppRoutes />
  </ThemeProvider>
  
);


reportWebVitals();
