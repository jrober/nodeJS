var express = require('express');
const fs = require('fs');
const https = require('https');
var request = require('request')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root:  'public' });  
})

//var politics = "https://api.pokemontcg.io/v1/cards";

//var cards = request(politics);

//console.log(cards);

//var pokemon = cards.cards;

//console.log(pokemon[0]);

//var pokemon = [{name: 'john',url: 'http://besd.byu.edu/sites/besd.byu.edu/files/JustinRobertsSquare.png'}, {name: 'jacob', url: 'https://imageservicestoreag.blob.core.windows.net/imagecatalog/e35916b8cb614c979c2456c2bce5cc40v1.jpeg'}];

router.get('/getPokemon', function(req, res, next) {
  	//https://api.pokemontcg.io/v1/cards?name=
  	console.log('in get pokemon');
	//var pokemonResults = [];
	var searchStr = req.query.q;
	var url = "https://api.pokemontcg.io/v1/cards?name=" + searchStr;
	var cards = request(url);
	//if (searchStr) 
	  //var myRe = new RegExp("^" + req.query.q.toLowerCase());
	//else
	  //var myRe = new RegExp("^");
	  /*
	for(var i = 0; i < pokemon.length; i++) {
	  var results = pokemon[i].name.toLowerCase().search(myRe);
	  if (results != -1) {
	    console.log(pokemon[i]);
	    pokemonResults.push({name:pokemon[i].name,url:pokemon[i].url});
	  }
	}*/
	console.log(cards);
	res.send(cards);
  
})
/*

router.get('/getword', function(req, res, next) {
var result = "";  
https.get('https://owlbot.info/api/v1/dictionary/' + req.query.w, function(response) {
    response.on('data',function(d){
      result += d;
    })
    response.on('end',function() {
      res.status(200).json(JSON.parse(result));    
    }) 
  }) 
})

*/
module.exports = router;