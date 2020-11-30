<template>
    <div>
          <!-- 顶部 -->
          <div>
              <mt-header title='学前端，到学问'>
                   <router-link to='/' slot='left'>
                        <mt-button icon='back'></mt-button>
                   </router-link>  
                   <router-link to='/' slot='right'>
                       登录
                    </router-link>
              </mt-header>
          </div>
          <!-- 表单 -->
          <div>
              <mt-field type='text' label='用户名' @blur.native.capture="hand" placeholder='请输入用户名' :attr={maxlength:8} v-model="username" :state='usernameState'></mt-field>
              <mt-field type='password' label='密码' placeholder='请输入密码' @blur.native.capture='Password' :attr={maxlength:8} v-model='password' :state='userpasswordState'></mt-field>
              <mt-field type='password' label='确认密码' @blue.native.capture='checkpassword' placeholder='请确认输入密码' :attr={maxlength:16} v-model="conpassword" :state='conpasswordState'></mt-field>
              <mt-button type='danger' size='large' id='sss'  @click="handle" >免费注册</mt-button>
          </div>
    </div>
</template>;

<script>
export default {
  components: {},
  data() {
    return {
      username: "",
      password: "",
      conpassword: "",
      usernameState: "",
      userpasswordState: "",
      conpasswordState: ""
    };
  },
  methods: {
    hand() {
      let usernameRegExp = /^[0-9A-Za-z]{6,12}$/;
      if (usernameRegExp.test(this.username)) {
        this.usernameState = "success";
        this.$toast("用户名正确");
      } else {
        this.usernameState = "error";
        this.$toast("用户名错误");
        //this.$toast({
        /*message:'提升信息'，
             position:'top|middle|bottom'  提示信息出现的位置
             duration:3000                 提升信息持续的时间
       })*/
        return true;
      }
    },
    Password() {
      let passwordRegExp = /^[0-9A-Za-z]{6,16}$/;
      console.log(1);

      if (passwordRegExp.test(this.password)) {
        this.userpasswordState = "success";
        console.log(1);
      } else {
        this.userpasswordState = "error";
        this.$toast({
          message: "密码错误",
          position: "middle",
          duration: 2500
        });
        return false;
      }
    },
    checkpassword() {
      if (this.password === this.conpassword) {
        this.$toast("登陆成功");
      } else {
        this.$toast("两次密码输入不一致");
      }
    }
  },
   handle() {
      //调用之前的检测用户名、密码及两次密码是否一致函数
      //需要注意的是:此时会引发短路求值的现象
      //A.在逻辑或运算时,第一个表达式的结果为true会造成短路
      //B.在逻辑与运算时,第一个表达式的结果为false会造成短路
      if(this.checkUsername() && this.checkPassword() && this.checkConpassword()){
        //此时需要将用户名、密码等信息的提交到WEB服务器
      }
    },
  
};
</script>
 <style>
#sss {
  color: green;
  background-color: aqua;
}
</style>