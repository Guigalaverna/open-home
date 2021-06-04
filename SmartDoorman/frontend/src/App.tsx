import React from 'react';
import Card from './components/Card';
import Header from './components/Header';

import QRCodeIcon from './assets/QRCode.png'

import './styles/index.css'

function App() {
  return (
    <body>
      <Header />
      <span>Status: Fechado</span>
      <main>
        <Card title="Ler QRCode" icon={QRCodeIcon} />
        <Card title="Ler QRCode" icon={QRCodeIcon} />
        <Card title="Ler QRCode" icon={QRCodeIcon} />
        <Card title="Ler QRCode" icon={QRCodeIcon} />
      </main>
    </body>
  );
}

export default App;
