$(document).ready(function() {
    var DimensionsView = Backbone.View.extend({
        el: "#dimensions",
        initialize: function() {
            this.model = new Item();
            this.model.fetch();
            this.model.bind('change', this.render, this);
        },
        render: function() {
            var template = _.template( $("#dimensions-template").html(), this.model.toJSON().measurement );
            this.$el.html(template);
        }
    });

    var DimensionsView = new DimensionsView();
});