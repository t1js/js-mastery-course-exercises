/* 1. Define a class called Book with properties for title, author, and year. Add a
method called getSummary that returns a string containing the title, author, and
year. */

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `Title: ${this.title}, author: ${this.author}, year: ${this.year}.`
    }
}

/* 2. Create a class called Magazine that extends the Book class. Add a new property
month and modify the getSummary method to include the month of publication.*/

class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }

    getSummary() {
        return `Title: ${this.title}, author: ${this.author}, year: ${this.year}, month: ${this.month}.`
    }
}

/* 3. Add a static method to the Book class that compares the publication year of
two books and returns the older book. Test this method with instances of
books. */

Book.returnOlderBook = function(book1, book2) {
    if (book1.year < book2.year) {
        return book1;
    } else if (book1.year > book2.year) {
        return book2;
    } else {
        return null;
    }
}

/* 4. Modify the Book class to make the year and author properties private. Ensure
that these properties are only modifiable through class methods (e.g., getters
and setters). */

/* 5. Add getters and setters for the author and year properties in the Book class to
handle validations: author must be a non-empty string, and year must be a
four-digit number. */

class ModifiedBook {
    constructor(title, author, year) {
        this.title = title;
        this._author = author;
        this._year = year;
    }

    get author() {
        return this._author;
    }

    get year() {
        return this._year;
    }

    set author(newAuthor) {
        if (typeof newAuthor === "string" && !/^\s*$/.test(newAuthor)) {
            this._author = newAuthor;
        } else {
            console.error("Incorrect input");
        }
    }

    set year(newYear) {
        if (typeof newYear === "number" && newYear.toString().length === 4) {
            this._year = newYear;
        } else {
            console.error("Incorrect input");
        }
    }

    getSummary() {
        return `Title: ${this.title}, author: ${this._author}, year: ${this._year}.`
    }
}

//making the year and author properties private in an alternative way (according to newer conventions)

class DoubleModifiedBook {
    #author;
    #year;
    constructor(title, author, year) {
        this.title = title;
        this.#author = author;
        this.#year = year;
    }

    getSummary() {
        return `Title: ${this.title}, author: ${this.#author}, year: ${this.#year}.`
    }
}