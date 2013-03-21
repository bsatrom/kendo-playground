# Q1 2013 Release Demo Script

## Outline

1. PHP and JSP Helpers - DONE


2. New Kendo UI Framework Features - DONE

	### Features
	- RJS Support (Demo Snippet & Link to Getting Started Doc) - DONE: Use Snippet from recording & Doc Link
	
	- SPA Prototype (Demo Snippet w/ JSBin & Link to Getting Started Doc) - DONE: Use Snippet from recording and Doc Link

2. What's new in Kendo UI Web - DONE
	### Widgets
	
	- Multi-select widget (Demo w/ JSBin) - DEMO DONE
	
	- ColorPicker (Demo w/ JSBin) - DEMO DONE
	
	- Tooltip (Demo w/ JSBin) - DEMO DONE
	

3. What's new in Kendo UI DataViz - DONE
	### Charts
	- Sparklines (Demo w/ JSBin) - DEMO DONE

	- Bulletgraph (Demo w/ JSBin) - DEMO DONE

	### Features
	- Interactive feature polish (**what should I say specifically?**)
		- Crosshairs - [Kendo Demo](http://kendobuild/staging/dataviz/scatter-charts/index.html)
		- Stock Chart Virtualization - [Kendo Demo](http://kendobuild/staging/dataviz/financial/virtualization.html)
		- Custom Pan and Zoom - [Kendo Demo Scatter](http://kendobuild/staging/dataviz/scatter-charts/pan-and-zoom.html) | [Kendo Demo Bars](http://kendobuild/staging/dataviz/bar-charts/pan-and-zoom.html)

4. What's new in Kendo UI Mobile
	### Features
	- Windows Phone 8 UI Support - DONE: Use Screens from Burke's sample (sent an email)

	- ListView Filtering - DONE, use this code sample below...

	var dataSource = new kendo.data.DataSource({
		pageSize: 12,
		serverPaging: true,
		serverFiltering: true,
		transport: {
			read: {
				url: "http://search.twitter.com/search.json", 
				dataType: "jsonp"
			},
			parameterMap: function(options) {
 				var filter = options.filter ? options.filter.filters[0].value : "#kendoui";
				var parameters = {
					q: filter, 
					rpp: options.pageSize,
					page: options.page 
				}

				return parameters;
			}
		},
		schema: {
			data: "results" 
		}
	});

	$("#listView").kendoMobileListView({
		dataSource: dataSource,
		template: $("#itemTemplate").text(),
		filterable: true,
		endlessScroll: true,
		scrollTreshold: 30 
	});

5. What else?
	### Features
	- Kendo UI Labs - Description here and highlight AngularJS and Breeze