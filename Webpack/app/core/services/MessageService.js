module.exports = function(MESSAGE){
	var serviceObj = {};
	serviceObj.getMessage = function(){
		var msg = MESSAGE;
		return msg;
	}
	return serviceObj;
}