const fs = require('fs');
const path = require('path');

const readBooksDataBase = () => {
  // 0. Obtenemos la ubicación de la base de datos JSON
  const booksPath = path.join(__dirname, '../data-base/books.json');
  // 1. Leemos el contenido del archivo JSON
  const dataBaseJSON = fs.readFileSync(booksPath, 'utf-8');
  // 2. Convertimos el contenido de STRING a ARRAY
  const dataBaseArray = JSON.parse(dataBaseJSON);
  // 3. Retornamos el ARRAY
  return dataBaseArray;
}

module.exports = readBooksDataBase;