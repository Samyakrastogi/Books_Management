const express = require("express");
const booksService = require("./books.service");

const router = express.Router();

// Base path: http://localhost:4200/books

//Create
router.post("/", booksService.createBook);

// Get
router.get("/", booksService.getBooks);

// Get By ID
router.get("/:id", booksService.getBookById);

// Update
router.put("/:id", booksService.updateBook);

// Delete
router.delete("/:id", booksService.deleteBook);

module.exports = router;
