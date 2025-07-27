const data = [
  {
    id: 1,
    title: 'The Lord of the Rings',
    publicationDate: '1954-07-29',
    author: 'J. R. R. Tolkien',
    genres: [
      'fantasy',
      'high-fantasy',
      'adventure',
      'fiction',
      'novels',
      'literature',
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: 'El señor de los anillos',
      chinese: '魔戒',
      french: 'Le Seigneur des anneaux',
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: 'The Cyberiad',
    publicationDate: '1965-01-01',
    author: 'Stanislaw Lem',
    genres: [
      'science fiction',
      'humor',
      'speculative fiction',
      'short stories',
      'fantasy',
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: 'Dune',
    publicationDate: '1965-01-01',
    author: 'Frank Herbert',
    genres: ['science fiction', 'novel', 'adventure'],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: '',
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: '1997-06-26',
    author: 'J. K. Rowling',
    genres: ['fantasy', 'adventure'],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: 'Harry Potter y la piedra filosofal',
      korean: '해리 포터와 마법사의 돌',
      bengali: 'হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন',
      portuguese: 'Harry Potter e a Pedra Filosofal',
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: 'A Game of Thrones',
    publicationDate: '1996-08-01',
    author: 'George R. R. Martin',
    genres: ['fantasy', 'high-fantasy', 'novel', 'fantasy fiction'],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: '왕좌의 게임',
      polish: 'Gra o tron',
      portuguese: 'A Guerra dos Tronos',
      spanish: 'Juego de tronos',
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const books = getBooks();

const advestureBooks = books
  .filter((book) => book.genres.includes('adventure'))
  .map((book) => book.title);
console.log(advestureBooks);

// Destructuring

// Destructuring
/*
const book = getBook(3);

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } = book;

const getYear = (str) => str.split("-")[0];

console.log(title, author, pages, publicationDate, genres, hasMovieAdaptation);

// rest operator
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

console.log(primaryGenre, secondaryGenre, otherGenres);

// spread operator
const newGenres = [...genres, "epic fantasy"];

console.log(newGenres);

// updating an object
// spread object should be first when adding new properties or overriding existing ones
const updatedBook = { ...book, moviePublicationDate: "2022-01-01", pages: 1400 };

console.log(updatedBook);

updatedBook

// string literals

const bookInfo = `The book ${title} was written by ${author} and has ${pages} pages. Published in ${getYear(publicationDate)}.`;

bookInfo

// short circuiting
console.log(hasMovieAdaptation && "This book has a movie adaptation.");

// falsy: 0, '', null, undefined, NaN, false
console.log('' && 'bond');

// truthy: everything else
console.log(false || 'bond');

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || 'No translation available.';

console.log(spanishTranslation);

// falsy can produce errors
// console.log(book.reviews.librarything.reviewsCount || 'No rating available.');
// const countWrong = book.reviews.librarything.reviewsCount || 'No rating available.';
// console.log(countWrong);

// knowledge coalescing operator
// const count = book.reviews.librarything.reviewsCount ?? 'No rating available.';
// console.log(count);

function getTotalReviewCount(book) {
  const goodread = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodread + librarything;
}

console.log(getTotalReviewCount(book));


const books = getBooks();

const titles = books.map((book) => book.title);

console.log(titles);

function getTotalReviewCount(book) {
  const goodread = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodread + librarything;
}

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));

essentialData

// functional array methods
// map

const books = getBooks();

const titles = books.map((book) => book.title);

function getTotalReviewCount(book) {
  const goodread = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodread + librarything;
}

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));

console.log(essentialData);

// filter

const longBooks = books.filter((book) => book.pages > 1000).filter((book) => book.hasMovieAdaptation);
console.log(longBooks);

const advestureBooks = books.filter((book) => book.genres.includes("adventure")).map((book) => book.title);
console.log(advestureBooks);


// reduce
// acc = accumulator, book = current value
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
console.log(pagesAllBooks);

const reviewsAllBooks = books.reduce((acc, book) => acc + books.pages > 500, 0);
console.log(reviewsAllBooks);

// sort
// mutates original array
// slice() creates a copy of the array
const arr = [1, 5, 3, 2, 4];
const sortedArr = arr.slice().sort((a, b) => a - b);
console.log(sortedArr);
console.log(arr)
const sortedBooks = books.sort((a, b) => a.pages - b.pages).map((book) => book.title);
console.log(sortedBooks);

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages).map((book) => book.title);
console.log(sortedByPages);

// immutable array methods

// 1) Add a book object to the array
const newBook = {
  id: 6,
  title: "The Hobbit",
  author: "J. R. R. Tolkien",
};

const booksAfterAdd = [...books, newBook];

console.log(booksAfterAdd);

// 2) Remove a book object from the array

const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 2);
console.log(booksAfterDelete);

// 3) Update a book object in the array

const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 3 ? { ...book, title: "Dune: The Butlerian Jihad" } : book
);

console.log(booksAfterUpdate);
*/
// ASYNC JAVASCRIPT

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

async function getTodos(user, done = false) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    console.log(data);
    const todos = data
      .filter((todo) => todo.userId === user && todo.completed === done)
      .map((todo) => todo.title);
    const onlyCompleted = data.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );
    console.log(onlyCompleted);
    const todoCount = todos.length;
    console.log(todoCount);
    console.log(todos);
  } catch (error) {
    console.error(error);
  }
}

getTodos(3, true);
