
function findAuthorById(authors, authorId) {
  return authors.find((author) => author.id === authorId);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const checkedOutBooks = books.filter((book) => !book.borrows[0].returned);
  const returnedBooks = books.filter((book) => book.borrows[0].returned);
  return [checkedOutBooks, returnedBooks];
}

function getBorrowersForBook(book, accounts) {
  const borrowers = [];
  for (const { id, returned } of book.borrows) {
    const account = accounts.find((acc) => acc.id === id);
    if (account) {
      borrowers.push({ ...account, id, returned });
    }
  }
  return borrowers.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
