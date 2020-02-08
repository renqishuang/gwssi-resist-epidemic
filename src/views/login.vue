<template>
  <div class="login-wrap">
    <el-form :model="model" class="login-form" label-width="100px">
      <el-form-item label="手机号">
        <el-input v-model="model.phone" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item label="验证码">
        <el-input v-model="model.yzm" placeholder="请输入验证码">
            <template slot="append"><span :style="{pointerEvents:loginVerCodeDisable?'none':'auto'}" @click="getVertifiCode">{{loginVerCodeText}}</span></template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="primary" @click="onSubmit">登  录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model:{
          phone:'',
          yzm:''
      },
      loginVerCodeTimer:null,
      loginVerCodeDisable:false,
      loginVerCodeText:"获取验证码"
    };
  },
  methods:{
      onSubmit(){
        //   alert(1)
      },
      getVertifiCode(){
        // if(this.model.phone === ''){
        //     this.$message.error('请输入手机号')
        //     return
        // }else {
        //     //判断手机格式是否正确
        //     let phoneReg = new RegExp(/^1[3|4|5|7|8][0-9]\d{8}$/)
        //     if (!phoneReg.test(this.model.phone)) {
        //         this.$message.error('手机号格式不正确')
        //         return
        //     }
        // }
        //调用获取验证码接口,
        let count = 60
        this.loginVerCodeText = '(' +count + ')秒'
        this.loginVerCodeDisable=true
        if(this.loginVerCodeTimer === null){
            this.loginVerCodeTimer = setInterval(()=>{
                count--
                this.loginVerCodeText = '(' +count + ')秒'
                if(count <= 0){
                    this.loginVerCodeText="获取验证码"
                    this.loginVerCodeDisable=false
                    clearInterval(this.loginVerCodeTimer)
                    this.loginVerCodeTimer = null
                }
            },1000)
        }
      }
  }
};
</script>

<style lang="stylus">
.login-wrap
    height 100%
    display flex
    justify-content center
    align-items center
    .login-form
        width 4rem
        padding 22px 10px 0 10px
        border 1px solid #2e2582
        border-radius 4px
        .el-form-item
            &:nth-child(2)
                .el-input-group__append
                    min-width 73px
                    padding 0 0px !important
                    cursor pointer
                    text-align center
                    user-select none
                    span
                        display inline-block
                        width 100%
                        height 38px
                        line-height 38px
                        border-top-right-radius 4px
                        border-bottom-right-radius: 4px
                        &:hover
                            background-color #96a2b4
                            color white
                        &:active
                            background-color #7e90ab    
            &:nth-child(3)
                .el-form-item__content
                    margin-left 0 !important
                    text-align center
</style>