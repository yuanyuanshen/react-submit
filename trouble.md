> 第一次真正使用 react 去做一个小项目，可能有使用的不合理的地方,可以在 issue 中提意见，以下记录了项目实现过程中遇到的问题。

---

#### 项目介绍

模仿现在比较火的，淘宝返利公众号的功能，包含订单页面，已付、待反利、已反、已失效，提现页面，提现记录以及登录页。其中部分页面&使用方式参照[react-pxq](https://github.com/bailicangdu/react-pxq)项目,star 数量 6359 很有参考意义

#### 问题记录

##### 函数传参数保留 event

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
