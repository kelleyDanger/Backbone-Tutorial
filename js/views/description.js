$(document).ready(function() {
    var DescriptionView = Backbone.View.extend({
        el: "#description",
        initialize: function() {
            this.model = new Item();
            this.model.fetch();
            this.model.bind('change', this.render, this);
        },
        render: function() {
            var template = _.template( $("#description-template").html(), this.model.toJSON() );
            this.$el.html(template);
        }
    });
    
    var DescriptionView = new DescriptionView();
});