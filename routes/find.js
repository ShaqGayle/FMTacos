import express from 'express';
import axios from 'axios';
import Yelp from 'node-yelp-fusion';
import path from 'path';

let router = express.Router();

var yelp = new Yelp({id: 'IHOCvB0ZZ9_pLx509U3tpw', secret: 'zs3cMk1TanEzqeIc4OD0oLAQFXOTWNNP769TU0UqvSCmw7Cn9az9RxHIHKjaBpMy'});

const googleReqUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
const API_KEY = '&key=AIzaSyBWxC2BVodOgiOtbbCVOYD8ATZLjk7WM18';

router.get('/', (req,res) => {
  var address = req.query.address;
  var reqAddress = address.split(' ').join('+');
  axios.get(googleReqUrl + reqAddress + API_KEY)
    .then((data) => {
      const city = data.data.results[0].address_components[2].long_name;
      yelp.search("term=tacos&location=" + city)
        .then(function(results){
          console.log(results.businesses);
          res.render('results', {
            results: results.businesses
          });
        }).catch((err) => {
          console.log(err);
        });
    }).catch((err) =>{
      console.log(err);
    });

});

export default router;
