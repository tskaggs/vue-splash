<template>
  <div class="work">
    <h2>{{ title }}</h2>
    <el-row class="blurb">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" v-for="blurb in blurbs" v-bind:data="blurb" v-bind:key="blurb.title">
        <h1>{{ blurb.title }}</h1>
        <p>{{ blurb.msg }}</p>
      </el-col>
    </el-row>

    <h2>{{section}}</h2>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" v-for="work in works" v-bind:data="work" v-bind:key="work.name">
        <el-card :body-style="{ padding: '0px' }">
          <div class="company">
            <img :src="'../src/assets/' + work.image" class="image">
          </div>
          <div class="company-profile">
            <span>{{ work.name }}</span>
            <div class="bottom clearfix">
              <span class="company-tagline">{{ work.tagline }}</span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Work',
  data () {
    return {
      title: 'Work',
      msg: 'We are a small and agile group of experienced designers and developers.',
      blurbs: [
        {
          title: 'Web Development',
          msg: 'With an experienced and agile team, P.Dub Labs offers forward looking web development for organizations. We are able to listen to your needs and offer effective solutions that fit within your budget.'
        },
        {
          title: 'Branding & Design',
          msg: 'Our team comes from a variety of backgrounds and are able to offer services in addition to development. Whether you are just starting or an established organization, we are able to help you with from company-wide branding to your first logo.'
        }
      ],
      section: 'Portfolio',
      works: [
        {
          id: 0,
          name: 'ApolloGroup, Inc.',
          tagline: 'Recruitment and Offer Analytics',
          image: 'apollo-logo.png'
        },
        {
          id: 1,
          name: 'Mindful Activism',
          tagline: 'Mindful Education + Community',
          image: 'ma-logo.png'
        },
        {
          id: 2,
          name: 'Pathwrangler',
          tagline: 'Adventurers and Community',
          image: 'pw-logo.png'
        },
        {
          id: 3,
          name: 'Brown\'s Almanac',
          tagline: 'Healthcare Costs and Benefits',
          image: 'ba-logo.png'
        }
      ]
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
