---
title: Github+PicGO+JsDelivr实现图床
abbrlink: github-picgo-jsdeliver-imgbed
date: 2020-11-10 18:19:23
updated: 2020-11-11 08:00:00
excerpt: 使用github、jsdelivr、picgo打造方便的、全球加速的图床
index_img: https://cdn.jsdelivr.net/gh/zwy99/cdn@master/hexo-img/Github-PicGo-JsDelivr实现图床-2020-12-21-11-09-17.webp
banner_img: https://cdn.jsdelivr.net/gh/zwy99/cdn@master/hexo-img/Github-PicGo-JsDelivr实现图床-2020-12-21-11-09-17.webp
tags: 图床
# categories:
---

## 前言

- 看网上教程用 Hexo + GitHub pages 作为博客后，图床成了下一个问题，本着能白嫖就白嫖的精神，从网上搜了一下图床选择，最终选定为 Github 配合 Jsdelivr 的 CDN 加速

## GitHub 仓库创建

- 首先你需要有一个 Github 账号，怎么注册就不用说了吧~
- 登陆 GitHub 后，点击右上角的 NEW 创建新的仓库

![](https://cdn.jsdelivr.net/gh/zwy99/cdn@master/hexo-img/Github-PicGo-JsDelivr实现图床-2020-12-21-11-38-57.webp)

之后进入到创建页面

![](https://cdn.jsdelivr.net/gh/zwy99/cdn@master/hexo-img/Github-PicGo-JsDelivr实现图床-2020-12-21-11-39-14.webp)

在这个界面中：

① 处填写仓库的名称，自己认识就可以了；

② 处将仓库选为公开的；

③ 处选择添加一个 readme 占位(其他也可)；

④ 处，在 2020 年 10 月后，GitHub 将默认分支名称改为了 main，而不是原来的 master，这会导致之后的图片链接里要加上一个@main，想不想改看你心情~

## GitHub 账号 token 获取

进入账号 setting 界面，选择 Developer settings，然后选择 Personal access tokens，点击生成一个新的 token

![](https://cdn.jsdelivr.net/gh/zwy99/cdn@master/hexo-img/Github-PicGo-JsDelivr实现图床-2020-12-21-11-39-27.webp)

Note 处写一点对于这个 token 的描述，免得以后忘了是啥的

关于权限只选择 repo(仓库)就可以了

![](https://cdn.jsdelivr.net/gh/zwy99/cdn@master/hexo-img/Github-PicGo-JsDelivr实现图床-2020-12-21-11-39-46.webp)

**生成成功的 token 建议复制到别的地方保存一下，你只能看到这个 token 一次！！！**

![](https://cdn.jsdelivr.net/gh/zwy99/cdn@master/hexo-img/Github-PicGo-JsDelivr实现图床-2020-12-21-11-40-04.webp)

## PicGO 配置

打开 PicGO，个人喜欢用 github-plus 这个插件而不是自带的 github 图床，因为这个插件可以同步删除操作

![](https://cdn.jsdelivr.net/gh/zwy99/cdn@master/hexo-img/Github-PicGo-JsDelivr实现图床-2020-12-21-11-40-19.webp)

- repo 处填写你的 GitHub 用户名和刚才创建仓库名，格式为用户名/仓库名

- branch 处填写你的分支名称，在 2020 年 10 月后，新建的仓库分支名默认为 main，具体填什么请自己去仓库看一眼名字！

- token 处就是刚才生成的，只出现一次的 token

- path 处填写你希望保存的路径，例如，你填写了：img/ 那么你上传的照片就会在 仓库/img/ 这个文件夹下

- customUrl 这里可以填也可以不填，不填默认使用 github 地址，本文使用 Jsdelivr 进行加速，那么这里就要写一点东西了

  注意，如果你的分支名称不是 master 而是别的名字比如 main，那么你的仓库名称后面应该加上@分支名，否则会不能正确访问

即：

master 分支：`https://cdn.jsdelivr.net/gh/用户名/仓库名`

其他分支：`https://cdn.jsdelivr.net/gh/用户名/仓库名@分支名`

​

## 完

到此应该就没啥问题了- -速度应该也还是不错的~
