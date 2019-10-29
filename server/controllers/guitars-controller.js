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
	let guitars = Guitars.find( { _id: "5db5f5f8676cabddf4cd7f65" } );

	console.log(guiras);

	/*
	Guitars.findById("5db5f5f8676cabddf4cd7f65", function(err, userInfo){
		console.log(userInfo);
	});
	*/
	//myCursor = Guitars.find({});
	//console.log(myCursor);
	//res.json(myCursor);
	//res.json(guitarData);
/*
	Guitars.insertOne(
		{ "name" : "canvas",
		  "image" : "100",
		  "price" : "cotton",
		  "category" : "adsfda"
		}
	 )
	 */
}