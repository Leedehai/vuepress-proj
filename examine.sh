#!/usr/bin/env sh

URL_ROOT='vuepress-proj' # follow the 'base' property in config.js
LOCAL_SITE='docs/.vuepress/dist'

if [ ! -d $LOCAL_SITE ]; then
	echo "[Error] $LOCAL_SITE not found. Did you run ./build.sh?"
	exit 1
fi

echo "Examining the local site at $LOCAL_SITE"
cd $LOCAL_SITE > /dev/null
git log -1 --pretty=%B | head -1 # display the last build's date & time
cd - > /dev/null

printf "URL: \033[4;mhttp://localhost:8001/$URL_ROOT\033[0;m\n"
cd $LOCAL_SITE > /dev/null
ln -s . $URL_ROOT 2> /dev/null  # so that localhost:8001/$URL_ROOT is valid, not committed

if [ $(python -c 'import sys; print(int(sys.version_info.major < 3))') -eq 1 ]; then
	# for Python2
	SIMPLE_HTTP_SERVER=SimpleHTTPServer # Python2
else
	# for Python3.. nasty!
	SIMPLE_HTTP_SERVER=http.server # Python3
fi
python -m $SIMPLE_HTTP_SERVER 8001 2> /dev/null # start server
