// 🟢🟢🟢Static properties and methods🟢🟢🟢

// Usually, static methods are used to implement functions that belong to the class, but not to any particular object of it.

class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

// usage
let articles = [
  new Article('HTML', new Date(2019, 1, 1)),
  new Article('CSS', new Date(2019, 0, 1)),
  new Article('JavaScript', new Date(2019, 11, 1)),
];
articles.sort(Article.compare);

// Another example would be a so-called “factory” method. Imagine, we need few ways to create an article:
class Article2 {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static createTodays() {
    // remember, this = Article
    return new this("Today's digest", new Date());
  }
}
