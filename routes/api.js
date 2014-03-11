var routes = require('../data/routes.min.json');
var shapes = require('../data/shapes.min.json');
var trips = require('../data/trips.min.json');

exports.routes = function(req, res){
	res.jsonp(routes)
};

exports.route = function(req, res){
	var route = routes[req.params.route_id];

	if (route){
		res.jsonp(route);
	} else {
		res.send('That\'s not a valid route_id');
	}
};

exports.getShape = function(req, res){
	var shape_id = trips[req.params.route_id];
	if(shape_id){
		res.jsonp(shape_id);
	} else {
		res.send('That\'s not a valid route id');
	}
};

exports.shapes = function(req, res){
	res.jsonp(shapes)
};

exports.ashape = function(req, res){
	var shape = shapes[req.params.shape_id];
	if (shape){
		res.jsonp(shape);
	} else {
		res.send('That\'s not a valid shape_id');
	}
};

exports.trips = function(req, res){
	res.jsonp(trips)
};