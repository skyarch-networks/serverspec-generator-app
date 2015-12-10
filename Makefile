export PATH := node_modules/.bin:$(PATH)

all:
	browserify src/*.js --outfile bundle.js -t [babelify --presets [ es2015 ] ]
