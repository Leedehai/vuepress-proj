#!/usr/bin/env sh

if [ $# -ne 0 ]; then
	OPTION=$1
else
	OPTION=''
fi

if [ "$OPTION" = "-h" ] || [ "$OPTION" = "--help" ]; then
	echo "Build documents inside docs/ using vuepress"
	echo "-h | --help:    print this help message and exit"
	echo "-v | --verbose: print logs while building"
	echo "-e | --examine: run examine.sh after buidling"
	exit 0
fi

# check if 'npm install' is needed
echo "Checking node modules ..."
npm outdated
if [ $? -ne 0 ]; then
	echo "[Error] Node packages missing or outdated, run: npm install"
	exit 1
fi

# abort on errors
# set -e

# build
echo "Building site to docs/.vuepress/dist ..."
if [ "$OPTION" = "-v" ] || [ "$OPTION" = "--verbose" ]; then
	npm run docs:build
else
	npm run docs:build > /dev/null 2>&1
fi

if [ $? -ne 0]; then
	echo "Error encountered."
	echo "To have logging info printed, run: ./build.sh -v"
fi

echo "Committing changes ..."
# navigate into the build output directory
cd docs/.vuepress/dist > /dev/null

git init > /dev/null
git add -A > /dev/null
DATE=$(date)
git commit -m "built on $DATE" > /dev/null

echo "Built on $DATE"

cd - > /dev/null
echo "To examine on localhost:8001, run: ./examine.sh"
echo "To publish to public website, run: ./publish.sh"

if [ "$OPTION" = "-e" ] || [ "$OPTION" = "--examine" ]; then
	echo ""
	./examine.sh
fi