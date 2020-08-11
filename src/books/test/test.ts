import { describe } from 'mocha'
import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import api from '../../main'
import exampleBooks from '../example-books.json'

chai.use(chaiHttp)

describe('/books', () => {

	it('GET /books/non-existant-endpoint should respond with 404', async () => {
		const response = await chai.request(api)
			.get('/books/non-existant-endpoint')
			.send()

		expect(response).to.have.status(404)
	})

	it('GET /books should respond with 200 OK and the example json payload', async () => {
		const response = await chai.request(api)
			.get('/books')
			.send()

		expect(response).to.have.status(200)
		expect(response.body).to.deep.equal(exampleBooks)
	})

})
