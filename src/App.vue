<template>
  <el-container id="app">
    <el-header style="text-align: right;">
      <router-link :to="{name: 'Home'}" tag="el-button" class="el-button--text el-home-link">Pdub Labs</router-link>
      <router-link :to="{name: 'Learn'}" tag="el-button" class="el-button--text">Learn</router-link>
      <router-link :to="{name: 'Team'}" tag="el-button" class="el-button--text">Team</router-link>
      <router-link :to="{name: 'Work'}" tag="el-button" class="el-button--text">Work</router-link>
      <router-link :to="{name: 'Contact'}" tag="el-button">Hire Us</router-link>
    </el-header>
    <el-main>
      <transition name="el-fade-in-linear">
        <router-view/>
      </transition>
    </el-main>
    <el-footer>
      <el-popover
        ref="popover2"
        placement="right"
        width="300"
        trigger="click">
        <span>Built with <a href="https://vuejs.org/" target="_blank">Vue.js</a> and <a href="http://element.eleme.io/#/en-US" target="_blank">Element UI</a>. :)</span>
      </el-popover>
      <el-button type="text" icon="el-icon-circle-check el-footer-button" v-popover:popover2></el-button>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  beforeRouteUpdate (to, from, next) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    next()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-header {
  width: 100%;
  position: fixed;
  z-index: 1;
}
.el-main {
  padding-top: 60px;
}
.el-home-link {
  float: left;
}
.el-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: right;
}
.el-footer-button {
  font-size: 1.5em;
}
</style>
