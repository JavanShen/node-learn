# 开发环境的搭建

## Node.js

直接去[官网](https://nodejs.org/en/)下载安装即可，这里不再赘述

## npm

npm 是包管理工具，这里主要用来安装其它开发中所要用的包，当然你也可以用 yarn 或者 pnpm

## nvm

[nvm](https://github.com/nvm-sh/nvm) 是 node 管理工具，可以让你方便的在不同版本之间切换

> windows 版本：[nvm-windows](https://github.com/coreybutler/nvm-windows)

有以下常用命令：

```shell
# 安装制定版本的node
nvm install xxx
# 安装最新版node
nvm install latest
# 使用指定版本的node
nvm use xxx
# 列出当前管理的版本
nvm list
```

:::warning 错误
使用的时候可能会报`exit status xxx`的错误，需要注意的是安装路径不能有中文和空格，以及要用管理员身份运行终端
:::
