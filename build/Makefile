export PATH := ../node_modules/.bin:$(PATH)

pack:
	electron-packager ../ serverspec-generator --platform=all --arch=x64 --version=0.35.4 --ignore=build/
	zip -r   serverspec-generator-win32-x64.zip     serverspec-generator-win32-x64/
	tar zcvf serverspec-generator-linux-x64.tar.gz  serverspec-generator-linux-x64/
	tar zcvf serverspec-generator-darwin-x64.tar.gz serverspec-generator-darwin-x64/
