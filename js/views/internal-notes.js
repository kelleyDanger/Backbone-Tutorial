$(document).ready(function() {
    var InternalNotesView = Backbone.View.extend({
        el: "#internalNotes",
        initialize: function() {
            this.model = new Item();
            this.model.fetch();
            this.model.bind('change', this.render, this);
        },
        render: function() {
            var template = _.template( $("#internal-notes-template").html(), this.model.toJSON() );
            this.$el.html(template);
        }
    });

    var InternalNotesView = new InternalNotesView();
});