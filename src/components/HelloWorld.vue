<template>
  <div class="hello">
    <el-collapse-transition>
      <div v-show="this.$root.intro">
        <el-row class="top-splash">
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <div class="grid-content right-column">
              <h1>{{ title }}</h1>
              <p>{{ msg }}</p>
              <el-button type="primary" @click="onSubmit">Hire Us</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-collapse-transition>

    <el-collapse-transition>
      <div v-show="this.$root.work">
        <h2>Work</h2>
        <el-row :gutter="10">
          <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" style="padding: 10px;">
            <el-card :body-style="{ padding: '0px' }">
              <div style="padding: 50px;">
                <img src="../assets/apollo-logo.png" class="image devices">
              </div>
              <div style="padding: 14px;">
                <span>ApolloGroup, Inc.</span>
                <div class="bottom clearfix">
                  <span>Recruitment and Offer Analytics</span>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" style="padding: 10px;">
            <el-card :body-style="{ padding: '0px' }">
              <div style="padding: 50px;">
                <img src="../assets/ma-logo.png" class="image devices">
              </div>
              <div style="padding: 14px;">
                <span>Mindful Activism</span>
                <div class="bottom clearfix">
                  <span>Mindful Education + Community</span>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" style="padding: 10px;">
            <el-card :body-style="{ padding: '0px' }">
              <div style="padding: 50px;">
                <img src="../assets/pw-logo.png" class="image devices">
              </div>
              <div style="padding: 14px;">
                <span>Pathwrangler</span>
                <div class="bottom clearfix">
                  <span>Adventurers and Community</span>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" style="padding: 10px;">
            <el-card :body-style="{ padding: '0px' }">
              <div style="padding: 50px;">
                <img src="../assets/ba-logo.png" class="image devices">
              </div>
              <div style="padding: 14px;">
                <span>Brown's Almanac</span>
                <div class="bottom clearfix">
                  <span>Healthcare Costs and Benefits</span>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-collapse-transition>




  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      title: 'Apps + Designs + Adventure',
      msg: 'We are a small and agile group of experienced designers and developers.',
      formInline: {
        email: ''
      }
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.devices {
  width: 100%;
}
.right-column {
  padding: 0 30px;
}
.top-splash {
  /*padding: 40px 0;*/
  padding: 34vh 0;
}
</style>
