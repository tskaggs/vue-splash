<template>
  <div class="contact">
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="grid-content right-column">
          <h1>{{ title }}</h1>
          <p>{{ msg }}</p>
          <p><el-button type="text">info@pathwrangler.com</el-button></p>
          <el-row type="flex" class="row-bg" justify="center">
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" label-position="top" class="hire-form">
                <el-form-item label="Name" prop="name">
                  <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="Email" prop="email">
                  <el-input v-model="ruleForm.email"></el-input>
                </el-form-item>
                <el-form-item label="Type" prop="type">
                  <el-checkbox-group v-model="ruleForm.type">
                    <el-checkbox label="Development" name="type"></el-checkbox>
                    <el-checkbox label="Design" name="type"></el-checkbox>
                    <el-checkbox label="Copy" name="type"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="Details" prop="desc">
                  <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">Send</el-button>
                  <el-button @click="resetForm('ruleForm')">Reset</el-button>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      title: 'Contact',
      msg: 'Drop us a line!',
      ruleForm: {
        name: '',
        email: '',
        type: [],
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: 'Please input name', trigger: 'blur' },
          { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
        ],
        email: [
          { required: true, message: 'Please input email', trigger: 'blur' },
          { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
        ],
        type: [
          { type: 'array', required: true, message: 'Please select at least one type', trigger: 'change' }
        ],
        desc: [
          { required: true, message: 'Let us know what you need', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.hire-form {
  text-align: left;
}
</style>
