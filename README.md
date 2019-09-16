> 第一次真正使用 react 去做一个小项目，可能有使用的不合理的地方,可以在 issue 中提意见，以下记录了项目实现过程中遇到的问题。

---

### 项目介绍

模仿现在比较火的，淘宝返利公众号的功能，包含订单页面，已付、待反利、已反、已失效，提现页面，提现记录以及登录页。其中部分页面&使用方式参照[react-pxq](https://github.com/bailicangdu/react-pxq)项目,star 数量 6359 很有参考意义

1.使用 react 创建页面 √

2.使用 react-router-dom 实现路由 √

3.使用 props-type 做属性检查 √

4.搭建 mock server 模拟数据请求 √

5.使用 redux 实现状态管理 √

6.使用 Immutable

7.项目中添加异步请求

8.redux 中添加异步请求

<img src="https://github.com/yuanyuanshen/react-submit/blob/master/public/login.png" width="200px"/><img src="https://github.com/yuanyuanshen/react-submit/blob/master/public/order1.png" width="200px"/><img src="https://github.com/yuanyuanshen/react-submit/blob/master/public/nav.png" width="200px"/>

<img src="https://github.com/yuanyuanshen/react-submit/blob/master/public/cashout.png" width="200px"/><img src="https://github.com/yuanyuanshen/react-submit/blob/master/public/cashoutsuccess.png" width="200px"/><img src="https://github.com/yuanyuanshen/react-submit/blob/master/public/cashoutlog.png" width="200px"/>

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

### 项目 UI 组件

使用 [Ant Design](https://ant.design/docs/react/introduce-cn) ，相比原生 Html 能快速搭建页面，更专注于 react 相关技术的学习，其实写的是 app 端的淘宝返利一个小项目，后来发现应该使用 [Ant Design Mobile](https://mobile.ant.design/index-cn) 来做移动端的，不过不要紧，我们的注意力不在页面适配上。

---

### React 开发者工具

下载 chrome 插件，方便 react 项目代码调试

---

### React 类型检查

react 的类型检查 PropTypes 自 React v15.5 起已弃用，请使用[prop-types](https://www.npmjs.com/package/prop-types)

JavaScript 是一门弱类型的语言，允许变量类型做隐式转换。也正是因为这个特性，JavaScript 中有很多错误都是类型错误导致的。为了减少这种错误，我们可以在 React 中引入类型检查模块。

常用的检查类型有一下几种：

```json
// 属性可以声明为 JS 原生类型
optionalArray: PropTypes.array,
optionalBool: PropTypes.bool,
optionalFunc: PropTypes.func,
optionalNumber: PropTypes.number,
optionalObject: PropTypes.object,
optionalString: PropTypes.string,
optionalSymbol: PropTypes.symbol
```

---

### react-redux 状态管理

React-Redux 将所有组件分成两大类：UI 组件（presentational component）和容器组件（container component）。

> UI 组件负责 UI 的呈现，容器组件负责管理数据和逻辑

#### UI 组件

- 只负责 UI 的呈现，不带有任何业务逻辑
- 没有状态（即不使用 this.state 这个变量）
- 所有数据都由参数（this.props）提供
- 不使用任何 Redux 的 API

#### 容器组件

- 负责管理数据和业务逻辑，不负责 UI 的呈现
- 带有内部状态
- 使用 Redux 的 API

#### connect

React-Redux 提供 connect 方法，用于从 UI 组件生成容器组件。connect 的意思，就是将这两种组件连起来。

```js
// CashOut.jsx
import { connect } from 'react-redux'
class CashOut extends Component {}
export default connect(
  state => ({
    cashInfo: state.cashInfo
  }),
  { addToCashList, resetUseMoney }
)(CashOut)
```

为了定义业务逻辑，需要给出下面两方面的信息。

- 输入逻辑：外部的数据（即 state 对象）如何转换为 UI 组件的参数
  eg：cashInfo

- 输出逻辑：用户发出的动作如何变为 Action 对象，从 UI 组件传出去。
  eg： addToCashList resetUseMoney

#### Provider 组件

connect 方法生成容器组件以后，需要让容器组件拿到 state 对象，才能生成 UI 组件的参数。
React-Redux 提供 Provider 组件，可以让容器组件拿到 state。

```js
import { Provider } from 'react-redux'
import store from '@/store/store'

const render = Component => {
  ReactDOM.render(
    //绑定redux、热加载
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root')
  )
}

render(Route)
```

---

### mock server 搭建

使用 mocker-api coss-env

在 webpack-dev-server 的 before 钩子函数中搭建服务器

运行：npm run start-mock

访问：localhost:3000/api/getExtractList 查看数据

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

#### 子组件修改父组件中 state 方法

为了实现需求网上搜到一种，就用在项目中。看到 React 官方文档上提供的【状态提升】温度的例子，也是通过父组件提供函数，以 pros 形式传递给子组件，子组件调用 props 来修改父组件的 state。

父组件代码如下：

```jsx
class CashOut extends Component {
  // 在父组件中定义可以改变state值得函数
  transferVisible(visible) {
    this.setState({
      visible
    })
  }
  // 把transferVisible函数作为属性传递给Dialog子组件上 如 transferVisible
  render() {
    return (
      <div>
        <Dialog
          title="提现成功"
          des="您以提现成功，可到提现记录中查看"
          visible={this.state.visible}
          transferVisible={visible => this.transferVisible(visible)}
        ></Dialog>
      </div>
    )
  }
}
export default CashOut
```

子组件代码如下：

```jsx
class Dialog extends React.Component {
  // 点击确认和取消时 调用props修改父组件state值
  handleCancel = () => {
    this.props.transferVisible(false)
  }
  render() {
    return (
      <div>
        <Modal
          title={this.props.title}
          visible={this.props.visible}
          okText="确认"
          cancelText="取消"
          onOk={this.handleCancel}
          onCancel={this.handleCancel}
        >
          <p>{this.props.des}</p>
        </Modal>
      </div>
    )
  }
}
export default Dialog
```

---

### 参考

1. [create-react-app 工程，如何通过 eject 释放配置文件？](https://newsn.net/say/create-react-app-eject.html)
2. [React-Redux 的用法](https://www.cnblogs.com/williamjie/p/9591961.html)
3. [Redux 官方文档](https://redux.js.org/basics/usage-with-react)
4. [react-redux 工作原理](https://www.jianshu.com/p/fc7470992482)
5. [Immutable 介绍学习](https://www.cnblogs.com/chris-oil/p/8494337.html)
6. [Redux 中文文档](http://cn.redux.js.org/)
7. [前端技术总结 Redux 部分](https://www.kancloud.cn/zhangqh/front/552534)
8. [初学者的 React 全家桶完整实例](https://www.cnblogs.com/demodashi/p/8476741.html)
9. [关于 React 全家桶的介绍](https://blog.csdn.net/stwuyiyu/article/details/86140697)
10. [React 学习系列——prop 和 state](https://juejin.im/post/59e8b74e6fb9a044fd10e135)
11. [react-router 之嵌套路由](https://www.cnblogs.com/ahaowh/articles/8313208.html)
12. [create-react-app 入门教程](https://www.jianshu.com/p/77bf3944b0f4)
13. [react 中使用 prop-types 检测 props 数据类型](https://www.jianshu.com/p/a73fb26c88b5)
14. [react 中文文档](https://www.reactjscn.com/docs/composition-vs-inheritance.html)
15. [react-pxq](https://github.com/bailicangdu/react-pxq)
16. [react + redux 完整的项目，同时写一下个人感悟](https://segmentfault.com/a/1190000007642740)
