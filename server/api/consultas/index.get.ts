export default defineEventHandler(async (event) => {
  const respuestas = [
    { id: 1, title: 'Respuesta 1', level: 'Muy buena', description: 'Descripción de la respuesta 1' },
    { id: 2, title: 'Respuesta 2', level: 'Buena', description: 'Descripción de la respuesta 2' },
    { id: 3, title: 'Respuesta 3', level: 'Mala', description: 'Descripción de la respuesta 3' }
  ];

  return respuestas;
});
