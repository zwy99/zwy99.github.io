---
title: code-runner插件快速更改python解释器
abbrlink: a95d65d2
date: 2020-12-15 17:21:08
updated: 2020-12-15 17:21:08
excerpt: 如何快速更改code-runner插件使用不同的python解释器
index_img: https://cdn.jsdelivr.net/gh/zwy99/cdn/imgbed/code-runner插件快速更改python解释器-2020-12-21-13-10-23.webp
# banner_img:
tags: [VSCode, 教程]
# categories:
---

## 前言

- 因为我个人使用 conda 来管理虚拟环境，有的时候用不同环境下的解释器去运行 python 脚本。我们都知道更改 code-runner 插件里的`code-runner.executorMap`这个选项中的`python`的路径就可以更换不同的解释器，但是来回手改实在是麻烦。

![](https://cdn.jsdelivr.net/gh/zwy99/cdn/imgbed/code-runner插件快速更改python解释器-2020-12-21-13-19-46.webp)

- 网上查了查资料[^1]，发现按照下面步骤做就行了~

## 安装 python 插件

首先得安装 python 的插件，我相信大家都有~
![](https://cdn.jsdelivr.net/gh/zwy99/cdn/imgbed/code-runner插件快速更改python解释器-2020-12-21-13-14-04.webp)

安装这个插件之后，我们打开一个 py 文件时，左下角会显示当前的解释器，点击也可以进行选择。

![](https://cdn.jsdelivr.net/gh/zwy99/cdn/imgbed/code-runner插件快速更改python解释器-2020-12-21-13-14-23.webp)

![](https://cdn.jsdelivr.net/gh/zwy99/cdn/imgbed/code-runner插件快速更改python解释器-2020-12-21-13-10-53.webp)

当我们选择了一个解释器后，根目录会出现一个`.vscode`文件夹，里面有一个`settings.json`文件，其中会显示当前所选择的解释器

![](https://cdn.jsdelivr.net/gh/zwy99/cdn/imgbed/code-runner插件快速更改python解释器-2020-12-21-13-14-41.webp)

## 更改全局设置

打开设置：点击左下角小齿轮-->设置-->右上角切换为 json 格式

将`"code-runner.runInTerminal"`所对应的值改为`true`（没有的自行添加）
这一步是让 code-runner 在终端输出。

再将`"code-runner.executorMap"`中`python`的所对应的值改为`"\"$pythonPath\" $fullFileName"`（没有的自行添加），即使用 pythonPath 的值，所以当我们切换解释器的时候，code-runner 所用的解释器也会随之更换。加两个双引号是防止路径中含有空格导致出错。$fullFileName 就是我们当前 py 文件的路径，此时就大功告成了~

## 总结

也就是说，最后设置多加了这两句话

```JSON
"code-runner.runInTerminal": true,
"code-runner.executorMap": {
    "python": "\"$pythonPath\" $fullFileName"
}
```

之后我们在左下角选择不同版本的解释器后，code-runner 插件所使用的解释器也会同步变化了

## 额外插一句

```JSON
"code-runner.fileDirectoryAsCwd": true,
```

这个选项可以执行脚本的时候先进入文件所在的文件夹，我个人比较喜欢~

## 参考资料

[^1]: [VS code 中 Code Runner 插件的 Python 路径配置方法 | TechNest](https://stella_l.gitee.io/technest/2020/01/06/Python/VS%20code%E4%B8%ADCode%20Runner%E6%8F%92%E4%BB%B6%E7%9A%84Python%E8%B7%AF%E5%BE%84%E9%85%8D%E7%BD%AE%E6%96%B9%E6%B3%95/)
