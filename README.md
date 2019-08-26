# react-learn

学习react做demo演示使用
1. react基本应用
2. redux应用
3. 案例

## Available Scripts

在这个项目中你可以运行一下命令来运行项目:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Component中的文件的作用

1. LifeRound  演示的是生命周期
2. Contact  演示的是父子组件之间的传值和方法的控制
3. IfElseMap  演示的是if...else...和map在jsx中的使用
4. FormSubmit  演示的是form表单
5. Shopping  购物车案例
6. Tab和NavLink  路由跳转演示

## react中的onClick和html中的onclick区别
html中的onclick      
1. html中使用onclick是全局的，容易污染环境
2. onclick属于一部的，存储在计算机内存中，定义的越多，内存消耗越大，性能越差
3. 对于使用onclick的DOM元素，如果要动态地从DOM树中删掉的话，需要把对应的时间处理器注销，假如忘了注销，就可能造成内存泄露，这样的bug很难被发现。      
上面说的这些问题，在JSX中onClick都不存在。      
1. onClick挂载的每个函数，都可以控制在组件范围内，不会污染全局空间。
2. 我们在JSX中看到一个组件使用了onClick，但并没有产生直接使用onclick（注意是onclick不是onClick）的HTML，而是使用了事件委托（eventdelegation）的方式处理点击事件，无论有多少个onClick出现，其实最后都只在DOM树上添加了一个事件处理函数，挂在最顶层的DOM节点上。所有的点击事件都被这个事件处理函数捕获，然后根据具体组件分配给特定函数，使用事件委托的性能当然要比为每个onClick都挂载一个事件处理函数要高。

## 理解和使用Promise.all和Promise.race
### 1、Pomise.all的使用
解释:     
Promise.all可以将多个Promise实例包装成一个新的Promise实例。同时，成功和失败的返回值是不同的，成功的时候返回的是一个结果数组，而失败的时候则返回最先被reject失败状态的值。     
作用：      
Promse.all在处理多个异步处理时非常有用，比如说一个页面上需要等两个或多个ajax的数据回来以后才正常显示，在此之前只显示loading图标。       
代码示例：      
```
  promiseHandel() {
    console.log(2)
    let p1 = new Promise((resolve, reject) => {
      this.$http.get('/mock/goods/getGoodsList').then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
    let p2 = new Promise((resolve, reject) => {
      this.$http.get('/mock/user/getUserList').then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
    Promise.all([p1, p2]).then(res=>{
      console.log("Promise.all res:", res)
    }).catch(err=>{})
  }
```