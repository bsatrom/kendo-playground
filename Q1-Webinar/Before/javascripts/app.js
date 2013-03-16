var ProjectsApp = ProjectsApp || {};

(function($, kendo, moment) {
	var projectsList, projectsContainer, hiddenContainer, 
		projects, ds, template, categories;

	projectsList = $('#projectsList');
	projectsContainer = $('#projectsContainer');
	newContainer = $('#newContainer');
	reportsContainer = $('#projectReports');

	projects = ProjectsApp.projects;

	categories = [ "Fun", "Team Building", "Personal", "Work"];
	ProjectsApp.catsSource = new kendo.data.DataSource({ data: categories });

	ds = new kendo.data.DataSource({ data: projects });
	template = kendo.template($('#projectItemTemplate').html());

	projectsList.kendoListView({
		template: template,
		dataSource: ds
	});
	ds.read();

	$('a[href="#/new"]').on('click', function(e) {
		e.preventDefault();

		projectsContainer.addClass("hidden");
		newContainer.removeClass("hidden");
	
		$('.cancel, .save').on('click', function(e) {
			e.preventDefault();
						
			newContainer.addClass("hidden");
			projectsContainer.removeClass("hidden");
		});
	});

	// New DataViz Charts
	$('a[href="#/reports"]').on('click', function(e) {
		e.preventDefault();

		projectsContainer.addClass("hidden");
		newContainer.addClass("hidden");
		reportsContainer.removeClass("hidden");
	});

	// Create Charts
	// Sparklines (q101)	

    //Bullet Graphs (q102)
    

	kendo.bind(document.body.children);

}($, kendo, moment));