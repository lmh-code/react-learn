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

## 一、Component中的文件的作用

0. Utils文件夹定义了一些常用工具类
1. LifeRound  演示的是生命周期
2. Contact  演示的是父子组件之间的传值和方法的控制
3. IfElseMap  演示的是if...else...和map在jsx中的使用
4. FormSubmit  演示的是form表单
5. Shopping  购物车案例
6. Tab和NavLink  路由跳转演示
7. UseMock  mock.js的使用   async...await...函数的使用  Promise.all()的使用
8. Login  使用公司接口测试了一下自己二次封装的axios的使用（登录）

## 二、react中的onClick和html中的onclick区别
html中的onclick      
1. html中使用onclick是全局的，容易污染环境
2. onclick属于一部的，存储在计算机内存中，定义的越多，内存消耗越大，性能越差
3. 对于使用onclick的DOM元素，如果要动态地从DOM树中删掉的话，需要把对应的时间处理器注销，假如忘了注销，就可能造成内存泄露，这样的bug很难被发现。      
上面说的这些问题，在JSX中onClick都不存在。      
1. onClick挂载的每个函数，都可以控制在组件范围内，不会污染全局空间。
2. 我们在JSX中看到一个组件使用了onClick，但并没有产生直接使用onclick（注意是onclick不是onClick）的HTML，而是使用了事件委托（eventdelegation）的方式处理点击事件，无论有多少个onClick出现，其实最后都只在DOM树上添加了一个事件处理函数，挂在最顶层的DOM节点上。所有的点击事件都被这个事件处理函数捕获，然后根据具体组件分配给特定函数，使用事件委托的性能当然要比为每个onClick都挂载一个事件处理函数要高。

## 三、理解和使用Promise.all和Promise.race
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
### 2、Promise.race的使用
解释：      
顾名思义，Promse.race就是赛跑的意思，意思就是说，Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。      
代码示例：      
```
  let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success')
    },1000)
  })

  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('failed')
    }, 500)
  })

  Promise.race([p1, p2]).then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log(error)  // 打开的是 'failed'
  })
```

## 四、理解和使用Promise、generator和async
### 1、promise来读取文件
代码示例：      
```
  const fs = require('fs')
  const readFile = (fileName) => {
    return new Promise((resolve, reject) => {
      fs.readFile(fileName, (err, data) => {
        if(err) {
          reject(err)
        }else {
          resolve(data)
        }
      })
    })
  }
  // readFile('1.txt').then(res=>{
  //   console.log(res.toString());
  // })
  // readFile('2.txt').then(res=>{
  //   console.log(res.toString());
  // })
  // readFile('3.txt').then(res=>{
  //   console.log(res.toString());
  // })
  // 或者
  readFile('1.txt').then(res => {
    console.log(res.toString());
    return readFile('2.txt'); // 返回新的数据，然后输出
  }).then(res => {
    console.log(res.toString());
    return readFile('3.txt'); // 返回新的数据，然后输出
  }).then(res => {
    console.log(res.toString())
  })
```
输出正常，因为读取多个文件一般都会作为一个异步来处理，这样就不会阻塞程序的运行，把fs封装成一个Promise对象，然后在下面返回数据输出。
### 2、generator函数读取文件
代码示例：     
```
  const fs = require("fs");
  const read = function(fileName){
      return new Promise((resolve,reject)=>{
          fs.readFile(fileName,(err,data)=>{
              if (err) {
                  reject(err);
              } else{
                  resolve(data);
              }
          });
      });
  };
  function * show(){
      yield read('1.txt');
      yield read('2.txt');
      yield read('3.txt');
  }
  const s = show();
  s.next().value.then(res => {
      console.log(res.toString());
      return s.next().value;
  }).then(res => {
      console.log(res.toString());
      return s.next().value;
  }).then(res => {
      console.log(res.toString());
  });
```
依然用node运行即可，这种方式代码量又高了不少，和Promise方式特别像，只不过是把读取文件的信息放在了外面，在下面依次手动调用，特别麻烦。

### 3、async函数读取文件
代码示例：     
```
  const fs = require("fs");
  const read = function(fileName){
      return new Promise((resolve,reject)=>{
          fs.readFile(fileName,(err,data)=>{
              if (err) {
                  reject(err);
              } else{
                  resolve(data);
              }
          });
      });
  };
  async function readByAsync(){
      let a1 = await read('1.txt');
      let a2 = await read('2.txt');
      let a3 = await read('3.txt');
      console.log(a1.toString());
      console.log(a2.toString());
      console.log(a3.toString());
  }
  readByAsync();
```
这个函数和generator函数有些类似，从例子中可以看得出来，async函数在function前面有个async作为标识，意思就是异步函数，里面有个await搭配使用，每到await的地方就是程序需要等待执行后面的程序，语义化很强，下面总结一下**async函数的特点**：      
1. 语义化强
2. 里面的await只能在async函数中使用
3. await后面的语句可以是promise对象、数字、字符串等
4. async函数返回的是一个Promsie对象
5. await语句后的Promise对象变成reject状态时，那么整个async函数会中断，后面的程序不会继续执行

基于上面的async的特点，我们会用到异常捕获机制，学过java的都知道，java中有异常捕获try...catch...

```
try/catch/finally 语句用于处理代码中可能出现的错误信息。
错误可能是语法错误，通常是程序员造成的编码错误或错别字。也 可能是拼写错误或语言中缺少的功能（可能由于浏览器差异）。
try语句允许我们定义在执行时进行错误测试的代码块。
catch 语句允许我们定义当 try 代码块发生错误时，所执行的代码块。
finally 语句在 try 和 catch 之后无论有无异常都会执行。
注意： catch 和 finally 语句都是可选的，但你在使用 try 语句时必须至少使用一个。
提示： 当错误发生时， JavaScript 会停止执行，并生成一个错误信息。使用 throw 语句 来创建自定义消息(抛出异常)。如果你将 throw 和 try 、 catch一起使用，就可以控制程序输出的错误信息。
```
在async中的使用：
```
  const fs = require("fs");
  const read = function(fileName){
      return new Promise((resolve,reject)=>{
          fs.readFile(fileName,(err,data)=>{
              if (err) {
                  reject(err);
              } else{
                  resolve(data);
              }
          });
      });
  };
  async function readByAsync(){
      try{
          let a1 = await read('1.txt');
          let a2 = await read('2.txt');
          let a3 = await read('3.txt');
      }catch(e){
          //TODO handle the exception
      }
      console.log(a1);
      console.log(a2);
      console.log(a3);
  }
  readByAsync();
```

## 五、面向对象
面向对象最重要的概念就是类（Class）和实例（Instance），必须牢记类是抽象的模板，比如Student类，而实例是根据类创建出来的一个个具体的“对象”，每个对象都拥有相同的方法，但各自的数据可能不同。
### 1、面向对象都需要先面向过程吗？
软件开发中面向过程是一定的，程序--过程的有序执行，即所有的程序都是过程
### 2、javascript中面向对象和组件化有何异同，与模块化又有何异同？
面向对象主要就是将以前的面向过程的函数的书写方式进行区别，面向对象最重要的就是继承。
所以：面向过程还是面向对象是指代码的组织方式，而组件化和模块化是指项目中功能的组织方式，所以两者无关。
### 3、面向对象原型和原型链
构造函数的原型 和 通过构造函数创建出来的对象的原型链 指向是一样的，都是指向 原型对象。
原型对象的构造函数 和 通过构造函数创建出来的对象的构造函数 是一样的。