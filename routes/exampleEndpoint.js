var express = require('express');
var ET_Client = require('sfmc-fuelsdk-node');
var router = express.Router();

// Note: These should be set as environment variables
// const clientId = process.env.CLIENT_ID;


//configure connection to remote resources
// add configuration...

var jsonResult = []; // the response will be an array

/* GET Hello World */
router.get('/', function(req, res, next) {

    if (res.locals.error != null) {
      console.error(res.locals.error.message);
      next(createError(500));
    } else {
      console.log(req.body);
      // add for arrays
      //for (const result of results.body.Results) {
      //  jsonResult.push(result);
      //}
      jsonResult.push(results.body); // use this if there is a single response
      res.json( jsonResult );
    }

});

/* GET Hello World */
router.post('/', function(req, res, next) {


    if ((res.locals.error != null)) {
      console.error(res.locals.error.message);
      next(createError(500));
    } else {
      console.log(req.body);
      // add for arrays
      //for (const result of results.body.Results) {
      //  jsonResult.push(result);
      //}
      jsonResult.push(request.body); // spits back the post body
      res.json( jsonResult );
    }



});

module.exports = router;
