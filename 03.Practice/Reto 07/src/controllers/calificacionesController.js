const Estudiante = require('../data/estudiantes');
const Curso = require('../data/cursos');
const Calificacion = require('../data/calificaciones');

// Obtener info completa: estudiantes con sus calificaciones y cursos
async function obtenerInfoCompleta(req, res) {
  try {
    const calificaciones = await Calificacion.find()
      .populate('estudiante', 'nombre')
      .populate('curso', 'nombre');

    // Agrupar calificaciones por estudiante
    const agrupado = {};

    calificaciones.forEach(c => {
      const id = c.estudiante._id.toString();

      if (!agrupado[id]) {
        agrupado[id] = {
          nombre: c.estudiante.nombre,
          calificaciones: []
        };
      }

      agrupado[id].calificaciones.push({
        curso: c.curso.nombre,
        nota: c.nota
      });
    });

    res.json(Object.values(agrupado));
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener información' });
  }
}

// Crear estudiante
async function crearEstudiante(req, res) {
  try {
    const estudiante = new Estudiante({ nombre: req.body.nombre });
    await estudiante.save();
    res.status(201).json(estudiante);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear estudiante' });
  }
}

// Crear curso
async function crearCurso(req, res) {
  try {
    const curso = new Curso({ nombre: req.body.nombre });
    await curso.save();
    res.status(201).json(curso);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear curso' });
  }
}

// Crear calificación
async function crearCalificacion(req, res) {
  try {
    const { estudianteId, cursoId, nota } = req.body;
    if (!estudianteId || !cursoId || nota == null) {
      return res.status(400).json({ error: 'Faltan datos necesarios' });
    }
    const calificacion = new Calificacion({
      estudiante: estudianteId,
      curso: cursoId,
      nota
    });
    await calificacion.save();
    res.status(201).json(calificacion);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear calificación' });
  }
}

module.exports = {
  obtenerInfoCompleta,
  crearEstudiante,
  crearCurso,
  crearCalificacion
};
