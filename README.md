# EnergyAustraliaCodingTest

Hello Folks, This framework is basically mix of Mocha+Chai to validate the GET feature of "Festivals" API.

PLease follow the instructions to clone & execute.

Instructions:

Clone the repo
git clone <url>

Install Dependencies:
npm install
npm i --save mocha chai supertest

To run the test
npm run test:awesome

Observations on the API specs and model:

Queries on the requirements:
1) No authentication implemented?
2) No mandatory information provided for API Models schema
3) GET /api/v1/festivals has rsponse code as 200 & 429. Please elaborate on the codition for 429 (need the time limit the server can handle)? Need this condition for Mountebank Stubs. Typically a performance test issue.
4) Only 200 & 429 status code are provided. Some basic codes in API such as 401, 403, 404 & 500 omitted in specs for a reason?
5) When tried GET - https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals through postman or CLI, the reponse varies everytime. This is sanity failed and dev's to fix ASAP. below are some observations from QA.
    a) The response data varies everytime in 200 scenario, never consistent.
    b) Intermittently, The response data is completely contradicting with model (gives just "" as response but status as 200)
    c) No specific order for either Name or Bands to display in response. The user data is juggled.
    d) At times, Bands are completely missed in response. Also, "recordlabel" is missed sometimes under Name->Bands.
6) Model names are differnt vs response. No 'Music Festival' shown in response. Band is shown as 'bands'
7) To reproduce the erros in suite, iterated tests max to 10. This can be controlled & limited once issue are fixed.
