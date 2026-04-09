import React, { useState } from 'react';

// Definimos la estructura de las columnas de forma genérica
interface Columna<T> {
  clave: keyof T; // Esto obliga a que la columna sea una propiedad real de T
  etiqueta: string;
}

interface DataTableProps<T> {
  datos: T[];
  columnas: Columna<T>[];
}

export function DataTable<T>({ datos, columnas }: DataTableProps<T>) {
  /**
   * REQUISITO DEL LAB: Uso de Partial<T>
   * Lo usamos porque al editar, el estado puede estar incompleto 
   * (por ejemplo, el usuario borra un campo temporalmente).
   */
  const [filaEnEdicion, setFilaEnEdicion] = useState<Partial<T> | null>(null);

  return (
    <div style={{ marginTop: '20px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            {columnas.map((col) => (
              <th key={String(col.clave)} style={{ border: '1px solid #000', padding: '10px', textAlign: 'left' }}>
                {col.etiqueta}
              </th>
            ))}
            <th style={{ border: '1px solid #000', padding: '10px' }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((item, index) => (
            <tr key={index}>
              {columnas.map((col) => (
                <td key={String(col.clave)} style={{ border: '1px solid #ccc', padding: '10px' }}>
                  {/* Convertimos a String para asegurar que React pueda renderizarlo */}
                  {String(item[col.clave])}
                </td>
              ))}
              <td style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>
                <button onClick={() => setFilaEnEdicion(item)}>
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Feedback visual de que estamos usando Partial<T> */}
      {filaEnEdicion && (
        <div style={{ marginTop: '15px', padding: '10px', border: '1px solid blue', borderRadius: '4px' }}>
          <strong>Modo Edición Activado:</strong> 
          <p>Se ha cargado un objeto de tipo <em>Partial&lt;T&gt;</em> en el estado.</p>
          <button onClick={() => setFilaEnEdicion(null)}>Cerrar Edición</button>
        </div>
      )}
    </div>
  );
}
