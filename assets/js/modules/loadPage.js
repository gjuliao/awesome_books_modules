import { displayBook } from './collection.js';

export default function loadPage(col) {
  window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('newBook')) {
      col = JSON.parse(localStorage.newBook) || [];
      displayBook(col);
    }
  });
}