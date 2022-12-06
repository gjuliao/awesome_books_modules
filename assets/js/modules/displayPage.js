export default function displayPage(section) {
  const bookList = document.getElementById('book_list');
  const bookForm = document.getElementById('add_book_form');
  const contact = document.getElementById('contact');
  const mainH1 = document.getElementById('main_h1');

  if (section === 'list') {
    bookList.style.display = 'block';
    bookForm.style.display = 'none';
    contact.style.display = 'none';

    mainH1.innerHTML = 'Awesome Book App';
  } else if (section === 'form') {
    bookForm.style.display = 'block';
    bookList.style.display = 'none';
    contact.style.display = 'none';

    mainH1.innerHTML = 'Add New Book';
  } else if (section === 'contact') {
    contact.style.display = 'block';
    bookList.style.display = 'none';
    bookForm.style.display = 'none';
    mainH1.innerHTML = 'Contact';
  }
}