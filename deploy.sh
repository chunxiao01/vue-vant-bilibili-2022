# 发生任何错误时终止
###
 # @Author: chunxiao
 # @Github: https://github.com/chunxiao01
 # @Version: V-0.0.1
 # @License: MIT
 # @Date: 2023-02-11 22:15:36
 # @LastEditTime: 2023-02-11 22:16:08
 # @LastEditors: chunxiao
 # @Description:
###
set -e

# 构建
npm run build

# 进入输出产物文件夹
cd dist

# 如果你要部署到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果你要部署在 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# 如果你要部署在 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:chunxiao01/vue-vant-bilibili-2022.git main:gh-pages

cd -


# 执行deploy.sh
# 切换到git bash 命令行 执行 ./deploy.sh
