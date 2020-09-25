const chakram = require('chakram');
const expect = chakram.expect;

const URL = 'http://localhost:3000/.netlify/functions/'

describe("Ping function", function () {
  it("should respond with 200OK", function () {
    const response = chakram.get(URL + 'ping');
    expect(response).to.have.status(200);
    return chakram.wait();
  });
});
