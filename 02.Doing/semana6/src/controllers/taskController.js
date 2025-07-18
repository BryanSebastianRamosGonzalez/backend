import { filtrarUsuarios } from "./userController.js";
let tareas = [];
let contadorId = 1;

export function obtenerTareas(req, res) {
  const { completada, titulo } = req.query;
  let resultado = [...tareas];

  if (completada != undefined) {
    const isBoolean = (completada === 'true') ? true : false;
    resultado = resultado.filter(t => t.completada === isBoolean);
  }

  if (titulo != undefined && titulo != null) {
    resultado = resultado.filter(t => t.titulo.toLowerCase().includes(titulo.toLowerCase()));
  }

  res.json(resultado);
}

export function obtenerTareaById(req, res) {
  const id = parseInt(req.params.id);
  const tarea = tareas.find(t => t.id === id);

  if (!tarea) {
    return res.status(400).json({ error: 'Tarea no encontrada' });
  }

  res.json(tarea);
}

export function obtenerTareasUsuario (req, res){
  const { userId }= req.params;
  let resultado = [...tareas];

  if( !userId){
    return res.status(400).json({ error: 'Usuario no encontrado' });
  }

  tareas.map(t => {
    userId.map( ut => {
      if (ut.id = userId){
        resultado.push(t)
      }
    });
  });

}

export function crearTarea(req, res) {
  const { titulo, descripcion, completada } = req.body;

  if (!titulo || !titulo.trim === '') {
    return res.status(400).json({ error: 'El título es obligatorio' });
  }

  let existe = tareas.find(t => t.titulo === titulo.trim());
  if (existe) {
    return res.status(400).json({ error: 'El título ya existe' });
  }

  if(!Array.isArray(userId)){
    return res.status(400).json({ error: 'Usuario(s) no válidos. Debe de ser ' });
  }

  const users = filtrarUsuarios(userId);

  const nuevaTarea = {
    id: contadorId++,
    titulo: titulo.trim(),
    descripcion,
    completada,
    users
  };

  tareas.push(nuevaTarea);
  res.status(201).json(nuevaTarea);
}

export function actualizarTarea(req, res) {
  const id = parseInt(req.params.id);
  const { titulo, descripcion, completada } = req.body;
  const tarea = tareas.find(t => t.id === id);

  if (!tarea) {
    return res.status(400).json({ error: 'Tarea no encontrada' });
  }

  if (!titulo || !titulo.trim === '') {
    return res.status(400).json({ error: 'El título es obligatorio' });
  }

  if (typeof completada === 'boolean') {
    tarea.completada = completada;
  }

  tarea.titulo = titulo.trim();
  tarea.descripcion = descripcion;

  res.json(tarea);
}
export function deleteTarea(req, res) {
  const id = parseInt(req.params.id);
  const tarea = tareas.find(t => t.id === id);
  if (!tarea) {
    return res.status(400).json({ error: 'Tarea no encontrada' });
  }
  tareas = tareas.filter(t => t.id !== id);
  res.status(204).send('Tarea eliminada');
}