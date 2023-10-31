const mongoose = require("mongoose");

const booksSchema = mongoose.Schema({
  serialNo: { type: String },
  title: { type: String, required: true },
  author: { type: String, required: true },
  summary: { type: String, required: true },
  cost: { type: String },
});

const Book = mongoose.model("books", booksSchema);

module.exports = Book;
