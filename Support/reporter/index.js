var jshint = require('jshint/src/cli');

/*
 * JSHint renderer does not receive the command line arguments that JSHint has received,
 * so we parse out the options passed to JSHint to share them with the renderer.
 */
var config = require('./config');
var args = [].concat(process.argv);
for (var ic = args.length, i = 0; i < ic; ++i) {
	if (args[i] === '--config') {
		// Config file name follows the --config option:
		config.configFile = args[i+1];
	}
	if (i === ic-1) {
		// Target file comes the last:
		config.targetFile = args[i];
	}
}

jshint.interpret(args);