<template>
    <div>
        <div class='top' fixed>
        <mt-header title='学前端，到学问' ></mt-header>
        <mt-navbar v-model="active"  >
          <mt-tab-item id="a"><img src="../assets/html5.png" alt="" slot="icon">HTML5</mt-tab-item>
          <mt-tab-item id="b"><img src="../assets/CSS.png" alt="" slot='icon'>CSS3</mt-tab-item>
          <mt-tab-item id="c"><img src="../assets/js.png" alt="" slot='icon'>JS</mt-tab-item>
        </mt-navbar>      
        </div>
        <div class='main'>
            <!-- tab-containder -->
             <mt-tab-container v-model="active">
                    <mt-tab-container-item id='a'>
                        <p v-for="(v, k) of 50" :key="k">{{ v }}</p>
                        </mt-tab-container-item> 
                    <mt-tab-container-item id='b'>22</mt-tab-container-item> 
                    <mt-tab-container-item id='c'>33</mt-tab-container-item> 
             </mt-tab-container>
        </div>

        <mt-tabbar  v-model=" selectedTab" fixed  >
            <mt-tab-item id='indexs'> <img src="../assets/myhome2.png" alt="" slot='icon' v-if="selectedTab=='indexs'"> <img src="../assets/myhome.png" alt="" slot='icon'  v-else >首页</mt-tab-item>        
            <mt-tab-item id='me'><img src="../assets/my.png" alt="" slot='icon' v-if="selectedTab=='indexs'"> <img src="../assets/my2.png" alt="" slot='icon' v-else>我的</mt-tab-item>           
        </mt-tabbar> 
        
     </div>
</template>;

<script>
export default {
  data() {
    return {
      active: "a",
      selectedTab:'indexs'
    };
  },
   watch: {
    selectedTab(value) {
      if (value == "indexs") {
        this.$router.push("/");
      } else if (value == "me") {
        this.$router.push("/button");
      }
    },}
};
</script>
 <style>
.top {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 999;
}
.main {
  margin-top: 117px;
  margin-bottom: 55px
}
</style>