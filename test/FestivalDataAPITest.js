const axios = require('axios');
const request = require('supertest');
const { expect } = require('chai');
const should = require('should');
const shouldHttp = require('should-http');
const supertest = require('supertest');
const endpoint = require('../util/config.js');
const resDataModel = require('../util/responseDataModel');

let baseUrl = endpoint.baseUrl;
let apiEndpoint = endpoint.endpoint;

describe('Music festival Data sanity', async function () {
  it('should return 200 status code', async function () {
    const resData = await axios.get(baseUrl, apiEndpoint);
    expect(resData.status).to.equal(200);
    //console.log(resData);
  });
});

describe('Music festival data GET API test', () => {
  it('should successfully pass the test for get api with status not null', (done) => {
    request(baseUrl)
      .get(apiEndpoint)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .end(function (err, res) {
        expect(res.statusCode).to.be.equal(200);
        expect(res.body.name).to.not.be.null;
        expect(res.body.bands).to.not.be.null;
        done();
      });
  });
});

describe('Music festival data test suite', function () {
  for (let i = 1; i <= 10; i++) {
    describe('GET Request test suite ' + i, function () {
      it('Verify if response adheres to API spec Model', async function () {
        let res = await supertest(baseUrl).get(apiEndpoint).retry(2)
          .set('Accept', 'application/json')
          .set('Content-Type', 'application/json');
        res.should.be.json();
        resDataModel.validateAPIModelResponse(res);
      });
    });
  }
});