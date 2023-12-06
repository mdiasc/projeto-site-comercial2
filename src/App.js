import React, { useEffect, useState } from 'react';
import { getObjetos } from './services/objetos';

function App() {
  const [objetosAPI, setObjetos] = useState('');

  useEffect(() => {
    const objetosAPI = getObjetos()

    setObjetos(objetosAPI)
  }, []);

  return (
    <div>
      <h1>{objetosAPI}</h1>
    </div>
  );
}

export default App;
