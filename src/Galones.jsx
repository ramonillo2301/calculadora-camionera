import React, { useState } from 'react';

const Galones = () => {
  const [distancia1, setDistancia1] = useState('');
  const [rendimiento1, setRendimiento1] = useState('');
  const [resultado1, setResultado1] = useState('');

  const calcularGalones = () => {
    const d = parseFloat(distancia1);
    const r = parseFloat(rendimiento1);
    if (!isNaN(d) && !isNaN(r) && r !== 0) {
      setResultado1(`Necesitas ${(d / r).toFixed(2)} galones.`);
    } else {
      setResultado1("Completa ambos campos correctamente.");
    }
  };

  const limpiarGalones = () => {
    setDistancia1('');
    setRendimiento1('');
    setResultado1('');
  };

  return (
    <div className="section p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">Galones necesarios</h2>
      <div className="mb-4">
        <input 
          type="number" 
          value={distancia1} 
          onChange={e => setDistancia1(e.target.value)} 
          placeholder="Distancia (km)"
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <input 
          type="number" 
          value={rendimiento1} 
          onChange={e => setRendimiento1(e.target.value)} 
          placeholder="Rendimiento (km/galón)"
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex justify-between gap-4">
        <button 
          className="general-button bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" 
          onClick={calcularGalones}
        >
          Calcular
        </button>
        <button 
          className="general-button bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600" 
          onClick={limpiarGalones}
        >
          Limpiar
        </button>
      </div>
      {resultado1 && <p className="mt-4 text-center text-gray-700">{resultado1}</p>}
    </div>
  );
};

export default Galones;
