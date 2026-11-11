// Guarda cada confirmación (RSVP) como una fila en una Google Sheet.
// 1) Crea una Google Sheet. 2) Extensiones > Apps Script, pega este código.
// 3) Implementar > Nueva implementación > Aplicación web
//    (Ejecutar como: yo · Acceso: cualquier usuario). 4) Copia la URL en RSVP_ENDPOINT de index.html.
const COLUMNS = ['fecha', 'nombre', 'asiste', 'menu', 'alergias', 'bus', 'vuelta', 'cancion'];

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) sheet.appendRow(COLUMNS);
  const p = e.parameter;
  sheet.appendRow(COLUMNS.map(c => c === 'fecha' ? new Date() : (p[c] || '')));
  return ContentService.createTextOutput('ok');
}
