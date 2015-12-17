export PATH := node_modules/.bin:$(PATH)

all:
	browserify src/*.js --outfile bundle.js -t [babelify --presets [ es2015 ] ]
	cp node_modules/bootstrap/dist/css/bootstrap.min.css public/css/
	cp node_modules/bootstrap/dist/fonts/* public/fonts/

pack:
	cd build/ && make

clean:
	rm -rf build/serverspec-generator-*-x64
	rm -rf build/*zip
	rm -rf build/*tar.gz
