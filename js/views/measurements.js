$(document).ready(function() {
    var MeasurementsView = Backbone.View.extend({
        el: "#measurements",
        initialize: function() {
            this.model = new Enums();
            this.model.fetch();
            this.model.bind('change', this.render, this);
        },
        render: function() {
            var template = _.template( $("#measurements-template").html(), this.model.toJSON().measurement );
            this.$el.html(template);
            this.showDimensions("Rectangular");
        },
        
        events: {
            'click #measurementUnit input' : 'changeUnitLabel',
            'click #measurementShape input' : 'showDimensions'   
        },
        
        changeUnitLabel : function(e) {
            
            var unit = $('input[name=unitradio]').filter(':checked').val();  
            var unitLabels = ["#length-unit", "#height-unit", "#depth-unit", "#diameter-unit"];
            
            if(unit == "inches") {
                for(var i=0; i<4; i++) {
                    $(unitLabels[i]).text('in.');
                }    
            } else if(unit == "centimeters") {
                for(var i=0; i<4; i++) {
                    $(unitLabels[i]).text('cm.');
                }      
            }
        },
        
        showDimensions : function(e) {
            
            var shape = $('input[name=shaperadio]').filter(':checked').val();   
            var inputs = ["#inputLength", "#inputHeight", "#inputDepth", "#inputDiameter"];
            
            if(shape == "Rectangular") {
                $(inputs[3]).attr('disabled', true);
                for(var i=0; i<3; i++) {
                    $(inputs[i]).removeAttr('disabled');
                }
            } else if(shape == "Circular") {
                $(inputs[3]).removeAttr('disabled');
                for(var i=0; i<3; i++) {
                    $(inputs[i]).attr('disabled', true);
                }
            }
        }
    });

    var MeasurementsView = new MeasurementsView();
});