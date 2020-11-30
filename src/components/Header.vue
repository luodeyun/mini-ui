<template>
    <div id = 'Header'>
<mt-header title="学前端，到学问 " fixed>

    <div slot='left'>
     <mt-button icon='back'></mt-button>

    </div>
    <div slot='right'>
        <mt-button icon='more'></mt-button>
    </div>
</mt-header>
<mt-button ></mt-button>
 <ul  style='margin:0'>
     <li>
         <router-link to='/register'>
         <mt-button type='primary' size='large'>登录页面</mt-button></router-link>
     </li>
     <li>
         <router-link to='/button'>
         <mt-button type='primary' size='large'>BUTTON页面</mt-button></router-link>
     </li>
     <li>
         <router-link to='/Filed'>
         <mt-button type='danger' size='large'>表单页面</mt-button></router-link>
     </li>
       <li>
         <router-link to='/Navbar'>
         <mt-button type='primary' size='large'>navbar页面</mt-button></router-link>
     </li>
    <li>
         <router-link to='/index'>
         <mt-button type='primary' size='large'>index页面</mt-button></router-link>
    </li>
      <li>
         <router-link to='/article'>
         <mt-button type='primary' size='large'>article页面</mt-button></router-link>
    </li>
 </ul>
     </div>
</template>;

<script>
    export default{ 
          components:{

          }
     }
 </script>
 <style>
   ul{
       margin-top:40px;
   }
   ul li{
       margin-top:20px
   }

</style>