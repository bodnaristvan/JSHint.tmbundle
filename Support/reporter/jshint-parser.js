/**
 * The module transforms standard output of JSHint to a format that can be easily rendered.
 * http://www.jshint.com/docs/reporter/
 */
/* jshint node: true */
(function () {
	'use strict';

	var _ = require('underscore');

	module.exports = {

		/**
		 * Process JSHint results
		 * @params {Object} results JSHint result object
		 * @returns Returns object containing the parsed error list and number of errors
		 */
		process: function (results) {
			// Sort errors by file
			var errors = _.reduce(results, function (memo, result) {
				if (memo[result.file] === undefined) {
					memo[result.file] = [];
				}
				
				memo[result.file].push({
					file: result.file,
					line: result.error.line,
					column: result.error.character,
					message: result.error.reason,
					evidence: (result.error.evidence || '').replace(/^\s\s*/, '').replace(/\s\s*$/, ''),
					source: result.error.raw
				});
				return memo;
			}, {});

			return {
				errors: errors,
				numErrors: results.length
			};
		}
	};
}());