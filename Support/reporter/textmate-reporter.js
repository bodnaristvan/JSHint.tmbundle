/* jshint node: true */
(function () {
	'use strict';

	var fs = require('fs'),
		Handlebars = require('handlebars'),
		JshintParser = require('./jshint-parser');

	function render(errors, numErrors) {
		var style = fs.readFileSync('./views/textmate-reporter.css', 'utf8'),
			content = fs.readFileSync('./views/textmate-reporter.html', 'utf8'),
			template = Handlebars.compile(content);

		process.stdout.write(template({
			errors: errors,
			numErrors: numErrors,
			style: style
		}));
	}

	module.exports = {
		reporter: function (results) {
			var res = JshintParser.process(results);
			render(res.errors, res.numErrors);
		}
	};
}());