function getTotalBooksCount(books) {
  return books.length;
}


function getTotalAccountsCount(accounts) {
  return accounts.length;
}


function getBooksBorrowedCount(books) {
  return books.filter((book) => !book.borrows[0].returned).length;
}


function getMostCommonGenres(books) {
  const genreCount = books.reduce((acc, book) => {
    const { genre } = book;
    if (acc[genre]) {
      acc[genre] += 1;
    } else {
      acc[genre] = 1;
    }
    return acc;
  }, {});

  const sortedGenres = Object.entries(genreCount).sort((a, b) => b[1] - a[1]);

  return sortedGenres.slice(0, 5).map(([name, count]) => ({ name, count }));
}


function getMostPopularBooks(books) {
  const popularityCount = books.map((book) => ({
    name: book.title,
    count: book.borrows.length,
  }));

  return popularityCount.sort((a, b) => b.count - a.count).slice(0, 5);
}


function getMostPopularAuthors(books, authors) {
  const authorCount = authors.reduce((acc, author) => {
    const { id, name } = author;
    const authorBooks = books.filter((book) => book.authorId === id);
    const borrowCount = authorBooks.reduce((sum, book) => sum + book.borrows.length, 0);
    acc.push({ name: `${name.first} ${name.last}`, count: borrowCount });
    return acc;
  }, []);

  return authorCount.sort((a, b) => b.count - a.count).slice(0, 5);
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
