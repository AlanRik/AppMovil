import React from 'react';
import AppNavigation from './app/Navigation/AppNavigation';
import {UsuarioProvider} from './app/Context/UsuarioContext';

function App() {
  return (
    <UsuarioProvider>
      <AppNavigation />
    </UsuarioProvider>
  );
}

export default App;
