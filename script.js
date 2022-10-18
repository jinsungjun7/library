
class Book {
    constructor(title, author, pages, img, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.img = img;
    this.read = read;
    }
    
    info = () => {
        return `${this.title}, ${this.author}, ${this.pages}, ${this.read}`;
    }

    noTitleInfo = () => {
        return `${this.author} (${this.pages})`;
    }
}

let myLibrary = [
    new Book('Cracking the Coding Interview', 'Gayle Laakmann McDowell', '687', 'images/ctci.jpg' , false)
];


function resetLibrary() {
    bookContainer.innerHTML = '';
    let count = 0;
    myLibrary.forEach( book => {
        createCard(book, count)
        count++;
    });
}

function addBookToLibrary(book) {
    createCard(book, myLibrary.length-1);
}


function createCard(book, id) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('bookCard');
    bookCard.setAttribute('id', `${id}`)
    bookCard.style.border = ".1px solid black";

    const removeBtn = document.createElement('button');
    //removeBtn.innerHTML = `<img src='images/remove.jpg' alt='trashcan icon' class='trash-icon'>`;
    removeBtn.classList.add('remove');
                                                                                                                                                                                                                                                                                                                                                                                                                                               
    const readBtn = document.createElement('button');
    readBtn.classList.add('notRead');
    readBtn.textContent = "NR";
    if (book.read == true) {
        readBtn.classList.add('read');
        readBtn.textContent = "R"
    }
    readBtn.addEventListener('click', (e) => {

    })

    const bookCover = document.createElement('img');
    if (book.img == '') {
        bookCover.src = 'images/blankcover.jpg';
    } else {
        bookCover.src = book.img;
    }
    bookCover.alt = "book cover";

    const bookContentContainer = document.createElement('div');
    bookContentContainer.classList.add("contentContainer")

    const bookTitle = document.createElement('h1');
    bookTitle.textContent = book.title;
    
    const bookInfo = document.createElement('p');
    bookInfo.textContent = book.noTitleInfo();

    bookCard.appendChild(removeBtn);
    bookCard.appendChild(readBtn);
    bookCard.appendChild(bookCover);
    bookContentContainer.appendChild(bookTitle);
    bookContentContainer.appendChild(bookInfo);
    bookCard.appendChild(bookContentContainer);
    bookContainer.appendChild(bookCard);

    updateBtn(removeBtn, readBtn);
}

function toggleBtnAndForm() {
    form.classList.toggle('hide');
}

function handleSubmit(event) {
    event.preventDefault();
    let newBook = new Book(document.getElementById('bookTitle').value, 
    document.getElementById('author').value, 
    document.getElementById('pages').value, 
    document.getElementById('img').value, 
    document.getElementById('read').checked);


    
    myLibrary.push(newBook);
    addBookToLibrary(newBook);
    toggleBtnAndForm();
    cleanUpForm();
}


function updateBtn(removeBtn, readBtn) {
    readBtn.addEventListener('click', (e) => {    
        if (readBtn.classList.contains('read')) {
            readBtn.classList.toggle('read');
            readBtn.textContent = "NR";
            myLibrary[e.target.parentElement.id].read = false;
            return;
        }
    
        readBtn.classList.toggle('read');
        readBtn.textContent = "R";
        myLibrary[e.target.parentElement.id].read = true;
    });

    removeBtn.addEventListener('click', (e) => {
        myLibrary.splice(Number(e.target.parentElement.id), 1);
        bookBody.removeChild(e.target.parentElement);//.parentElement);
        resetLibrary();
    });
}

function cleanUpForm() {
    document.getElementById('bookTitle').value = ''; 
    document.getElementById('author').value = ''; 
    document.getElementById('pages').value = ''; 
    document.getElementById('img').value = '';
    document.getElementById('read').checked = '';
}

const bookBody = document.querySelector('#books');
const bookContainer = document.querySelector("#books");
const form = document.querySelector('form');
window.addEventListener('load', resetLibrary());
const submitBtn = document.querySelector('.submitBtn');

const addBookBtn = document.querySelector('.addBookBtn');
addBookBtn.addEventListener('click', () => {
    toggleBtnAndForm();
});







//toggle button for read / not read by using div.classList.toggle('read') by using .notread.read class vs .notread class in CSS