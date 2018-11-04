#!/usr/bin/env sh

URL_ROOT='vuepress-proj' # follow the 'base' property in config.js

echo "Examining the site in docs/.vuepress/dist ..."
printf "URL: \033[4;mhttp://localhost:8001/$URL_ROOT\033[0;m\n"
cd docs/.vuepress/dist > /dev/null
ln -s . $URL_ROOT 2> /dev/null  # so that localhost:8001/$URL_ROOT is valid

python -m SimpleHTTPServer 8001 2> /dev/null # start server
