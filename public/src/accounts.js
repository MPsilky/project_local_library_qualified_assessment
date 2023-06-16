


function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}


function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => {
    const lastNameA = a.name.last.toLowerCase();
    const lastNameB = b.name.last.toLowerCase();
    if (lastNameA < lastNameB) {
      return -1;
    }
    if (lastNameA > lastNameB) {
      return 1;
    }
    return 0;
  });
}


function getTotalNumberOfBorrows(account, books) {
  const accountId = account.id;
  let totalBorrows = 0;
  for (const book of books) {
    const borrows = book.borrows;
    for (const borrow of borrows) {
      if (borrow.id === accountId) {
        totalBorrows++;
      }
    }
  }
  return totalBorrows;
}

function getBooksPossessedByAccount(account, books, authors) {
  const accountId = account.id;
  const checkedOutBooks = [];
  for (const book of books) {
    const borrows = book.borrows;
    const isBookCheckedOut = borrows.some((borrow) => borrow.id === accountId && !borrow.returned);
    if (isBookCheckedOut) {
      const author = authors.find((author) => author.id === book.authorId);
      const bookWithAuthor = { ...book, author };
      checkedOutBooks.push(bookWithAuthor);
    }
  }
  return checkedOutBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
