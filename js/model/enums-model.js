var Enums = Backbone.Model.extend({
	url: "/Backbone-Tutorial/enums.json",
	parse: function (response) {
		return response.itemEnums;
	}
});