var app = angular.module('CircuitApp',[])
	.controller('CircuitController', CircuitController)
	// .config(configRoutes);


	// app.use(function(req, res, next) { // fixes allow origin permission error
	//  res.header("Access-Control-Allow-Origin", "*");
	//  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	//  next();
	// });

configRoutes.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"]; // minification protection
function configRoutes($stateProvider, $urlRouterProvider, $locationProvider) {

  //this allows us to use routes without hash params!
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  // for any unmatched URL redirect to /
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/index.html',
      controller: 'CircuitController'
    });




}
console.log('loaded')
	function CircuitController($scope){
		console.log('circuit controller loaded')

		console.log('circuit index controller');
		var self = this;
		self.all = [];
		self.CircuitGrid =/* new db.CircuitGrid(*/[
			{one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10},
			// {one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10},
			// {one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10},
			// {one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10},
			// {one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10},
			// {one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10},
			// {one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10},
			// {one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10},
			// {one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10},
			// {one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10}
			
			];
		$scope.btn = function(index){
			console.log(index);

			// self.CircuitGrid.one = 10
		}
		// self.newCircuit = new db.Circuit({
		// 	circuitName: self.circuitName,
		// 	author: self.author,
		// 	circuitArr: self.circuidGrid
		// });
	}
