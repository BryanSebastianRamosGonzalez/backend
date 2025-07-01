function responderHtml (res, contenido, code) {
    res.writeHead(code, {'Content-Type': 'text/html'});
    res.end(contenido);
}
function responderJSON ( res, contenido, code){
    res.writeHead(code, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(contenido));
}
function responderTexto (res, contenido, code) {
    res.writeHead(code, {'Content-Type': 'text/plain'});
    res.end(contenido);
}

module.exports = {
    responderHtml,
    responderJSON,
    responderTexto
};