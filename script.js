let myLibrary = [
    new Book('B1', 'A1', '1', null, true),
    new Book('B2', 'A2', '2', null, false),
    new Book('B3', 'A3', '3', null, true)
];

function Book(title, author, pages, img, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.img = img;
    this.read = read;
    
    this.info = () => {
        return `${this.title}, ${this.author}, ${this.pages}, ${this.read}`;
    }

    this.noTitleInfo = () => {
        return `${this.author} (${this.pages})`;
    }
}

function addBookToLibrary() {
    myLibrary.forEach( (book) => {
        createCard(book);
    });
}

function createCard(book) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('bookCard');
    bookCard.style.border = ".1px solid black";

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove');

    const readBtn = document.createElement('button');
    readBtn.classList.add('notRead');
    if (book.read == true) {
        readBtn.classList.add('read');
    }

    const bookCover = document.createElement('img');
    if (book.img == null) {
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
}


const bookContainer = document.querySelector("#books");

const btn = document.querySelector('.addBook');

const form = document.querySelector('form');

btn.addEventListener('click', (e) => {
    btn.style.display = "none";
    form.style.display = "block"
})



//toggle button for read / not read by using div.classList.toggle('read') by using .notread.read class vs .notread class in CSS