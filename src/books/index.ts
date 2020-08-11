import Router from 'express-promise-router'
import exampleBooks from './example-books.json'

const books = Router();

books.get('/', function getAllBooks(req, res) {
	return res.json(exampleBooks)
})

export default books;
