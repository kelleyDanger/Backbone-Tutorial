var Item = Backbone.Model.extend({
	url: "/Backbone-Tutorial/item.json",
	parse: function (response) {
		return response.result.item;
	}
});