$(document).ready(function() {
    var MaterialsView = Backbone.View.extend({
        el: "#materials",
        initialize: function() {
            this.model = new Enums();
            this.model.fetch();
            this.model.bind('change', this.render, this);
        },
        render: function() {
            var template = _.template( $("#materials-template").html(), this.model.toJSON() );
            this.$el.html(template);
        }
    });

    var MaterialsView = new MaterialsView();
});