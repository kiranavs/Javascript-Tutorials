module.exports = function(MessageService, NAME){
	this.message = MessageService.getMessage() + " " + NAME;
}