<template>
  <div class="team">
    <h2>{{ title }}</h2>
    <p>We are a small and agile group of experienced designers and developers.</p>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" v-for="member in team" v-bind:data="member" v-bind:key="member.name">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="'../src/assets/' + member.image" class="image">
          <div class="team-profile">
            <span>{{ member.name }}</span>
            <br>
            <span>{{ member.title }}</span>
            <div class="bottom clearfix">
              <el-popover
                placement="right"
                width="500"
                trigger="click"
                :content="member.bio">
                <el-button slot="reference" type="text">Bio</el-button>
              </el-popover>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <h2>Remote</h2>
    <p>San Francisco + Denver + Boulder</p>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <iframe src="https://test.beta.pathwrangler.com:443/pwmap/tim/pdubs" width="100%" height="500" frameborder="0" style="border:0"></iframe>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Team',
  data () {
    return {
      title: 'Team',
      msg: 'We are a small and agile group of experienced designers and developers.',
      team: [
        {
          id: 0,
          name: 'Tim Skaggs',
          title: 'Senior Developer + UX',
          bio: 'Tim’s been involved in the tech scene as a professional developer and a tinkerer for over a decade. He ran a development consultant company or three years and then created apps with startups for over three years. His coding skills were developed in the field that have included two incubators, funded startups, and fast growing cloud technology companies. When he’s not coding, he’s traveling and exploring the great outdoors.',
          image: 'Tim_profile.png',
          attr: 10
        },
        {
          id: 1,
          name: 'Doug Heinz',
          title: 'Senior',
          bio: 'He\'s worked for a decade and a half for a wide variety of companies (Fortune 100 investment banks, financial services/software companies, start-ups, mid-sized growth and pre-IPO tech companies). The common ground is that all of them made something that is anathema to the Silicon Valley: revenue. His experience with these companies has allowed him to take the best of these companies, strain out the not-so-great stuff and create a company, which is an eternal learning environment, devoid of pretension and monetarily sustainable.',
          image: 'Doug_profile.png',
          attr: 9
        },
        {
          id: 2,
          name: 'J Lincoln Dennis',
          title: 'Developer',
          bio: 'A meme enthusiast and developer from Denver, Colorado. Before earning his Web Development merit badge, Lincoln received a BFA in Theatre from the University of Northern Colorado, which subsequently prepared him for lengthly career in the food service industry. Lincoln is particularly interested in the intersection of art, technology and (*shudder*) politics. At least until his beauty vlog takes off… then it\'s, See ya later, suckers. His hobbies include comic books, playing his ukulele in interesting locations (interpret that however you wish) and writing Phil\'s bio.',
          image: 'Lincoln_profile.png',
          attr: 8
        },
        {
          id: 3,
          name: 'Phil Skaggs Jr.',
          title: 'Developer + UX + Copy',
          bio: 'A designer, developer and storyteller based out of Boulder, Colorado. Probably. I mean, he is all of those things, I\'m just not exactly sure where he lives. Anyway, Phil has a background in branding and communication, and is passionate about bots and punk rock dolphins. He also apparently produced a pilot for PBS? That\'s pretty neat!',
          image: 'Phil_profile.png',
          attr: 7
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
.team-profile {
  padding: 14px; 
  text-align: left;
}
.image {
  width: 100%;
}
</style>
