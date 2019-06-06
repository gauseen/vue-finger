## vue-finger

> Vuejs 手势库，基于 [AlloyFinger][AlloyFinger] 开发

### [Live Demo][Demo]

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


<!-- 链接 -->
[AlloyFinger]: https://github.com/AlloyTeam/AlloyFinger
[Demo]: '