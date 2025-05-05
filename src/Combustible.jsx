import React, { useState } from 'react';

const Combustible = () => {
  const [actual2, setActual2] = useState('');
  const [maximo2, setMaximo2] = useState('');
  const [resultado2, setResultado2] = useState('');

  const calcularCombustible = () => {
    const actual = parseFloat(actual2);
    const max = parseFloat(maximo2);
    if (!isNaN(actual) && !isNaN(max)) {
      setResultado2(actual < max * 0.25 ? "¡Advertencia! Combustible muy bajo." : "Nivel adecuado.");
    } else {
      setResultado2("Completa ambos campos correctamente.");
    }
  };

  const limpiarCombustible = () => {
    setActual2('');
    setMaximo2('');
    setResultado2('');
  };

  return (
    <div className="form-container mb-8 flex flex-col items-center gap-y-4">
      <h2>Revisión de combustible</h2>
      <input
        type="number"
        value={actual2}
        onChange={e => setActual2(e.target.value)}
        placeholder="Nivel actual (gal)"
        className="w-full max-w-md p-2 rounded border border-gray-400 bg-gray-900 text-white"
      />
      <input
        type="number"
        value={maximo2}
        onChange={e => setMaximo2(e.target.value)}
        placeholder="Tanque máximo (gal)"
        className="w-full max-w-md p-2 rounded border border-gray-400 bg-gray-900 text-white"
      />
      <div className="flex gap-4">
        <button className="general-button" onClick={calcularCombustible}>Calcular</button>
        <button className="general-button" onClick={limpiarCombustible}>Limpiar</button>
      </div>
      <p>{resultado2}</p>
    </div>
  );
};

export default Combustible;
