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

7.项目中添加异步请求 √

8.redux-thunk 中间件使用 √

<img src="https://github.com/yuanyuanshen/react-submit/blob/master/public/login.png" width="240px"/> <img src="https://github.com/yuanyuanshen/react-submit/blob/master/public/order1.png" width="240px"/> <img src="https://github.com/yuanyuanshen/react-submit/blob/master/public/nav.png" width="240px"/>

<img src="https://github.com/yuanyuanshen/react-submit/blob/master/public/cashout.png" width="240px"/> <img src="https://github.com/yuanyuanshen/react-submit/blob/master/public/cashsuccess.png" width="240px"/> <img src="https://github.com/yuanyuanshen/react-submit/blob/master/public/cashoutlog.png" width="240px"/>

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

### axios 异步请求

src 下新建 api 文件

```
|-src
|-|-api
|-|-|-api.js // 用来写接口
|-|-|-server.js // 是对axios的封装
```

server.js

axios 中文文档 查看 axios 配置项

```js
import axios from 'axios'

const TIMEOUT = 30000 // 设置超时时间

export default class Server {
  axios(method, url, params) {
    return new Promise((resolve, reject) => {
      if (typeof params !== 'object') params = {}
      const _option = {
        method,
        url,
        baseURL: 'http://localhost:3002',
        timeout: TIMEOUT,
        params: null,
        data: null,
        headers: null,
        withCredentials: true, //是否携带cookies发起请求
        validateStatus: status => {
          return status >= 200 && status < 300
        },
        ...params
      }
      axios.request(_option).then(
        res => {
          resolve(
            typeof res.data === 'object' ? res.data : JSON.parse(res.data)
          )
        },
        error => {
          if (error.response) {
            reject(error.response.data)
          } else {
            reject(error)
          }
        }
      )
    })
  }
}
```

api.js

```js
import Server from './server'

class API extends Server {
  async getExtractList(data = {}) {
    try {
      let result = await this.axios('post', '/api/getExtractList', data)
      return result
    } catch (err) {
      throw err
    }
  }
}

export default new API()
```

---

### redux-thunk

一个关键问题没有解决：异步操作怎么办？Action 发出以后，Reducer 立即算出 State，这叫做同步；Action 发出以后，过一段时间再执行 Reducer，这就是异步。

怎么才能 Reducer 在异步操作结束后自动执行呢？这就要用到新的工具：中间件（middleware）。

Redux 的核心概念其实很简单：将需要修改的 state 都存入到 store 里，发起一个 action 用来描述发生了什么，用 reducers 描述 action 如何改变 state tree 。创建 store 的时候需要传入 reducer，真正能改变 store 中数据的是 store.dispatch API。

```js
import { createStore, combineReducers, applyMiddleware } from 'redux'
import * as cashout from './cashout/reducer'
import thunk from 'redux-thunk'

let store = createStore(
  combineReducers({ ...cashout }),
  applyMiddleware(thunk) // 使用中间件
)

export default store
```

store/action.js

```js
// 获取提现记录列表，保存至redux
export const getCashList = () => {
  return async dispatch => {
    try {
      const value = await API.getCashList()
      // 通过dispatch来更新store
      dispatch({
        type: GETCASHLIST,
        value,
        initLoading: false
      })
    } catch (err) {
      console.error(err)
    }
  }
}
```

---

### 问题记录

#### 1.函数传参数保留 event

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

#### 2.子组件修改父组件中 state 方法

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

#### 3.跨域请求预检

在我的订单中，已付、待反 4 个 Tab 页面请求都会发送两次

（1）Request Method: OPTIONS
（2）Request Method: POST

跨域分为:

**1.简单跨域**
**2.复杂跨域**:复杂跨域会进行预检

复杂跨域在发送真正的请求前, 会先发送一个方法为 OPTIONS 的预请求(preflight request), 用于试探服务端是否能接受真正的请求，如果 options 获得的回应是拒绝性质的，比如 404\403\500 等 http 状态，就会停止 post、put 等请求的发出。

有三种方式会导致这种现象：

- 请求方法不是 GET/HEAD/POST
- POST 请求的 Content-Type 并非 application/x-www-form-urlencoded, multipart/form-data, 或 text/plain
- 请求设置了自定义的 header 字段

我的项目中出现这种情况是因为使用 POST 请求，Content-Type 设置了 application/json

解决方法：

（1）POST 请求，Content-Type 设置 application/x-www-form-urlencoded
（2）使用 qs 对 object 进行转换

#### 4.修改 store 中 state 视图不更新

在 store/cashout/reducer.js 中

```js
export const cashInfo = (state = defaultState, action = {}) => {
  switch (action.type) {
    case GETCASHLIST:
      state.cashList = [...action.value]
      state.initLoading = action.initLoading
      return state // 这样写 dispatch 后视图是不更新的 因为没有返回新的对象
    case ADDTOCASHLIST:
      state.cashList.unshift(action.value)
      return state
    case RESETUSEMONEY:
      state.usefulMoney = action.value
      return state
    default:
      return state
  }
}
```

修改为

```js
export const cashInfo = (state = defaultState, action = {}) => {
  switch (action.type) {
    case GETCASHLIST:
      state.cashList = [...action.value]
      state.initLoading = action.initLoading
      return { ...state } // 修改后可触发视图的更新
    default:
      return state
  }
}
```

与 React 推崇的 immutability 有关。

在 React 中，通过“有变化，就一定返回一个新对象；没变化，原对象不做变化直接返回”的原则，永远可以通过判断“新旧变量是否对同一内存内容的引用”来侦测变化，效率上比 deepwatch 高得多。

react 创建新的状态对象的关键是，避免直接修改原对象的方法，而是返回一个新对象。也就是说 react 的 state 里面的引用类型，更改时必须赋予一个新对象，也就是引用地址必须要变。 为什么 React 推荐组件的状态是不可变对象呢？一方面是因为不可变对象方便管理和调试。另一方面是出于性能考虑，当对象组件状态都是不可变对象时，我们在组件的 shouldComponentUpdate 方法中，仅需要比较状态的引用就可以判断状态是否真的改变，从而避免不必要的 render 调用。当我们使用 React 提供的 PureComponent 时，更是要保证组件状态是不可变对象，否则在组件的 shouldComponentUpdate 方法中，状态比较就可能出现错误，因为 PureComponent 执行的是浅比较（比较对象的引用）

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
17. [使用 immutable 优化 React](https://segmentfault.com/a/1190000010438089)
18. [Redux 中间件之 redux-thunk 使用详解](https://www.jianshu.com/p/a27ab19d3657)
19. [Redux 入门教程（二）：中间件与异步操作](https://www.cnblogs.com/chaoyuehedy/p/9713167.html)
20. [为什么 React 中 this.state 不要直接修改，而是创建新的副本](https://blog.csdn.net/yeyuedulangcy/article/details/84902623)
21. [react 更新 state 的时候要返回一个全新的引用或者值](https://blog.csdn.net/weixin_34080903/article/details/91378174)
