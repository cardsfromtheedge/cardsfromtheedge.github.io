# Setup
* Based on Jekyll, so install Jekyll.
* Install grunt

# Grunt functions

## ingest
Takes data input specified and funnels it into the correct Jekyll directories.
e.g. from a Dropbox directory, or a Google spreadsheet

## watch less
Watches the less directory, compiling the set when changes are detected.

## build
* Compiles less
* Runs `jekyll build`
* Compresses `_site` build directory
  * JS
  * CSS
  * Minify HTML
  * Optimise images
