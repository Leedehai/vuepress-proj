#!/usr/bin/env sh

URL_ROOT='vuepress-proj' # follow the 'base' property in config.js
LOCAL_SITE='docs/.vuepress/dist'
UPSTREAM_HOST="https://github.com/Leedehai"
WEBSITE_URL="https://leedehai.github.io/$URL_ROOT"

if [ ! -d $LOCAL_SITE ]; then
	echo "[Error] $LOCAL_SITE not found. Did you run ./build.sh?"
	exit 1
fi

echo "Push to upstream repo and publish to Internet"
cd $LOCAL_SITE > /dev/null
git log -1 --pretty=%B | head -1 # display the last build's date & time
cd - > /dev/null
printf " repo: $UPSTREAM_HOST/\033[4;m$URL_ROOT\033[0;m.git, branch: gh-pages\n"
printf " site: $WEBSITE_URL\n"
printf "Content in \033[4;mdocs/.vuepress/dist\033[0;m will be made public to Internet\n"
read -p ">> Confirm to publish to Internet (y/N)? " consent
if [ $consent != 'y' ] && [ $consent != 'Y' ]; then
	echo "aborted."
	exit 1
fi

echo "Publishing the site in $LOCAL_SITE ..."
echo ""
cd $LOCAL_SITE > /dev/null
git remote add origin $UPSTREAM_HOST/$URL_ROOT.git 2> /dev/null
git push -uf origin master:gh-pages
cd - > /dev/null
echo ""
echo "Repo: $UPSTREAM_HOST/$URL_ROOT.git, branch: gh-pages"
echo "Site: $WEBSITE_URL"
