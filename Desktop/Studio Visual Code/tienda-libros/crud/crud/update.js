const fs = require('fs');
const path = require('path');

const updateBook = (bookId, newBookInfo) => {
  // 0. Obtenemos la ubicación de la base de datos JSON
  const booksPath = path.join(__dirname, '../data-base/books.json');
  // 1. Leemos el contenido del archivo JSON
  const dataBaseJSON = fs.readFileSync(booksPath, 'utf-8');
  // 2. Convertimos el contenido de STRING a ARRAY
  const dataBaseArray = JSON.parse(dataBaseJSON);
  // 2.1. Capturar el error de cuando el ID es inexistente
  if (dataBaseArray.find(book => book.id === Number(bookId)) === undefined) {
    console.log('El ID es inexistente');
  } else {
    // 3. Generamos un nuevo array con la información del libro actualizada
    const newDataBaseArray = dataBaseArray.map(book => {
      // 3.1. Si el ID del libro es igual al ID del libro que queremos actualizar
      if (book.id === Number(bookId)) {
        // 3.1.1. Actualizamos el libro con la información nueva
        return {
          id: Number(bookId),
          ...newBookInfo
        };
      } else {
        // 3.1.2. Retornamos el libro sin modificar
        return book;
      }
    })
    // 4. Convertimos el ARRAY a STRING JSON
    const deArrayAJSON = JSON.stringify(newDataBaseArray, null, ' ');
    // 5. Sobreescribir el archivo books.json con el nuevo ARRAY
    fs.writeFileSync(booksPath, deArrayAJSON);
    // 6. Arrojamos un mensaje de que todo salió bien
    console.log('El libro se actualizó correctamente');
  }
}

module.exports = updateBook;