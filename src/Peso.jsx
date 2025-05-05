import React, { useState } from 'react';

const Peso = () => {
  const [distancia3, setDistancia3] = useState('');
  const [peso3, setPeso3] = useState('');
  const [resultado3, setResultado3] = useState('');

  const calcularPeso = () => {
    const d = parseFloat(distancia3);
    const p = parseFloat(peso3);
    if (!isNaN(d) && !isNaN(p)) {
      setResultado3(`El peso total es ${(d * p).toFixed(2)} kg.`);
    } else {
      setResultado3("Completa ambos campos correctamente.");
    }
  };

  const limpiarPeso = () => {
    setDistancia3('');
    setPeso3('');
    setResultado3('');
  };

  return (
    <div className="section p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">Peso total</h2>
      <div className="mb-4">
        <input 
          type="number" 
          value={distancia3} 
          onChange={e => setDistancia3(e.target.value)} 
          placeholder="Distancia (km)"
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <input 
          type="number" 
          value={peso3} 
          onChange={e => setPeso3(e.target.value)} 
          placeholder="Peso por km (kg/km)"
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex justify-between gap-4">
        <button 
          className="general-button bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" 
          onClick={calcularPeso}
        >
          Calcular
        </button>
        <button 
          className="general-button bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600" 
          onClick={limpiarPeso}
        >
          Limpiar
        </button>
      </div>
      {resultado3 && <p className="mt-4 text-center text-gray-700">{resultado3}</p>}
    </div>
  );
};

export default Peso;
