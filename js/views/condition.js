$(document).ready(function() {
    var ConditionView = Backbone.View.extend({
        el: "#condition",
        initialize: function() {
            this.model = new Enums();
            this.model.fetch();
            this.model.bind('change', this.render, this);
        },
        render: function() {
            var template = _.template( $("#condition-template").html(), this.model.toJSON().condition );
            this.$el.html(template);
        }
    });
    
    var ConditionView = new ConditionView();
});