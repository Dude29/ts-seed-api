import express from 'express'
import books from './books'

export const api = express()
const port = 3000

api.get('/', (req, res) => {
	res.end('Hello World!')
})

api.use('/books', books)

api.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
