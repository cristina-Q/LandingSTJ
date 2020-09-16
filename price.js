
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let url = require('url');
const apitoken = AQY2S7AUTER5QICUBC7S2GH9M25J6M1XRF;

url = 'https://api.binance.com';

let query = '/api/v3/avgPrice?symbol=LTC';

url = url + query;
console.log(url);

let theRequest = new XMLHttpRequest();

theRequest.open('GET', url, true);

theRequest.onload = function () {
  console.log(theRequest.responseText);
};

theRequest.send();




