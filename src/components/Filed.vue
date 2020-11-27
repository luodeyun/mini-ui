<template>
    <div>
<mt-field label="用户名" placeholder="请输入用户名" :state='state' v-model="username" :attr="{minlength:'3',maxlength:'10'}"></mt-field>
<mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password" :attr="{autocomplete:'off'}"></mt-field>
<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
<mt-field label="网站" placeholder="请输入网址" type="url" v-model="website"></mt-field>
<mt-field label="数字" placeholder="请输入数字" type="number" v-model="number"></mt-field>
<mt-field label="生日" placeholder="请输入生日" type="date" ></mt-field>
<mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4" ></mt-field>
     </div>
</template>;

<script>
    export default{ 
          components:{
          },
          data(){
              return {
                  state:'',
                  username:'',
                  email:'807799686@qq.com',
                  phone:'18372028861',
                  website:'lalal',
                  number:'',
                  password:''
              }
          },watch: {
              username(){
                  if(this.username.length=='3'){
                      this.state='warning'
                  }
              }
          },
        
     }
 </script>
 <style>

</style>