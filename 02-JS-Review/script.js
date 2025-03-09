const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
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
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
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
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
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
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
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
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
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

//Destructuring
/*
const books = getBook(3);
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  books;

console.log(author, title, pages, publicationDate, genres, hasMovieAdaptation);
// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];
const thirdGenre = genres[2];
const fourthGenre = genres[3];

//Rest operator on arrays
const [primaryGenre, secondaryGenre, ...other] = genres;

console.log(primaryGenre, secondaryGenre, other);

//Spread operator on arrays
const spreadgenre = [...genres, "18+"];

console.log(spreadgenre);

//spread operator on objects
const updatedBook = {
  ...books,

  //Adding a new Property
  moviePublicationDate: "2001-12-19",

  //Overwriting an existing property
  pages: 1210,
};
updatedBook;

const summary = `${title}, a ${pages}-page long book, was written by ${author} and
published in ${publicationDate.split("-")[0]}.
The book has ${hasMovieAdaptation ? "" : " not "} been adapted as a movie`;
summary;

const pagesRange = pages > 1000 ? "over a 1000" : "less than 1000";
pagesRange;

//Normal functions
// function getYear(str){
//   return str.split("-")[0];
// }

//Arrow Functions
const getYear = (str) => {
  return str.split("-")[0];
};
console.log(getYear(publicationDate));

//Short-Circuiting in JavaScript
console.log(true && "Some thing")
console.log(false && "something")
console.log(hasMovieAdaptation && "This book has a movie.")

//falsy : 0, '', null, undefined
console.log("Vishal" && "Something")
console.log(0 && "Anything")

console.log(true || "Hello world")
console.log(false || "Hello World")
console.log(books.translations.spanish)

const spanishTranslation = books.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

// console.log(books.reviews.librarything.reviewsCount)
// const countReviews = books.reviews.librarything.reviewsCount || "NO DATA";
// countReviews;

// const count = books.reviews.librarything.reviewsCount ?? "NO DATA";
// count;

//Optional Chaining
function getTotalReviewsCount(book){
  const goodreads = book.reviews.goodreads?.reviewsCount || 0;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  // ? <- this is optional chaining
  return goodreads + librarything;
}
console.log(getTotalReviewsCount(books));

*/
/*
function getTotalReviewsCount(book) {
  const goodreads = book.reviews.goodreads?.reviewsCount || 0;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  // ? <- this is optional chaining
  return goodreads + librarything;
}

//The Array Map Methods
const books = getBooks();
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
x;

const titles = books.map((book) => book.title);
titles;

const authors = books.map((book) => book.author);
authors;

const essetials = books.map((book) => ({
  title: book.title,
  author: book.author,
  publicationDate: book.publicationDate,
  reviewsCount: getTotalReviewsCount(book),
}));
essetials;

//The array filter method
const loogBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
loogBooks;

const advetureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
advetureBooks;

const reviews = books
  .filter((book) => book.reviews.goodreads.reviewsCount > 100000)
  .map((book) => book.title);
reviews;

//The Array reduce method
const allBooksPages = books.reduce((sum, book) => sum + book.pages, 0);
allBooksPages;

const totalGoodReviews = books.reduce(
  (sum, book) => sum + book.reviews.goodreads.reviewsCount,
  0
);
totalGoodReviews;

const totalLibraryReviews = books.reduce(
  (sum, book) => sum + book.reviews.librarything?.reviewsCount || 0,
  0
);
totalLibraryReviews;

//The Array Sort Method
const arr = [2, 4, 7, 9, 1, 6, 8];

//Descending order sorting in JavaScript
const DescendingSorted = arr.slice().sort((a, b) => b - a);
DescendingSorted;

//Ascending order sorting
const AscendingSorted = arr.slice().sort((a, b) => a - b);
AscendingSorted;
arr;

const sortedByPages = books
  .slice()
  .sort((a, b) => a.pages - b.pages)
  .map((book) => {
    return {
      title: book.title,
      pages: book.pages,
    };
  });
sortedByPages;

// working on immutable arrays
// 1) Add book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2) Delete book object from array
const booksAfterDeletion = booksAfterAdd.filter((book) => book.id != 3);
booksAfterDeletion;

// 3) Update book object in the array
const bookAfterUpdate = booksAfterDeletion.map((book) =>
  book.id == 1 ? {...book, pages : 1210} : book
);
bookAfterUpdate;
*/
//Asynchronous functions in JavaScript
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// console.log(fetch("https://jsonplaceholder.typicode.com/todos/1"));

// console.log("Vishal");

//Async And await
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  console.log(data);
  return data;
}


const todos = getTodos();
console.log(todos)
console.log("Vishal");
