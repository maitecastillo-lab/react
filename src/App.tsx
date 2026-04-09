import React from 'react';
import { DataTable } from './components/DataTable';
import { calcularDiferenciaDias } from './utils/fechas';

// 1. Definimos una interfaz para probar la tabla (puede ser cualquier cosa)
interface Estudiante {
  id: number;
  nombre: string;
  curso: string;
}

// 2. Creamos unos datos de prueba
const MIS_ESTUDIANTES: Estudiante[] = [
  { id: 1, nombre: "Maite", curso: "TypeScript Avanzado" },
  { id: 2, nombre: "Juan", curso: "React Estricto" }
];

function App() {
  // 3. Usamos la función de fechas de utils
  const dias = calcularDiferenciaDias("2026-04-01", "2026-04-10");

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Dashboard del Laboratorio</h1>
      
      <div style={{ marginBottom: '20px', padding: '10px', background: '#e7f3ff', borderRadius: '8px' }}>
        <strong>Cálculo con Luxon:</strong> Faltan {dias} días para la entrega.
      </div>

      <h2>Lista de Estudiantes (Componente Genérico)</h2>
      {/* 4. Renderizamos la Tabla pasándole los datos y las columnas */}
      <DataTable 
        datos={MIS_ESTUDIANTES} 
        columnas={[
          { clave: 'id', etiqueta: 'ID' },
          { clave: 'nombre', etiqueta: 'Nombre Completo' },
          { clave: 'curso', etiqueta: 'Módulo' }
        ]} 
      />
    </div>
  );
}

export default App;