
const rp = require('request-promise');

const requestOptions = {
  method: 'GET',
  uri: 'https://api.bittrex.com/v3/markets/STORJ-BTC/ticker',
  qs: {},

  headers: {
    'X-CMC_PRO_API_KEY': 'edbf4e10-7fea-40dd-9b6b-6274776b3d90'
  },
  json: true,
  gzip: true
};

rp(requestOptions)
  .then(function (response) {
    // resolved
  })
  .catch(function (err) {
    // rejected
  });

console.log(rp.response);
// const obj = JSON.stringify(rp.response);

// console.log(obj);



