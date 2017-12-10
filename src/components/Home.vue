<template>
  <div class="home">
    <el-row class="top-splash">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <img src="../assets/flatiron.png" class="flatiron">
        <div class="grid-content right-column">
          <h1>{{ title }}</h1>
          <p>{{ msg }}</p>
          <router-link :to="{name: 'Learn'}" tag="el-button" class="hello-btn el-button--primary">Learn More About Us</router-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      title: 'Apps + Designs + Adventure',
      msg: 'We are a small and agile group of experienced designers and developers.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.top-splash {
  padding: 20vh 0;
}
.flatiron {
  width: 230px;
}
.hello-btn {
  font-size: 1.1em;
}
</style>
