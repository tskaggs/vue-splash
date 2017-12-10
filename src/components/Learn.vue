<template>
  <div class="learn">
    <h2>{{ title }}</h2>
    <span>{{ msg }}</span>
  </div>
</template>

<script>
export default {
  name: 'Learn',
  data () {
    return {
      title: 'Learn',
      msg: 'We learns a lot.',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.company {
  padding: 20px;
}
.image {
  width: 100%;
}
.company-profile {
  padding: 14px; 
}
.company-tagline {
  font-size: 13px;
  color: #999;
}
.blurb {
  padding: 60px 0;
}
</style>
