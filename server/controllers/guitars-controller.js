var Guitars = require('../datasets/guitars');
var guitarData = require('../guitars.json');

module.exports.getGuitarInfo = function(req, res){
	res.json({ "name":"John", "age":30, "car":null });

/*
	Guitars.findById(req.params.id, function(err, userInfo){
		if (err){
			res.error(err);
		} else {
			res.json(userInfo);
		}
	})
	*/
}

module.exports.getGuitars = function(req, res){
	res.json(guitarData);

/*
	Guitars.findById(req.params.id, function(err, userInfo){
		if (err){
			res.error(err);
		} else {
			res.json(userInfo);
		}
	})
	*/
}