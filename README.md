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
$ npm run init vue DemoComponent
```

##### ***result:***

- ##### Entry:
  App.vue    (Path: dev/script/components/)

- ##### Component:
  DemoComponent.vue    (Path: dev/script/components/)

- ##### JS:  
  index.js    (Path: dev/script/)

- ##### HTML:  
  index.html    (Path: dev/)

> #### **React**

- Init react template

##### ***test:***

```
$ npm run init react DemoComponent
```

##### ***result:***

- ##### Component:  
  DemoComponent    (Path: dev/script/components/)

- ##### JS:  
  index.js    (Path: dev/script/)

- ##### HTML:  
  index.html    (Path: dev/)

### Step3.

```
$ npm run dev #预览/开发普通项目
```

```
$ npm run react #预览/开发react项目
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
$ npm run new react DemoReactComponent
```

- ***Create a vue component file named 'DemoVueComponent.vue'***

**DemoVueComponent.vue**

```
$ npm run new vue DemoVueComponent
```
