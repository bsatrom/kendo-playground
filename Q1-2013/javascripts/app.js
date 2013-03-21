var ProjectsApp = ProjectsApp || {};

(function($, kendo) {
	
	// Sparklines Data
	var completedData = [
        20, 25, 25, 40, 50, 10, 0, 1, 2, 3,
        5, 6, 10, 11, 22, 70, 10, 15, 15, 15,
        14, 17, 18, 19, 20, 22, 23, 22, 25, 26,
        26, 27, 28, 25, 30, 33, 36, 40, 41, 46
    ];
    var createdData = [
        100, 99, 98, 99, 123, 88, 87, 86, 85, 84,
        84, 87, 84, 76, 75, 70, 73, 71, 74, 68,
        65, 63, 60, 58, 56, 54, 52, 51, 25, 26,
        26, 27, 28, 25, 30, 33, 36, 40, 41, 46
    ];

    // BulletGraphs Data
    var goalCompleted = [ 25, 15 ];
    var goalCreated = [ 7, 56 ];

    // Multiselct Data
    categories = [
		{ value: "1", text: "Fun"},
		{ value: "2", text: "Work"},
		{ value: "3", text: "Team-Building"},
		{ value: "4", text: "Personal"},
		{ value: "5", text: "Play"}
    ];

    //Kendo SPA 

    // Create a layout
	var layout = new kendo.Layout($('#mainLayout').html());
	layout.render($("#spaContainer"));

	// Define Views
	var multiselectView = new kendo.View("multiselectView");
	var sparklinesView = new kendo.View("sparklinesView");
	var bulletgraphView = new kendo.View("bulletgraphView");
	var tooltipView = new kendo.View("tooltipView");

	// Router and Routes (q108)
	var router = new kendo.Router();
	
	router.route("/", function() {
		layout.showIn('#display', multiselectView);
	});

	router.route("/multiselect", function() {
		layout.showIn('#display', multiselectView);
	});

	router.route("/sparklines", function() {
		layout.showIn('#display', sparklinesView);
	});

	router.route("/bulletgraph", function() {
		layout.showIn('#display', bulletgraphView);
	});

	router.route("/tooltip", function() {
		layout.showIn('#display', tooltipView)
	});
	router.start();

	// Sparklines
	$('#completed-week').kendoSparkline(completedData);
	$("#created-week").kendoSparkline({
        type: "column",
        data: createdData,
        tooltip: {
            format: "{0} new issues"
        }
    });

    //Bullet Graphs
    $("#goal-completed").kendoChart({
        series: [{
            type: "bullet",
            data: [30, 60]
        }],
        valueAxis: [{
            plotBands: [{
                from: 0, to: 30, color: "red", opacity: 0.3
            }, {
                from: 30, to: 60, color: "yellow", opacity: 0.3
            }, {
                from: 60, to: 150, color: "green", opacity: 0.5
            }],
            majorGridLines: {
                visible: false
            },
            min: 0,
            max: 150
        }]
    });

    $("#goal-new").kendoChart({
        series: [{
            type: "bullet",
            data: [30, 20]
        }],
        valueAxis: [{
            plotBands: [{
                from: 0, to: 20, color: "green", opacity: 0.5
            }, {
                from: 20, to: 30, color: "yellow", opacity: 0.3
            }, {
                from: 30, to: 50, color: "red", opacity: 0.3
            }],
            majorGridLines: {
                visible: false
            },
            min: 0,
            max: 50
        }]
    });

    // Create Multi-select
    $('#categories').kendoMultiSelect({
		dataTextField: "text",
		dataValueField: "value",
		dataSource: categories
    });

    // Create Color-Picker
    $("#priority").kendoColorPicker({
        palette: "ff0000,ffff00,00ff00,0000f9"
    });

    // Create Tooltip
    $("#projectsList").kendoTooltip({ 
		filter: "span",
		position: "bottom",
		width: 200
	});

    kendo.bind(document.body.children);

}($, kendo));