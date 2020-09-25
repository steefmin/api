const chakram = require('chakram');
const expect = chakram.expect;

const URL = 'http://localhost:3000/.netlify/functions/'

describe('Ping function', () => {
  it('should respond correctly', () => {
    const response = chakram.get(URL + 'ping');
    expect(response).to.have.status(200);
    expect(response).to.have.schema({
      type: 'object',
      properties: {
        message: {type: 'string'},
        randInt: {type: 'number'}
      }
    })
    expect(response).to.have.json('message', 'Pong')
    return chakram.wait();
  });
});
