## vue-finger

> Vuejs 手势库，基于 [AlloyFinger][AlloyFinger] 开发

### 预览

[Live Demo][Demo]  

移动端体验更佳  
`PC` 端记得打开<font color="#fa9d14">手机模拟器</font>

### 安装

```sh
npm i -S @gauseen/vue-finger
# OR
yarn add @gauseen/vue-finger
```

### 使用

```js
// main.js

import Vue from 'vue'
import VueFinger from '../src/directives'

Vue.use(VueFinger)
```

```html
<template>
  <button v-fg:tap="tap" :style="styleTapBgColor">tap</button>
</template>

<script>
export default {
  name: 'demo',
  methods: {
    tap (evt) {
      console.log('tap: ', evt)
    },
  },
}
</script>
```

### Api

#### 监听手势事件  

可以用 `v-fg` 指令监听 `DOM` 手势事件，并在触发时运行 `JavaScript` 函数

#### `v-fg`

- **值：** `Function`
- **参数手势：** `touchStart | touchMove | touchEnd | touchCancel | tap | doubleTap | singleTap | longTap | rotate | pinch | pressMove | swipe | multipointStart | multipointEnd`  

**示例:**
```html
<template>
  <!-- 双击 -->
  <button v-fg:doubleTap="someHandle">doubleTap</button>
  <!-- 上、右、下、左滑动 -->
  <button v-fg:swipe="someHandle">swipe</button>
  <!-- 双指旋转-->
  <button v-fg:rotate="someHandle">rotate</button>
  <!-- 双指缩放-->
  <button v-fg:pinch="someHandle">rotate</button>
</template>

<script>
export default {
  name: 'demo',
  methods: {
    someHandle (evt) {
      console.log('someHandle: ', evt)
    },
  },
}
</script>
```



<!-- 链接 -->
[AlloyFinger]: https://github.com/AlloyTeam/AlloyFinger
[Demo]: https://gauseen.github.io/vue-finger
