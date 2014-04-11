JSHint.tmbundle
===============

This is a TextMate 2 JSHint plugin using the npm package version of JSHint.

![Screenshot of JSHint.tmbundle running in TextMate](http://f.cl.ly/items/1G3X0o3x0z0D2d323T3x/Screen%20Shot%202013-11-14%20at%201.27.33%20AM.png)

Originally forked from the [JSHint.tmbundle by oost](https://github.com/oost/JSHint.tmbundle) to make a few bugfixes, but ended up creating a full rewrite instead.

[jslintmate]: https://github.com/rondevera/jslintmate
[jshint.tmbundle]: https://github.com/oost/JSHint.tmbundle
[jshint]: http://www.jshint.com

### Installation ###

**Requirements:** 

- [Node.js][nodejs]
- [TextMate 2][textmate] 

[nodejs]: http://www.nodejs.org
[textmate]: https://github.com/textmate/textmate

**Installation:**

1.  Clone the repository `git clone git://github.com/bodnaristvan/JSHint.tmbundle.git`.
2.  Go to the directory `cd JSHint.tmbundle`.
3.  Run `make`
4.  Run `open .` in the same directory to install the bundle

### Configuration ###

The bundle will use the first JSHint configuration file found in the following sequence of directories:

1. Local `.jshintrc` or ../. , ../../. , ../../../.
2. `$HOME/.jshintrc`
3. `${TM_PROJECT_DIRECTORY}/.jshintrc`
4. `${TM_JSHINT_CONFIG}`
5. Default `.jshintrc` provided with the bundle

### Presentation ###

By default, Textmate2 shows any bundle output in a popup window, but also supports a sidebar as shown in the screenshot above.

To switch to using sidebar..

`defaults write com.macromates.TextMate.preview htmlOutputPlacement right`

Or switch back to window

`defaults write com.macromates.TextMate.preview htmlOutputPlacement window`

