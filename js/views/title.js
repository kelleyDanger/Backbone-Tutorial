$(document).ready(function() {
    var TitleView = Backbone.View.extend({
        el: "#title",
        initialize: function() {
            this.model = new Item();
            this.model.fetch();
            this.model.bind('change', this.render, this);
        },
        render: function() {
            var template = _.template( $("#title-template").html(), this.model.toJSON() );
            this.$el.html(template);
        }
    });

    var TitleView = new TitleView();
});