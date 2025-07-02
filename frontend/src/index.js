import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // optional
import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode="light" />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
