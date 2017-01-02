var mongoose	= require('mongoose'),
	Schema		= mongoose.Schema;

var CircuitGridSchema = new Schema({
	one: Number,
	two: Number,
	three: Number,
	four: Number,
	five: Number,
	six: Number,
	seven: Number,
	eight: Number,
	nine: Number,
	ten: Number
});

var CircuitSchema = new Schema({
	circuitName: String,
	author: String,
	circuitArr: Object
});

module.exports	= mongoose.model('Circuit', CircuitSchema);
module.exports	= mongoose.model('CircuitGrid', CircuitGridSchema);
