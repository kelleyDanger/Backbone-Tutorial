$(document).ready(function() {
    var SaveView = Backbone.View.extend({
        el: "#save",
        initialize: function() {
            this.model = new Item();
            this.model.fetch();
            var template = _.template( $("#save-template").html() );
            this.$el.html(template);
        },
        
        events: {
            'click #saveButton' : 'save'   
        },
        
        save : function(e) {
            
            var title,
                description,
                internalNotes,
                materials,
                restrictedMaterials,
                measurementUnit,
                measurementShape,
                length,
                height,
                depth, 
                diameter,
                condition;
            
            title = $('#inputTitle').val();
            description = $('#textAreaDescription').val();
            internalNotes = $('#textAreaInternalNotes').val();
            materials = $('#materialsList').val();
            restrictedMaterials = $('#checkboxRestrictedMaterials').is(":checked") ? "Y" : "N";
            measurementUnit = $('input[name=unitradio]').filter(':checked').val() == "inches" ? "in" : "cm";
            measurementShape = $('input[name=shaperadio]').filter(':checked').val();
            length = $('#inputLength').val();
            height = $('#inputHeight').val();
            depth = $('#inputDepth').val();
            diameter = $('#inputDiameter').val();
            condition = $('input[name=conditionradio]').filter(':checked').val();
            
            var materialArray = this.model.get("material");
            materialArray.description = materials;
            materialArray.restricted = restrictedMaterials;
            
            var measurementArray = this.model.get("measurement");
            measurementArray.unit = measurementUnit;
            measurementArray.shape = measurementShape;
            measurementArray.length = length;
            measurementArray.height = height;
            measurementArray.depth = depth;
            measurementArray.diameter = diameter;
            
            var conditionArray = this.model.get("condition");
            conditionArray.description = condition;
            
            // Title, Description, DealerInternalNotes
            this.model.set({title: title, description: description, dealerInternalNotes: internalNotes});
            // Material [Description, Restricted]
            this.model.set("material", materialArray);
            // Measurement [Length, Height, Depth, Diameter, Unit, Shape]
            this.model.set("measurement", measurementArray);
            // Condition [Description]
            this.model.set("condition", conditionArray);
            
            console.log(this.model.toJSON());
        }
    });

    var SaveView = new SaveView();
});