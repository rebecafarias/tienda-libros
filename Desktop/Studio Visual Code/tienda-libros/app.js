const createBook = require('./crud/create');
const readBooksDB = require('./crud/read');
const updateBook = require('./crud/update');
const deleteBook = require('./crud/delete');

const command = process.argv[2];

switch (command) {
  case 'new':
    const newBook = {
      title: process.argv[3],
      author: process.argv[4],
      genre: process.argv[5],
      year: process.argv[6],
      cost: process.argv[7],
      price: process.argv[8]
    };
    createBook(newBook);
    break;
  case 'read':
    const books = readBooksDB();
    console.log("Estos son los libros disponibles en nuestra tienda:");
    console.log(books);
    break;
  case 'edit':
    const bookId = process.argv[3];
    const newBookInformation = {
      title: process.argv[4],
      author: process.argv[5],
      genre: process.argv[6],
      year: process.argv[7],
      cost: process.argv[8],
      price: process.argv[9]
    };
    updateBook(bookId, newBookInformation);
    break;
  case 'delete':
    const bookIdToDelete = process.argv[3];
    deleteBook(bookIdToDelete);
    break;
  default:
    console.log('Comando no reconocido, los comandos disponibles son: "new", "read", "update", "delete"');
}