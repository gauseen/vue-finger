<template>
  <div id="app">

    <button v-fg:tap="tap" :style="styleTapBgColor">tap</button> <br />
    <button v-fg:doubleTap="doubleTap" :style="styleDoubleTapBgColor">doubleTap</button> <br />
    <button v-fg:longTap="longTap" :style="styleLongTapBgColor">longTap</button> <br />
    <button v-fg:pressMove="pressMove">pressMove X: {{moveX}}</button> <br />
    <button v-fg:swipe="swipe">{{swipeDirection}}</button> <br />

    <div class="box" v-fg:rotate="rotate" :style="styleRotate">rotate {{angle}}</div>
    <div class="box" v-fg:pinch="pinch" :style="stylePinch">pinch {{zoom}}</div>
  </div>
</template>

<script>
import { getRandomColor } from './utils'

export default {
  name: 'app',
  data () {
    return {
      colorTap: '#0cd',
      colorDoubleTap: '#ecd',
      colorLongTap: '#eee',
      moveX: 0,
      angle: 0,
      zoom: 1,
      swipeDirection: 'swipe'
    }
  },
  methods: {
    tap (evt) {
      this.colorTap = getRandomColor()
      console.log('tap: ', evt)
    },
    doubleTap (evt) {
      this.colorDoubleTap = getRandomColor()
      console.log('doubleTap: ', evt)
    },
    longTap (evt) {
      this.colorLongTap = getRandomColor()
      console.log('doubleTap: ', evt)
    },
    rotate (evt) {
      this.angle += evt.angle
      console.log('rotate: ', evt.angle)
    },
    pinch (evt) {
      this.zoom = evt.zoom
      console.log('pinch: ', evt.zoom)
    },
    pressMove (evt) {
      this.moveX += evt.deltaX
      console.log('pressMove X: ', evt.deltaX)
      console.log('pressMove Y: ', evt.deltaY)
      console.log('moveX: ', this.moveX)
    },
    swipe (evt) {
      this.swipeDirection = evt.direction
      console.log('swipe: ', evt.direction)
    },
    finger (evt) {
      console.log('evt========= ', evt)
    }
  },
  computed: {
    styleRotate () {
      return {
        transform: `rotate(${this.angle}deg)`
      }
    },
    stylePinch () {
      return {
        transform: `scale(${this.zoom})`
      }
    },
    styleTapBgColor () {
      return {
        backgroundColor: this.colorTap
      }
    },
    styleDoubleTapBgColor () {
      return {
        backgroundColor: this.colorDoubleTap
      }
    },
    styleLongTapBgColor () {
      return {
        backgroundColor: this.colorLongTap
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
  user-select: none;
  text-align: center;
}
button {
  line-height: 2em;
}
#app .box {
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 120px;
  height: 120px;
  line-height: 120px;
  margin: 0 10px;
  transition: all 0.1s ease;
}
</style>
