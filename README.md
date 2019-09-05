> 第一次真正使用 react 去做一个小项目，可能有使用的不合理的地方,可以在 issue 中提意见，以下记录了项目实现过程中遇到的问题。

---

### 项目介绍

模仿现在比较火的，淘宝返利公众号的功能，包含订单页面，已付、待反利、已反、已失效，提现页面，提现记录以及登录页。其中部分页面&使用方式参照[react-pxq](https://github.com/bailicangdu/react-pxq)项目,star 数量 6359 很有参考意义

---

### 项目使用

#### `npm start`

在开发环境运行

浏览器打开[http://localhost:3000](http://localhost:3000)可访问

#### `npm run build`

将工程打包到 build 目录下

#### `npm run eject`

create-react-app 本身的 webpack 配置文件存在于 node_modules/react-scripts/目录下面，但是这个目录是 node_modules/，里面的源码都是不建议修改的。create-react-app 提供了 eject 命令，用于释放这些配置。

而且 create-react-app 并不推荐大家这么做，因为这个步骤无法逆转！

npm run eject 之后，react-scripts 命令就失效了哦。因为在 node_modules/下面，都没有 react-scripts/的目录了，它以另外的形式存在于这个项目里面了。

---

### 问题记录

#### 函数传参数保留 event

```html
<p className="my-drawer" onClick={this.goTo.bind(this,'/home')} >首页</p>
```

```js
  goTo (path,e){
    this.setState({
      visible: false,
    });
    this.props.history.push(path)
  };
```

---

### 参考

1. [create-react-app 工程，如何通过 eject 释放配置文件？](https://newsn.net/say/create-react-app-eject.html)
