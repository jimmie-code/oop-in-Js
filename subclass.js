class Book {
  Constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
  }

  getSummary() {
      return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

// Magazine SubClass
class Magazine extends Book {
  constructor(title, author, year, month) {
      super(title, author, year);
      this.month = month;
  }
}

// Instantiate Magazine
const mag1 = new Magazine("Mag One", "ken ken", "2018", "Jan");

console.log(mag1.getSummary());