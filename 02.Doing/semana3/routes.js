const {
  responderHtml,
  responderJSON,
  responderTexto,
} = require("./utils/responses");
const fs = require("fs");
const path = require("path");

function manejarRutas(req, res) {
  const { url, method } = req;
  if (url === "/" && method === "GET") {
    responderHtml(res, "<h1>Bienvenido</h1>", 200);
  } else if (url === "/Contacto" && method === "GET") {
    responderHtml(res, "<h1>Contactanos</h1>", 200);
  } else if (url === "/Conocenos" && method === "GET") {
    responderHtml(res, "<h1>Conocenos</h1>", 200);
  } else if (url === "/api" && method === "GET") {
    const datos = {
      nombre: "Servidor Node.js",
      version: "1.0.0",
      autor: "Tu Nombre",
      mensaje: "Hola, soy un servidor Node.js",
    };
    responderJSON(res, datos, 200);
  } else if (url === "/equipo" && method === "GET") {
    const archivo = path.join(__dirname, "data", "equipo.json");
    fs.readFile(archivo, "utf-8", (err, data) => {
      if (err) {
        responderJSON(res, { error: "Error al leer el archivo" }, 500);
      } else {
        responderJSON(res, JSON.parse(data), 200);
      }
    });
  } else if (url.startsWith("/equipo/") && method === "GET") {
    const nombreBuscado = decodeURIComponent(url.split("/")[2]).toLowerCase();

    const archivo = path.join(__dirname, "data", "equipo.json");
    fs.readFile(archivo, "utf-8", (err, data) => {
      if (err) {
        responderJSON(res, { error: "Error al leer el archivo" }, 500);
      } else {
        const personas = JSON.parse(data);
        if (personas) {
          const colaborador = personas.find(
            (miembro) => miembro.nombre.toLowerCase() === nombreBuscado
          );
          if (colaborador) {
            responderJSON(res, colaborador, 200);
          } else {
            responderJSON(
              res,
              { error: `No existe un ${nombreBuscado} en el equipo` },
              404
            );
          }
        }
      }
    });
  } else if (url === "/equipo" && method === "POST") {
    let cuerpo = "";
    req.on("data", (chunk) => {
      cuerpo += chunk.toString();
    });
    req.on("end", () => {
      let nuevoMiembro = {};
      try {
        nuevoMiembro = JSON.parse(cuerpo);
        if (!nuevoMiembro.name || !nuevoMiembro.rol || !nuevoMiembro.id) {
          return responderJSON(res, { error: "Faltan datos requeridos" }, 400);
        } else {
          const archivo = path.join(__dirname, "data", "equipo.json");
          fs.readFile(archivo, "utf-8", (err, data) => {
            if (err) {
              return responderJSON(res, { error: "Error al leer el archivo" }, 500);
            } else {
              const personas = JSON.parse(data);
              personas.push(nuevoMiembro);
              fs.writeFile(archivo, JSON.stringify(personas), (err) => {
                if (err) {
                  return responderJSON(res, { error: "Error al guardar el archivo" }, 500);
                } else {
                    responderTexto(res, "Miembro agregado correctamente", 200);
                }
              });
            }
          });
        }
      } catch (error) {
        responderTexto(res, { error: "Error al procesar los datos" }, 400);
      } finally {
        
      }
    });
  } else {
    responderTexto(res, "<h1>Pagina no encontrada</h1>", 404);
  }
}

module.exports = {
  manejarRutas,
};
