import { describe } from 'mocha'
import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import { api } from '../main'

chai.use(chaiHttp)

describe('API', () => {

	describe('/', () => {

		it('GET / should respond with 200 OK and a body of: "Hello World!"', async () => {
			const response = await chai.request(api)
				.get('/')
				.send()

			expect(response).to.have.status(200)
			expect(response.text).to.equal('Hello World!')
		})

	})

})
