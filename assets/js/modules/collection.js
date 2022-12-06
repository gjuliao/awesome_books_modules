/* eslint-disable no-use-before-define, eqeqeq, class-methods-use-this */

import Book from './book.js';

const titleId = document.getElementById('title');
const authorId = document.getElementById('author');

export const displayBook = (i) => {
  const bookContainer = document.getElementById('book_container');
  const data = i.map((book) => `
            <tr class="d-flex w-100 justify-content-between">
                <td class="align-items-center w-100 d-flex justify-content-between"> <span><span class="fw-bold">${book.title}</span> by <span class="fst-italic">${book.author}</span></span> <button id="${book.id}" class="btn remove-book btn-danger">Remove</button></td> 
            </tr>`);
  bookContainer.innerHTML = data.join('');
};

export default class Collection {
  constructor() {
    this.library = [];
  }

  addBook() {
    const id = Math.floor(Math.random() * 10000);
    const newBook = new Book(id, titleId.value, authorId.value);
    this.library.push(newBook);
    this.addStorage(this.library);
    displayBook(this.library);
  }

  /* Add Storage */
  addStorage(library) {
    localStorage.setItem('newBook', JSON.stringify(library));
  }

  /* Remove Storage */
  removeElement(element) {
    col.library = col.library.filter((i) => i.id != element);
    this.addStorage(col.library);
    displayBook(col.library);
  }
}

export const col = new Collection();

document.addEventListener('click', (e) => {
  Collection.prototype.removeElement(e.target.id);
});

const formBook = document.getElementById('book_form');

formBook.addEventListener('submit', (e) => {
  e.preventDefault();
  col.addBook();
  titleId.value = '';
  authorId.value = '';
});
