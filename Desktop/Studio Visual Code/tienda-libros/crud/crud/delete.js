const fs = require('fs');
const path = require('path');

const deleteBook = (bookId) => {
  // 0.  Ubicación de la base de datos JSON
  const booksPath = path.join(__dirname, '../data-base/books.json');
  // 1. Leemos el contenido del archivo JSON
  const dataBaseJSON = fs.readFileSync(booksPath, 'utf-8');
  // 2.  Contenido de STRING a ARRAY
  const dataBaseArray = JSON.parse(dataBaseJSON);
  // 2.1. Capturar el error de cuando el ID es inexistente
  if (dataBaseArray.find(book => book.id === Number(bookId)) === undefined) {
    console.log('El ID es inexistente');
  } else {
    // 3. Filtramos el array de libros para obtener TODOS los libros menos el que queremos eliminar
    const newDataBaseArray = dataBaseArray.filter(book => book.id !== Number(bookId));
    // 4. Convertimos el ARRAY a STRING JSON
    const deArrayAJSON = JSON.stringify(newDataBaseArray, null, ' ');
    // 5. Sobreescribir el archivo books.json con el nuevo ARRAY
    fs.writeFileSync(booksPath, deArrayAJSON);
    // 6. Arrojamos un mensaje de que todo salió bien
    console.log('El libro se eliminó correctamente');
  }
}

module.exports = deleteBook;