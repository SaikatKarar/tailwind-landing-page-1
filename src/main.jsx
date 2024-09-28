import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { ScrollProvider } from './component/ScrollProvider/ScrollProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ScrollProvider>
      <App />
    </ScrollProvider>
  </React.StrictMode>
);

