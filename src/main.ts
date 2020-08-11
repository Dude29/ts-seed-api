import express from 'express'

export const api = express()
const port = 3000

api.get('/', (req, res) => {
	res.end('Hello World!')
})

api.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
