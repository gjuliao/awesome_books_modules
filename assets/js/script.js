/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */

const titleId = document.getElementById('title');
const authorId = document.getElementById('author');
const bookContainer = document.getElementById('book_container');
const addButton = document.getElementById('form_btn');
const formBook = document.getElementById('book_form');

class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
}

class Collection {
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

  /* eslint-disable class-methods-use-this */
  /* Add Storage */
  addStorage(library) {
    localStorage.setItem('newBook', JSON.stringify(library));
  }

  /* Remove Storage */
  /* eslint-disable eqeqeq */
  removeElement(element) {
    this.library = this.library.filter((i) => i.id != element.id);
    this.addStorage(this.library);
    displayBook(this.library);
  }
}

const col = new Collection();

function displayBook(library) {
  const data = library.map((book) => `
        <tr class="d-flex w-100 justify-content-between">
            <td class="align-items-center w-100 d-flex justify-content-between"> <span><span class="fw-bold">${book.title}</span> by <span class="fst-italic">${book.author}</span></span> <button id="${book.id}" onclick="col.removeElement(this)" class="btn btn-danger">Remove</button></td> 
        </tr>`);
  bookContainer.innerHTML = data.join('');
}

formBook.addEventListener('submit', (e) => {
  e.preventDefault();
  col.addBook();
  this.title.value = '';
  this.author.value = '';
});

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('newBook')) {
    displayBook(JSON.parse(localStorage.newBook));
  }
});

document.getElementById('time').innerHTML = new Date();

function displayPage(section) {
  const bookList = document.getElementById('book_list');
  const bookForm = document.getElementById('add_book_form');
  const contact = document.getElementById('contact');
  const mainH1 = document.getElementById('main_h1');

  if (section == 'list') {
    bookList.style.display = 'block';
    bookForm.style.display = 'none';
    contact.style.display = 'none';

    mainH1.innerHTML = 'Awesome Book App';
  } else if (section == 'form') {
    bookForm.style.display = 'block';
    bookList.style.display = 'none';
    contact.style.display = 'none';

    mainH1.innerHTML = 'Add New Book';
  } else if (section == 'contact') {
    contact.style.display = 'block';
    bookList.style.display = 'none';
    bookForm.style.display = 'none';
    mainH1.innerHTML = 'Contact';
  }
}