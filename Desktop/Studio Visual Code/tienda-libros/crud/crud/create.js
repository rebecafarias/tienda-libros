const fs = require('fs');
const path = require('path');

const generateID = () => {
  // 0 Ubicación  base de datos JSON
  const booksPath = path.join(__dirname, '../data-base/books.json');
  // 1. Lectura del contenido del archivo JSON
  const dataBaseJSON = fs.readFileSync(booksPath, 'utf-8');
  // 2.  Contenido de STRING a ARRAY
  const dataBaseArray = JSON.parse(dataBaseJSON);
  if (dataBaseArray.length === 0) {
    // 3. Si el array está vacío genero un ID igual a 1
    return 1;
  } else {
    // 4. Genero el ID del nuevo elemento
    return dataBaseArray[dataBaseArray.length - 1].id + 1;
  }
}

const createBook = (newBook) => {
  // 0. Ubicación de la base de datos JSON
  const booksPath = path.join(__dirname, '../data-base/books.json');
  // 1. Lectura del contenido del archivo JSON
  const dataBaseJSON = fs.readFileSync(booksPath, 'utf-8');
  // 2. Contenido  de STRING a ARRAY
  const dataBaseArray = JSON.parse(dataBaseJSON);
  // 3. Agrego al ARRAY el nuevo libro en formato Objeto Literal
  dataBaseArray.push({
    id: generateID(), // Generamos el ID
    ...newBook // Spread Operator => agrego todos los atributos del nuevo libro
  });
  // 4.  ARRAY a STRING JSON
  const deArrayAJSON = JSON.stringify(dataBaseArray, null, ' ');
  // 5. Sobreescribir el archivo books.json con el nuevo ARRAY
  fs.writeFileSync(booksPath, deArrayAJSON);
  // 6. Generamos un mensaje de que todo salió bien
  console.log('El libro se agregó correctamente');
}

module.exports = createBook;