'use strict'
require('es6-promise').polyfill();
require('isomorphic-fetch');

const apiKey = 'ff658d155a7400cbccdcfa0060429c8b';

exports.checkDomain = (req, res) => {
  fetch(`http://api.whoapi.com/?domain=${req.query.domain}&r=whois&apikey=${apiKey}`)
	.then(response => {
  		if (response.status >= 400) {
  			throw new Error("Bad response from server");
  		}
  		return response.json();
  	})
	.then(domain => res.send(domain))
  .catch(error => console.log('Something went wrong', error));
 }
