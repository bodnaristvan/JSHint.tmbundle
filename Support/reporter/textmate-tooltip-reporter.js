/* jshint node: true */
(function () {
	'use strict';

	var fs = require('fs'),
		Handlebars = require('handlebars'),
		_ = require('underscore'),
		JshintParser = require('./jshint-parser');

	function render(errors, numErrors) {
		var content = fs.readFileSync('./views/textmate-tooltip-reporter.html', 'utf8'),
			template = Handlebars.compile(content),
			trimErrors = function (error, file) {
				return [file, error.slice(0, 5)];
			};

		process.stdout.write(template({
			// only return the first 5 errors for each file
			errors: _.object(_.map(errors, trimErrors)),
			numErrors: numErrors
		}));
	}

	module.exports = {
		reporter: function (results) {
			var res = JshintParser.process(results);
			render(res.errors, res.numErrors);
		}
	};
}());
