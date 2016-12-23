var express = require('express'),
	router = express.Router(),
	bodyParser = require('body-parser');

function authenticatedUser(req,res,next){
	console.log(next);
	if(req.isAuthenticated()) return next();
	res.redirect('/');
}

// router.route('/').get(staticController.home); //home

/****************** Routes for authentication ************************/
// router
//   .get('/register',userController.getRegister)
//   .post('/users',userController.postRegister);

// router.get('/users',userController.getUsers);

// router.route('/login')
//   .get(userController.getLogin)
//   .post(userController.postLogin);

// router.route('/questionaire')
// 	.get(userController.getQuestionaire)
// 	.post(userController.postQuestionaire);
// 	//.put?????
// router.route('/apis').get(function(req,res){
// res.render('apis.ejs');
// });

// router.route("/logout")
//   .get(userController.getLogout);

/****************** Routes for api ************************/


module.exports = router;