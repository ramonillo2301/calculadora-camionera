import React, { useState } from 'react';

const Pago = () => {
  const [distancia4, setDistancia4] = useState('');
  const [tarifa4, setTarifa4] = useState('');
  const [resultado4, setResultado4] = useState('');

  const calcularPago = () => {
    const d = parseFloat(distancia4);
    const t = parseFloat(tarifa4);
    if (!distancia4 || !tarifa4) {
      setResultado4("Completa ambos campos correctamente.");
    } else if (!isNaN(d) && !isNaN(t)) {
      setResultado4(`Pago estimado: $${(d * t).toFixed(2)}`);
    } else {
      setResultado4("Por favor, ingresa valores numéricos válidos.");
    }
  };

  const limpiarPago = () => {
    setDistancia4('');
    setTarifa4('');
    setResultado4('');
  };

  return (
    <div className="section p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Pago por viaje</h2>
      <div className="mb-4">
        <input 
          type="number" 
          value={distancia4} 
          onChange={e => setDistancia4(e.target.value)} 
          placeholder="Distancia (km)" 
          className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <input 
          type="number" 
          value={tarifa4} 
          onChange={e => setTarifa4(e.target.value)} 
          placeholder="Tarifa ($/km)"
          className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="buttons flex justify-between">
        <button 
          className="general-button bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" 
          onClick={calcularPago}
        >
          Calcular
        </button>
        <button 
          className="general-button bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600" 
          onClick={limpiarPago}
        >
          Limpiar
        </button>
      </div>
      {resultado4 && <p className="mt-4 text-center text-gray-700">{resultado4}</p>}
    </div>
  );
};

export default Pago;
