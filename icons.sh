#!/usr/bin/env sh

# upload 'x.ico.svg' with backgroud and path of '/images/icons/':https://realfavicongenerator.net
# get URLfile.zip : https://realfavicongenerator.net/files/.../favicon_package_v0.16.zip
# Usage : yarn icons URLfile.zip

set -e
mkdir -p .vuepress/public/images/icons
cd .vuepress/public/images/icons

wget $1 -O icons.zip
unzip icons.zip
rm -rf icons.zip

mv favicon.ico ../../ 