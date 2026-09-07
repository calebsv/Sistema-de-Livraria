// Initialize library data
const libraryData = {
    books: [
        {
            id: 1,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925,
            genre: "Fiction",
            isRead: false,
            rating: 0,
            borrowed: false,
            borrowedBy: "",
            borrowDate: ""
        }
    ],
    readers: [
        {
            name: "John Smith",
            favoriteGenre: "Fiction",
        }
    ]
};

function manageLibrary(actions, data) {
    let results = [];
    
    for (let i = 0; i < actions.length; i++) {
        const currentAction = actions[i];
        const currentData = data[i];
        
        switch (currentAction) {
            case 'printBooks':
                results.push(libraryData.books);
                break;

            case 'printReaders':
                results.push(libraryData.readers);
                break;

            case "addBook":
                // Add a new book to the library
                let newBook = {
                    id: libraryData.books.length + 1,
                    title: currentData.title,
                    author: currentData.author,
                    year: currentData.year,
                    genre: currentData.genre,
                    isRead: false,
                    rating: 0,
                    borrowed: false,
                    borrowedBy: "",
                    borrowDate: ""
                };

                libraryData.books.push(newBook);
                results.push("Book added successfully!");
                break;

            case "searchByTitle":
                let searchResults = [];

                for (let book of libraryData.books) {
                    if (book.title.toLowerCase().includes(currentData.toLowerCase())) {
                        searchResults.push(book);
                    }
                }

                results.push(searchResults);
                break;

            default:
                results.push("Invalid action!");
        }
    }
    
    return results;
}