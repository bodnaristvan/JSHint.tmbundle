JSHint.tmbundle
===============

This is a TextMate 2 JSHint plugin using the npm package version of JSHint.

Note: since JSHint stopped caring about style issues, I've decided to create a more generic javascript hinter bundle, that uses both JSHint and JSCS. The project is called [JavascriptHinter.tmbundle](https://github.com/bodnaristvan/JavascriptHinter.tmbundle), it uses the system installed version of jshint and jscs, and displays hint warnings in the gutter, supported by TextMate in the latest beta versions. I've tried to keep the functionality of this project to make switching as painless as possible, but let me know if you run into troubles using the new one!

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
5.  If you run into problems with node not found while running the plugin, check out this comment: https://github.com/bodnaristvan/JSHint.tmbundle/issues/1#issuecomment-42533685

### Configuration ###

Bundle will use the .jshintrc location set in `${TM_JSHINT_CONFIG}`, or look for it in the following places:

 - directory of currently opened file and all parent directories until one is found
 - `${HOME}/.jshintrc`
 - default jshintrc provided with the bundle
 
### Presentation ###

By default, Textmate2 shows any bundle output in a popup window, but also supports a sidebar as shown in the screenshot above.

To switch to using sidebar..

`defaults write com.macromates.TextMate.preview htmlOutputPlacement right`

Or switch back to window

`defaults write com.macromates.TextMate.preview htmlOutputPlacement window`

