#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# clean
rm -rf .vuepress/dist

# 生成静态文件
npx npm run build

# 进入生成的文件夹
cd .vuepress/dist

# 如果是发布到自定义域名
echo 'hns.ink' > CNAME

git init
git add -A

# commit with note, such as version : `yarn deploy 'V0.1' `
git commit -m "deploy web : $1" 

# 发布到 gh-pages
git push -f git@github.com:HNSInk/HNSInkWeb.git master:gh-pages

cd -