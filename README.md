# webpack2-config-template

### Step1. 

```
$ npm install
```

### Step2.

> #### **Vue**

- Init vue template

##### ***test:***

```
$ node init vue DemoComponent
```

##### ***result:***

- ##### Entry文件:  App.vue    (Path: dev/script/components/)

- ##### Component文件:  DemoComponent.vue    (Path: dev/script/components/)

- ##### JS文件:  index.js    (Path: dev/script/)

- ##### HTML文件:  index.html    (Path: dev/)

> #### **React**

- Init react template

##### ***test:***

```
$ node init react DemoComponent
```

##### ***result:***

- ##### Component文件夹:  DemoComponent    (Path: dev/script/components/)

- ##### JS文件:  index.js    (Path: dev/script/)

- ##### HTML文件:  index.html    (Path: dev/)

### Step3.

```
$ npm run dev #预览/开发普通或react项目
```

```
$ npm run vue #预览/开发vue项目
```

### Step4.

```
$ npm run build #生成最终产品
```


> ### Tools:

- ***Create a react component folid named 'DemoReactComponent'***

**|DemoReactComponent ----**

**DemoReactComponent.jsx / DemoReactComponent.scss / index.js**

```
$ node new react DemoReactComponent
```

- ***Create a vue component file named 'DemoVueComponent.vue'***

**DemoVueComponent.vue**

```
$ node new vue DemoVueComponent
```

