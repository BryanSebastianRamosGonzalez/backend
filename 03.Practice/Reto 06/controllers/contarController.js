export function contarPropiedades(req, res) {
  const objeto = req.body;

  if (!objeto || typeof objeto !== 'object' || Array.isArray(objeto)) {
    return res.status(400).json({ error: 'Datos no válidos' });
  }

  const cantidad = Object.keys(objeto).length;
  res.json({ propiedades: cantidad });
}
