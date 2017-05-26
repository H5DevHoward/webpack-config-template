# Vue template



> ## Technology stack

- ### *vue2*

- ### *vuex2*

- ### *vue-router*

- ### *webpack2*

- ### *eslint*

- ### *element-ui*

- ### *fetch*



### Step1.

```Shell
$ npm install
```

### Step2.

```shell
$ npm run dev #preview/open NODE_ENV=development
```


### Step3.

```Shell
$ npm run build #build this project
```



## 目录结构

```
.
├── config/              # Webpack和postcss 配置目录
├── dist/                # build 生成的生产环境下的项目
├── dev/                 # 源码目录（开发都在这里进行）
│   ├── assets/            # 放置需要经由 Webpack 处理的静态文件
│   ├── components/        # 组件
│   ├── filters/           # 过滤器
│   ├── mixins/            
│   ├── routes/            # 路由
│   ├── services/          # 服务（统一管理 XHR 请求）
│   ├── store/             # 状态管理
│   ├── utils/             # 工具类
│   ├── views/             # 路由页面组件
│   ├── index.js           # 启动文件
│   ├── index.html         # 静态基页
├── static/              # 放置无需经由 Webpack 处理的静态文件
├── .babelrc             # Babel 转码配置
├── .eslintignore        # （配置）ESLint 检查中需忽略的文件（夹）
├── .eslintrc            # ESLint 配置
├── .gitignore           # （配置）需被 Git 忽略的文件（夹）
├── package.json         # （这个就不用多解释了吧）
```



#### `dev/components/`

- 主要是全局性的，或通用性很强的组件，具备良好的封装性
- 一般不会涉及到具体的业务逻辑

#### `dev/views/`

- 主要是业务性的页面组件，基本不具备通用性

- 基本与路由一一对应（例如 `/dev/views/auth/login.vue` 对应着路由 `/auth/login`）

  ​

> 若多个功能模块通用的，则建议移到全局，即 `dev/components/` 等

