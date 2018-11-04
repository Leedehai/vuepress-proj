#!/usr/bin/env sh

URL_ROOT='vuepress-proj' # follow the 'base' property in config.js
UPSTREAM_HOST="https://github.com/Leedehai"
WEBSITE_URL="https://leedehai.github.io/$URL_ROOT"

echo "Push to upstream repo and publish to Internet"
printf " repo: $UPSTREAM_HOST/\033[4;m$URL_ROOT\033[0;m.git\n"
printf " site: $WEBSITE_URL\n"
printf "Content in \033[4;mdocs/.vuepress/dist\033[0;m will be made public to Internet\n"
read -p ">> Confirm to publish to Internet (y/N)? " consent
if [ $consent != 'y' ] && [ $consent != 'Y' ]; then
	echo "aborted."
	exit 1
fi

echo "Publishing the site in docs/.vuepress/dist ..."
cd docs/.vuepress/dist > /dev/null
git remote add origin $UPSTREAM_HOST/$URL_ROOT.git 2> /dev/null
git push -uf origin master
cd - > /dev/null
echo ""
echo "Repo: $UPSTREAM_HOST/$URL_ROOT.git"
echo "Site: $WEBSITE_URL"
