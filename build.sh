#!/usr/bin/env sh

if [ $# -ne 0 ]; then
	OPTION=$1
	if [ $# -ne 1 ]; then
		echo "[Error] at most one argument expected, $# given."
		echo "        Use -h option for the help message."
		exit 1
	fi
else
	OPTION=''
fi

if [ "$OPTION" = "-h" ] || [ "$OPTION" = "--help" ]; then
	echo "Build documents website using Vuepress"
	echo "  ./build.sh [option]"
	echo "(no option)      build product site"
	echo "-e | --examine   launch server with examine.sh after"
	echo "                 buidling product site"
	echo "-v | --verbose   print logs while building product site,"
	echo "                 useful in debugging"
	echo "-d | --dev       build dev site and launch dev server, "
	echo "                 with instant update on file changes"
	echo "-h | --help      print this help message and exit"
	exit 0
fi

# check if 'npm install' is needed
function check_modules {
	echo "Checking node modules ..."
	npm outdated
	if [ $? -ne 0 ]; then
		echo "[Error] Node packages missing or outdated, run: npm install"
		exit 1
	fi
}

# dev
if [ "$OPTION" = "-d" ] || [ "$OPTION" = "--dev" ]; then
	echo "Building dev site to docs/.vuepress/dist ..."
	npm run docs
	exit $?
fi

if [ "$OPTION" = "-v" ] || [ "$OPTION" = "--verbose" ]; then
	check_modules
	echo "Building product site to docs/.vuepress/dist ..."
	npm run docs:build
elif [ "$OPTION" = "" ] || [ "$OPTION" = "-e" ] || [ "$OPTION" = "--examine" ]; then
	check_modules
	echo "Building product site to docs/.vuepress/dist ..."
	npm run docs:build > /dev/null 2>&1
else
	echo "[Error] unrecognized option: $OPTION"
	echo "        Use -h option for the help message."
	exit 1
fi

if [ $? -ne 0 ]; then
	echo "[Error] error encountered in: npm run docs:build"
	echo "To have logging info printed, run: ./build.sh -v"
	exit 1
fi

# commit
echo "Committing changes ..."
cd docs/.vuepress/dist > /dev/null # build output directory

echo "This is the gh-pages branch, where the website assets are stored. For files that generated the website, go to the master branch" > README.md

git init > /dev/null
git add -A > /dev/null
DATE=$(date)
git commit -m "built on $DATE" > /dev/null
echo "Built on $DATE"

cd - > /dev/null
echo "To examine on localhost:8001, run: ./examine.sh"
echo "To publish to public website, run: ./publish.sh"

# run local server if needed
if [ "$OPTION" = "-e" ] || [ "$OPTION" = "--examine" ]; then
	echo ""
	./examine.sh
fi
